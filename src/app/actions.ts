
"use server";

import { z } from "zod";
import { Resend } from 'resend';
import ContactFormEmail from "@/components/emails/contact-form-email";
import { visualizeClientWorkflow } from "@/ai/flows/visualize-client-workflow";


// Schema para el visualizador
const workflowSchema = z.object({
  processDescription: z.string().min(20, { message: "Por favor, proporcione una descripción más detallada (al menos 20 caracteres)." }),
});

type WorkflowState = {
  message: string;
  data: { workflowDiagram: string } | null;
  errors: { processDescription?: string[] } | null;
};

// Schema para el formulario de contacto
const contactSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    email: z.string().email({ message: "Por favor, ingrese un correo electrónico válido." }),
    details: z.string().min(10, { message: "Los detalles deben tener al menos 10 caracteres." }),
});

type ContactState = {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        details?: string[];
    } | null;
    success: boolean;
};

// Helper para esperar un tiempo determinado
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function handleVisualizeWorkflow(prevState: WorkflowState, formData: FormData): Promise<WorkflowState> {
  const validatedFields = workflowSchema.safeParse({
    processDescription: formData.get("processDescription"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validación fallida.",
      data: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const maxRetries = 3;
  let lastError: any = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await visualizeClientWorkflow({
        processDescription: validatedFields.data.processDescription,
      });
      
      if (!result.workflowDiagram) {
          throw new Error("La IA no pudo generar un diagrama para esta descripción.");
      }
  
      return {
        message: "Success",
        data: result,
        errors: null,
      };
    } catch (error: any) {
      lastError = error;
      console.error(`Intento ${attempt} fallido:`, error.message);

      if ((error.message.includes('503') || error.message.includes('429') || error.message.includes('overloaded')) && attempt < maxRetries) {
        const delay = Math.pow(2, attempt - 1) * 1000;
        console.log(`Reintentando en ${delay}ms...`);
        await sleep(delay);
      } else {
        break;
      }
    }
  }

  console.error("Error definitivo en la visualización del flujo de trabajo:", lastError);
  return {
    message: `Ocurrió un error al procesar la solicitud. Por favor, inténtelo de nuevo más tarde.`,
    data: null,
    errors: null,
  };
}


export async function handleContactForm(prevState: ContactState, formData: FormData): Promise<ContactState> {
    const validatedFields = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        details: formData.get("details"),
    });

    if (!validatedFields.success) {
        return {
            message: "Validación fallida.",
            errors: validatedFields.error.flatten().fieldErrors,
            success: false,
        };
    }

    const { name, email, details } = validatedFields.data;
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const { data, error } = await resend.emails.send({
            from: 'Visual BI Contact <onboarding@resend.dev>', // Debe ser un dominio verificado en Resend
            to: ['elvix@somosvisualbi.com'], // Tu correo
            subject: `Nueva consulta de ${name} desde tu web`,
            react: ContactFormEmail({ name, email, details }),
        });

        if (error) {
            console.error("Resend error:", error);
            return {
                message: `Error al enviar el correo: ${error.message}`,
                errors: null,
                success: false,
            };
        }

        return {
            message: "¡Consulta enviada con éxito!",
            errors: null,
            success: true,
        };

    } catch (e: any) {
        console.error("Server action error:", e);
        return {
            message: "Ocurrió un error inesperado en el servidor. Por favor, inténtelo de nuevo.",
            errors: null,
            success: false,
        };
    }
}
