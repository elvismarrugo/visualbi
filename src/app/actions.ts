
"use server";

import { visualizeClientWorkflow } from "@/ai/flows/visualize-client-workflow";
import { z } from "zod";

const schema = z.object({
  processDescription: z.string().min(20, { message: "Por favor, proporcione una descripción más detallada (al menos 20 caracteres)." }),
});

type State = {
  message: string;
  data: { workflowDiagram: string } | null;
  errors: { processDescription?: string[] } | null;
};

// Helper para esperar un tiempo determinado
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function handleVisualizeWorkflow(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = schema.safeParse({
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

      // Si el error es por sobrecarga/cuota y no es el último intento, esperamos y reintentamos.
      if ((error.message.includes('503') || error.message.includes('429') || error.message.includes('overloaded')) && attempt < maxRetries) {
        // Espera exponencial (1s, 2s, 4s)
        const delay = Math.pow(2, attempt - 1) * 1000;
        console.log(`Reintentando en ${delay}ms...`);
        await sleep(delay);
      } else {
        // Si no es un error de sobrecarga o es el último intento, fallamos.
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
