import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, ShieldCheck, RefreshCw } from 'lucide-react';
import { contactFormSchema, ContactFormData, inquiryTypes } from '../../lib/validation';
import { submitEnquiry } from '../../lib/api';
import { Button } from '../ui/Button';

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const paramType = searchParams.get('type');
  const paramArea = searchParams.get('area');

  const getInitialInquiryType = () => {
    if (paramType === 'demo') return 'Demo request';
    if (paramType === 'pilot') return 'Demo request';
    if (paramType === 'technical') return 'Technical integration';
    if (paramType === 'research') return 'Research collaboration';
    return 'Demo request';
  };

  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    organization: '',
    areaOfInterest: paramArea || 'Machine Vision & Tracking',
    inquiryType: getInitialInquiryType() as ContactFormData['inquiryType'],
    siteCharacteristics: '',
    message: '',
    websiteUrl: '', // Honeypot trap
    dataConsent: false as unknown as true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceId?: string;
    message: string;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear field-level error on interaction
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Client-side schema validation
    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      // Focus first error field for accessibility
      const firstErrorKey = Object.keys(fieldErrors)[0];
      const element = document.getElementById(`field-${firstErrorKey}`);
      if (element) {
        element.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Dispatch payload to verified backend endpoint
      const response = await submitEnquiry(result.data);

      if (response.success) {
        setSubmissionSuccess({
          referenceId: (response.data as { referenceId?: string })?.referenceId || `HTK-${Date.now().toString().slice(-6)}`,
          message: response.message,
        });
      } else {
        if (response.errors) {
          const mapped: Record<string, string> = {};
          Object.entries(response.errors).forEach(([key, val]) => {
            mapped[key] = Array.isArray(val) ? val[0] : val;
          });
          setErrors(mapped);
        }
        setServerError(response.message);
      }
    } catch {
      setServerError('An unexpected network interruption occurred. Please verify your connection or email our engineering desk directly at engineering@hatak-r.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionSuccess(null);
    setFormData({
      fullName: '',
      workEmail: '',
      phoneNumber: '',
      organization: '',
      areaOfInterest: 'Machine Vision & Tracking',
      inquiryType: 'Demo request',
      siteCharacteristics: '',
      message: '',
      websiteUrl: '',
      dataConsent: false as unknown as true,
    });
    setErrors({});
    setServerError(null);
  };

  if (submissionSuccess) {
    return (
      <div
        className="p-8 rounded-xl border border-emerald-300 bg-emerald-50/70"
        role="alert"
        aria-live="polite"
      >
        <div className="flex items-center gap-3 text-emerald-900 mb-4">
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold">Inquiry Successfully Transmitted</h3>
        </div>
        <p className="text-sm text-emerald-800 mb-4 leading-relaxed">
          {submissionSuccess.message}
        </p>
        <div className="p-4 bg-white rounded-lg border border-emerald-200 mb-6 text-xs font-mono text-brand-navy">
          <span className="text-slate-500 font-semibold block mb-1 uppercase tracking-wider">Dispatched Reference ID:</span>
          <span className="font-bold text-lg tracking-wider text-brand-red">
            {submissionSuccess.referenceId}
          </span>
        </div>
        <p className="text-xs text-emerald-800 mb-6 leading-relaxed">
          Our systems engineering team reviews all technical parameters under non-disclosure governance. A confirmation alert has been queued for our team.
        </p>
        <Button variant="primary" size="sm" onClick={handleReset} className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {serverError && (
        <div
          className="p-4 bg-red-50 text-brand-red rounded-lg border border-red-200 flex items-start gap-3"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-bold block mb-0.5">Transmission Error</span>
            <span>{serverError}</span>
          </div>
        </div>
      )}

      {/* Honeypot field (anti-automation bot trap) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="field-websiteUrl">Leave this field blank</label>
        <input
          id="field-websiteUrl"
          type="text"
          name="websiteUrl"
          value={formData.websiteUrl || ''}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Grid: Full Name & Business Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="field-fullName"
            className="block text-xs font-semibold text-brand-navy mb-1.5"
          >
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="field-fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            value={formData.fullName || ''}
            onChange={handleChange}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'error-fullName' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded-md border bg-white text-brand-navy placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent ${
              errors.fullName ? 'border-red-400 bg-red-50/40' : 'border-brand-border'
            }`}
            placeholder="e.g. Dr. Rajesh Sharma"
          />
          {errors.fullName && (
            <p id="error-fullName" className="mt-1 text-xs text-brand-red font-medium">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="field-workEmail"
            className="block text-xs font-semibold text-brand-navy mb-1.5"
          >
            Business Email <span className="text-brand-red">*</span>
          </label>
          <input
            id="field-workEmail"
            name="workEmail"
            type="email"
            required
            autoComplete="email"
            value={formData.workEmail || ''}
            onChange={handleChange}
            aria-invalid={!!errors.workEmail}
            aria-describedby={errors.workEmail ? 'error-workEmail' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded-md border bg-white text-brand-navy placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent ${
              errors.workEmail ? 'border-red-400 bg-red-50/40' : 'border-brand-border'
            }`}
            placeholder="name@organization.com"
          />
          {errors.workEmail && (
            <p id="error-workEmail" className="mt-1 text-xs text-brand-red font-medium">
              {errors.workEmail}
            </p>
          )}
        </div>
      </div>

      {/* Grid: Organization & Phone Number (Optional) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="field-organization"
            className="block text-xs font-semibold text-brand-navy mb-1.5"
          >
            Organization / Facility <span className="text-brand-red">*</span>
          </label>
          <input
            id="field-organization"
            name="organization"
            type="text"
            required
            autoComplete="organization"
            value={formData.organization || ''}
            onChange={handleChange}
            aria-invalid={!!errors.organization}
            aria-describedby={errors.organization ? 'error-organization' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded-md border bg-white text-brand-navy placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent ${
              errors.organization ? 'border-red-400 bg-red-50/40' : 'border-brand-border'
            }`}
            placeholder="Company or facility name"
          />
          {errors.organization && (
            <p id="error-organization" className="mt-1 text-xs text-brand-red font-medium">
              {errors.organization}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="field-phoneNumber"
            className="block text-xs font-semibold text-brand-navy mb-1.5"
          >
            Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            id="field-phoneNumber"
            name="phoneNumber"
            type="tel"
            autoComplete="tel"
            value={formData.phoneNumber || ''}
            onChange={handleChange}
            aria-invalid={!!errors.phoneNumber}
            aria-describedby={errors.phoneNumber ? 'error-phoneNumber' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded-md border bg-white text-brand-navy placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent ${
              errors.phoneNumber ? 'border-red-400 bg-red-50/40' : 'border-brand-border'
            }`}
            placeholder="+91 98765 43210"
          />
          {errors.phoneNumber && (
            <p id="error-phoneNumber" className="mt-1 text-xs text-brand-red font-medium">
              {errors.phoneNumber}
            </p>
          )}
        </div>
      </div>

      {/* Grid: Area of Interest & Enquiry Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="field-areaOfInterest"
            className="block text-xs font-semibold text-brand-navy mb-1.5"
          >
            Area of Interest <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <input
            id="field-areaOfInterest"
            name="areaOfInterest"
            type="text"
            value={formData.areaOfInterest || ''}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm rounded-md border border-brand-border bg-white text-brand-navy placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
            placeholder="e.g. Machine Vision, Motorized Mount, VMS"
          />
        </div>

        <div>
          <label
            htmlFor="field-inquiryType"
            className="block text-xs font-semibold text-brand-navy mb-1.5"
          >
            Enquiry Type <span className="text-brand-red">*</span>
          </label>
          <select
            id="field-inquiryType"
            name="inquiryType"
            required
            value={formData.inquiryType}
            onChange={handleChange}
            aria-invalid={!!errors.inquiryType}
            aria-describedby={errors.inquiryType ? 'error-inquiryType' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded-md border bg-white text-brand-navy transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent ${
              errors.inquiryType ? 'border-red-400 bg-red-50/40' : 'border-brand-border'
            }`}
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.inquiryType && (
            <p id="error-inquiryType" className="mt-1 text-xs text-brand-red font-medium">
              {errors.inquiryType}
            </p>
          )}
        </div>
      </div>

      {/* Site Characteristics / Profile */}
      <div>
        <label
          htmlFor="field-siteCharacteristics"
          className="block text-xs font-semibold text-brand-navy mb-1.5"
        >
          Site Perimeter Characteristics <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <input
          id="field-siteCharacteristics"
          name="siteCharacteristics"
          type="text"
          value={formData.siteCharacteristics || ''}
          onChange={handleChange}
          maxLength={200}
          className="w-full px-3.5 py-2.5 text-sm rounded-md border border-brand-border bg-white text-brand-navy placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent"
          placeholder="e.g. 10-acre industrial boundary, chain-link fence, existing lighting"
        />
        <span className="text-xs text-slate-500 mt-1 block">
          Briefly note perimeter length or sightline obstacles if inquiring about pilot deployment.
        </span>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="field-message"
          className="block text-xs font-semibold text-brand-navy mb-1.5"
        >
          Message & Requirements <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="field-message"
          name="message"
          rows={4}
          required
          value={formData.message || ''}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'error-message' : undefined}
          className={`w-full px-3.5 py-2.5 text-sm rounded-md border bg-white text-brand-navy placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent ${
            errors.message ? 'border-red-400 bg-red-50/40' : 'border-brand-border'
          }`}
          placeholder="Please describe your technical requirement, environment characteristics, and timeline..."
        />
        {errors.message && (
          <p id="error-message" className="mt-1 text-xs text-brand-red font-medium">
            {errors.message}
          </p>
        )}
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="pt-2">
        <div className="flex items-start gap-3">
          <input
            id="field-dataConsent"
            name="dataConsent"
            type="checkbox"
            checked={!!formData.dataConsent}
            onChange={handleChange}
            aria-invalid={!!errors.dataConsent}
            aria-describedby={errors.dataConsent ? 'error-dataConsent' : undefined}
            className="mt-0.5 h-4 w-4 rounded border-brand-border text-brand-red focus:ring-brand-red"
          />
          <label htmlFor="field-dataConsent" className="text-xs text-brand-slate leading-relaxed">
            I confirm that I am authorized to submit this enquiry on behalf of my organization and consent to Hatak R™ processing this information under our{' '}
            <a href="/privacy" target="_blank" className="font-semibold text-brand-navy underline hover:text-brand-red">
              Privacy Policy
            </a>
            . <span className="text-brand-red">*</span>
          </label>
        </div>
        {errors.dataConsent && (
          <p id="error-dataConsent" className="mt-1 text-xs text-brand-red font-medium ml-7">
            {errors.dataConsent}
          </p>
        )}
      </div>

      {/* Submit Button & Security Protocol */}
      <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-brand-border">
        <div className="flex items-center gap-2 text-xs text-brand-slate">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Strict server validation &bull; Zero public exposure &bull; SSL encrypted</span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={isSubmitting}
          className="gap-2 shrink-0 shadow-sm"
        >
          <Send className="w-4 h-4" />
          Submit Enquiry
        </Button>
      </div>
    </form>
  );
};
