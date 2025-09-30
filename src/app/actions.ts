
"use server";

import { visualizeClientWorkflow } from "@/ai/flows/visualize-client-workflow";
import { z } from "zod";

const schema = z.object({
  processDescription: z.string().min(20, { message: "Please provide a more detailed description (at least 20 characters)." }),
});

type State = {
  message: string;
  data: { workflowDiagramDataUri: string } | null;
  errors: { processDescription?: string[] } | null;
};

export async function handleVisualizeWorkflow(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = schema.safeParse({
    processDescription: formData.get("processDescription"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed.",
      data: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await visualizeClientWorkflow({
      processDescription: validatedFields.data.processDescription,
    });
    
    if (!result.workflowDiagramDataUri || result.workflowDiagramDataUri.split(',')[1] === '') {
        return {
            message: "The AI could not generate a diagram for this description. Please try a different or more detailed process.",
            data: null,
            errors: null,
        }
    }

    return {
      message: "Success",
      data: result,
      errors: null,
    };
  } catch (error) {
    console.error("Workflow visualization error:", error);
    return {
      message: "An unexpected error occurred while generating the workflow. Please try again later.",
      data: null,
      errors: null,
    };
  }
}
