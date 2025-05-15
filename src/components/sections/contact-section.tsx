
"use client";

import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useActionState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { submitContactForm, type ContactFormState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, MailCheck } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Imię musi mieć co najmniej 2 znaki." }),
  email: z.string().email({ message: "Nieprawidłowy adres email." }),
  message: z.string().min(10, { message: "Wiadomość musi mieć co najmniej 10 znaków." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <MailCheck className="mr-2 h-4 w-4" />}
      {pending ? 'Wysyłanie...' : 'Wyślij wiadomość'}
    </Button>
  );
}

export function ContactSection() {
  const { toast } = useToast();
  
  const initialState: ContactFormState = { message: '', success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Sukces!' : 'Błąd formularza',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        form.reset();
      }
      if (!state.success && state.issues) {
         // Set errors on fields, for example:
         // state.issues.forEach(issue => form.setError('root', { message: issue }));
         // For simplicity, just showing via toast.
      }
    }
  }, [state, toast, form]);


  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto">
        <AnimatedSection animationType="fadeInUp" className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Masz pytanie? <span className="gradient-text from-primary to-secondary bg-gradient-to-r">Potrzebujesz wyceny?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wypełnij formularz lub napisz bezpośrednio na <a href="mailto:biuro@bytetech.com.pl" className="text-primary hover:underline">biuro@bytetech.com.pl</a>. Odpowiemy najszybciej jak to możliwe.
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <AnimatedSection animationType="fadeInUp" delay={200}>
            <Card className="shadow-2xl border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Formularz kontaktowy</CardTitle>
                <CardDescription>Chętnie odpowiemy na wszystkie Twoje pytania.</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={formAction} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Imię</Label>
                    <Input 
                      id="name" 
                      name="name"
                      {...form.register('name')} 
                      placeholder="Twoje imię" 
                      className="mt-1 bg-card focus:border-primary"
                    />
                    {form.formState.errors.name && <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      {...form.register('email')} 
                      placeholder="Twój adres email" 
                      className="mt-1 bg-card focus:border-primary"
                    />
                    {form.formState.errors.email && <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message">Treść wiadomości</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      {...form.register('message')} 
                      placeholder="Twoja wiadomość..." 
                      rows={5} 
                      className="mt-1 bg-card focus:border-primary"
                    />
                    {form.formState.errors.message && <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>}
                  </div>
                  <SubmitButton />
                  {state.issues && !state.success && (
                    <div className="mt-2 text-sm text-destructive">
                      {state.issues.map((issue, index) => <p key={index}>{issue}</p>)}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
