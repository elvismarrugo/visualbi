'use server';
/**
 * @fileOverview Generates a visual representation of a proposed automated workflow based on a client's description of their current business processes.
 *
 * - visualizeClientWorkflow - A function that takes a description of current business processes and returns a data URI of a proposed automated workflow diagram.
 * - VisualizeClientWorkflowInput - The input type for the visualizeClientWorkflow function.
 * - VisualizeClientWorkflowOutput - The return type for the visualizeClientWorkflow function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VisualizeClientWorkflowInputSchema = z.object({
  processDescription: z
    .string()
    .describe("A detailed description of the client's current business processes."),
});
export type VisualizeClientWorkflowInput = z.infer<typeof VisualizeClientWorkflowInputSchema>;

const VisualizeClientWorkflowOutputSchema = z.object({
  workflowDiagramDataUri: z
    .string()
    .describe(
      'A data URI of the generated workflow diagram in a suitable image format (e.g., PNG, JPEG) with MIME type and Base64 encoding.'
    ),
});
export type VisualizeClientWorkflowOutput = z.infer<typeof VisualizeClientWorkflowOutputSchema>;

export async function visualizeClientWorkflow(
  input: VisualizeClientWorkflowInput
): Promise<VisualizeClientWorkflowOutput> {
  return visualizeClientWorkflowFlow(input);
}

const prompt = ai.definePrompt({
  name: 'visualizeClientWorkflowPrompt',
  input: {schema: VisualizeClientWorkflowInputSchema},
  output: {schema: VisualizeClientWorkflowOutputSchema},
  prompt: `You are an expert workflow automation consultant. Based on the client's description of their current business processes, generate a visual representation of a proposed automated workflow diagram.

  The diagram should highlight areas where automation can improve efficiency. Ensure the diagram is clear and easy to understand for someone unfamiliar with the processes.
  Return the workflow diagram as a data URI, ensuring it is a valid image format (e.g., PNG) and properly Base64 encoded.

Client's Current Business Processes:
{{{processDescription}}}

Example Output:
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w+cAAQK0A0cOBQMVAAAAAElFTkSuQmCC`,
});

const visualizeClientWorkflowFlow = ai.defineFlow(
  {
    name: 'visualizeClientWorkflowFlow',
    inputSchema: VisualizeClientWorkflowInputSchema,
    outputSchema: VisualizeClientWorkflowOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `Generate a visual representation of a proposed automated workflow diagram based on the following business process description: ${input.processDescription}. Highlight areas where automation can improve efficiency.`,
    });

    return {
      workflowDiagramDataUri: media?.url ?? 'data:image/png;base64,',
    };
  }
);
