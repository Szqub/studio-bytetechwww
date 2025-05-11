
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki."),
  email: z.string().email("Nieprawidłowy adres email."),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków."),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState, // Keep prevState for consistency with useFormState, though not heavily used here
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Formularz zawiera błędy. Sprawdź pola i spróbuj ponownie.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // In a real app, you would send an email here.
  // For example, using a service like Resend, SendGrid, or Nodemailer with API keys.
  // Make sure to handle potential errors during email sending.
  console.log("Form data submitted successfully (simulated email sending):", parsed.data);
  
  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Example:
  // try {
  //   const emailSent = await sendEmailFunction(parsed.data.name, parsed.data.email, parsed.data.message);
  //   if (!emailSent) {
  //     return { message: "Wystąpił problem podczas wysyłania wiadomości. Spróbuj ponownie później.", success: false };
  //   }
  // } catch (error) {
  //   console.error("Email sending error:", error);
  //   return { message: "Nieoczekiwany błąd serwera. Spróbuj ponownie później.", success: false };
  // }

  return { 
    message: "Wiadomość wysłana pomyślnie! Dziękujemy za kontakt, odpowiemy najszybciej jak to możliwe.", 
    success: true 
  };
}
