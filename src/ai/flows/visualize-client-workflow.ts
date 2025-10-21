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

const diagramPrompt = ai.definePrompt({
  name: 'diagramPrompt',
  input: {
    schema: VisualizeClientWorkflowInputSchema,
  },
  prompt: `You are an expert workflow automation consultant. Based on the client's description of their current business processes, generate a visual representation of a proposed automated workflow diagram.
The diagram should be a clear, professional-looking flowchart. Use standard flowchart symbols.
The diagram should highlight areas where automation can improve efficiency. Ensure the diagram is clear and easy to understand for someone unfamiliar with the processes.

Client's Current Business Processes:
{{{processDescription}}}`,
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
      prompt: await diagramPrompt.render({input}),
    });

    if (!media?.url) {
      console.error('Image generation failed, no media URL returned.');
      // Return a structured error or a default state
      return {
        workflowDiagramDataUri: '', // Indicate failure
      };
    }

    return {
      workflowDiagramDataUri: media.url,
    };
  }
);
