"use client";

import { useFormStatus } from "react-dom";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function SubmitButton() {
    const { pending } = useFormStatus();
  
    return (
      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Sending..." : "Send Inquiry"}
        <Send className="ml-2 h-4 w-4" />
      </Button>
    );
}

export default function ContactSection() {
    const handleSubmit = async (formData: FormData) => {
        // Placeholder for form submission logic
        console.log("Form submitted!");
        console.log({
            name: formData.get("name"),
            email: formData.get("email"),
            details: formData.get("details"),
        });
        // Here you would typically call a server action or API endpoint
        // For now, we just log to the console.
        alert("Thank you for your inquiry! We will get back to you shortly.");
    };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="space-y-4">
                <div className="inline-block rounded-full bg-primary/10 p-3">
                    <Mail className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Let's Build Together
                </h2>
                <p className="text-lg text-muted-foreground">
                    Have a project in mind? We'd love to hear about it. Fill out the form, and a member of our team will get back to you shortly to discuss how we can help you achieve your goals.
                </p>
                <div className="text-sm text-muted-foreground">
                    <p>Or email us directly at: <a href="mailto:contact@automatech.com" className="text-primary font-semibold hover:underline">contact@automatech.com</a></p>
                </div>
            </div>
            <Card>
            <form action={handleSubmit}>
              <CardHeader>
                <CardTitle>Client Inquiry</CardTitle>
                <CardDescription>Tell us about your project.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="details">Project Details</Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Describe your project, goals, and any current challenges."
                    required
                    rows={5}
                  />
                </div>
              </CardContent>
              <CardContent>
                <SubmitButton />
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
