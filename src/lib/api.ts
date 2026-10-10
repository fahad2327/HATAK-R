import { ContactFormData } from './validation';

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

export async function submitEnquiry(payload: ContactFormData): Promise<ApiResponse> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      if (response.status === 429) {
        return {
          success: false,
          message: 'Too many requests. Please wait a few moments before trying again.',
        };
      }

      if (data && data.errors) {
        return {
          success: false,
          message: data.message || 'Please review the highlighted form errors.',
          errors: data.errors,
        };
      }

      return {
        success: false,
        message: data?.message || `Server communication failure (Status ${response.status}). Please try again later.`,
      };
    }

    return {
      success: true,
      message: data?.message || 'Your inquiry has been successfully received by our engineering team.',
      data: data?.data,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Network connection failure. Please verify your connection or contact engineering directly via email.',
    };
  }
}
