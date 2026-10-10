import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, ShieldCheck, RefreshCw } from 'lucide-react';
import { contactFormSchema, ContactFormData, inquiryTypes } from '../../lib/validation';
import { submitEnquiry } from '../../lib/api';
import { Button } from '../ui/Button';

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get('type') === 'pilot' 
    ? 'Industrial Perimeter Pilot' 
    : 'General Technical Inquiry';

  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    fullName: '',
    workEmail: '',
    organization: '',
    inquiryType: defaultType as ContactFormData['inquiryType'],
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

    // Client-side schema validation (for user experience guidance)
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
      setServerError('An unexpected network interruption occurred. Please verify your internet connection or email our engineering desk directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionSuccess(null);
    setFormData({
      fullName: '',
      workEmail: '',
      organization: '',
      inquiryType: 'General Technical Inquiry',
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
        className="p-8 border border-emerald-300 bg-emerald-50/50 rounded-sm"
        role="alert"
        aria-live="polite"
      >
        <div className="flex items-center gap-3 text-emerald-800 mb-4">
          <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-600" />
          <h3 className="text-lg font-bold">Inquiry Successfully Transmitted</h3>
        </div>
        <p className="text-sm text-emerald-950 mb-4 leading-relaxed">
          {submissionSuccess.message}
        </p>
        <div className="p-3.5 bg-white border border-emerald-200 rounded-sm mb-6 text-xs font-mono text-emerald-900">
          <span className="text-slate-700 block mb-0.5">Dispatched Reference ID:</span>
          <span className="font-bold text-sm tracking-wide text-brand-navy">
            {submissionSuccess.referenceId}
          </span>
        </div>
        <p className="text-xs text-emerald-800 mb-6 leading-relaxed">
          Our engineering team reviews all technical parameters under non-disclosure governance. A confirmation email has been dispatched to your provided work email address.
        </p>
        <Button variant="outline" size="sm" onClick={handleReset} className="gap-2">
          <RefreshCw className="w-3.5 h-3.5" />
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {serverError && (
        <div
          className="p-4 bg-brand-red-light border border-brand-red/30 rounded-sm text-brand-navy flex items-start gap-3"
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-semibold block mb-0.5">Transmission Error</span>
            <span>{serverError}</span>
          </div>
        </div>
      )}

      {/* Honeypot field (hidden from assistive technologies and sighted users) */}
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

      {/* Grid: Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="field-fullName"
            className="block text-xs font-mono uppercase tracking-wider text-brand-navy font-semibold mb-2"
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
            className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-white text-brand-navy placeholder-brand-slate/50 transition-colors focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy ${
              errors.fullName ? 'border-brand-red bg-brand-red-light/20' : 'border-brand-border'
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
            className="block text-xs font-mono uppercase tracking-wider text-brand-navy font-semibold mb-2"
          >
            Work Email <span className="text-brand-red">*</span>
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
            className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-white text-brand-navy placeholder-brand-slate/50 transition-colors focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy ${
              errors.workEmail ? 'border-brand-red bg-brand-red-light/20' : 'border-brand-border'
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

      {/* Grid: Organization & Inquiry Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="field-organization"
            className="block text-xs font-mono uppercase tracking-wider text-brand-navy font-semibold mb-2"
          >
            Organization / Institution <span className="text-brand-red">*</span>
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
            className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-white text-brand-navy placeholder-brand-slate/50 transition-colors focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy ${
              errors.organization ? 'border-brand-red bg-brand-red-light/20' : 'border-brand-border'
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
            htmlFor="field-inquiryType"
            className="block text-xs font-mono uppercase tracking-wider text-brand-navy font-semibold mb-2"
          >
            Inquiry Objective <span className="text-brand-red">*</span>
          </label>
          <select
            id="field-inquiryType"
            name="inquiryType"
            required
            value={formData.inquiryType}
            onChange={handleChange}
            aria-invalid={!!errors.inquiryType}
            aria-describedby={errors.inquiryType ? 'error-inquiryType' : undefined}
            className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-white text-brand-navy transition-colors focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy ${
              errors.inquiryType ? 'border-brand-red bg-brand-red-light/20' : 'border-brand-border'
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

      {/* Site Characteristics */}
      <div>
        <label
          htmlFor="field-siteCharacteristics"
          className="block text-xs font-mono uppercase tracking-wider text-brand-navy font-semibold mb-2"
        >
          Site Perimeter Profile (Optional)
        </label>
        <input
          id="field-siteCharacteristics"
          name="siteCharacteristics"
          type="text"
          value={formData.siteCharacteristics || ''}
          onChange={handleChange}
          maxLength={200}
          className="w-full px-3.5 py-2.5 text-sm rounded-sm border border-brand-border bg-white text-brand-navy placeholder-brand-slate/50 transition-colors focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy"
          placeholder="e.g. 5-acre logistics yard, fenced perimeter, existing IP cameras"
        />
        <span className="text-[11px] text-brand-slate mt-1 block">
          Briefly note perimeter distance or lighting constraints if inquiring about pilot deployments.
        </span>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="field-message"
          className="block text-xs font-mono uppercase tracking-wider text-brand-navy font-semibold mb-2"
        >
          Technical Details & Requirements <span className="text-brand-red">*</span>
        </label>
        <textarea
          id="field-message"
          name="message"
          rows={5}
          required
          value={formData.message || ''}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'error-message' : undefined}
          className={`w-full px-3.5 py-2.5 text-sm rounded-sm border bg-white text-brand-navy placeholder-brand-slate/50 transition-colors focus:border-brand-navy focus:outline-none focus:ring-1 focus:ring-brand-navy ${
            errors.message ? 'border-brand-red bg-brand-red-light/20' : 'border-brand-border'
          }`}
          placeholder="Please describe your specific requirements, timeline, and current perimeter monitoring arrangement..."
        />
        {errors.message && (
          <p id="error-message" className="mt-1 text-xs text-brand-red font-medium">
            {errors.message}
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
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
            className="mt-1 h-4 w-4 rounded-sm border-brand-border text-brand-red focus:ring-brand-red"
          />
          <label htmlFor="field-dataConsent" className="text-xs text-brand-slate leading-relaxed">
            I confirm that I am authorized to make this technical inquiry on behalf of my organization and acknowledge that HATAK R™ processes provided contact details strictly to respond to this inquiry under our{' '}
            <a href="/privacy" target="_blank" className="text-brand-navy underline hover:text-brand-red">
              Privacy Policy
            </a>
            . <span className="text-brand-red">*</span>
          </label>
        </div>
        {errors.dataConsent && (
          <p id="error-dataConsent" className="mt-1.5 text-xs text-brand-red font-medium ml-7">
            {errors.dataConsent}
          </p>
        )}
      </div>

      {/* Submit Button & Security Note */}
      <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-brand-border">
        <div className="flex items-center gap-2 text-xs text-brand-slate">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Server-side rate limited • Data encrypted in transit</span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="md"
          isLoading={isSubmitting}
          className="gap-2 shrink-0"
        >
          <Send className="w-4 h-4" />
          Submit Official Inquiry
        </Button>
      </div>
    </form>
  );
};
