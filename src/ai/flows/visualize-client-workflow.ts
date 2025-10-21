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
  workflowDiagram: z
    .string()
    .describe(
      "A data URI of a flowchart image representing the proposed automated workflow. Expected format: 'data:image/...;base64,...'"
    ),
});
export type VisualizeClientWorkflowOutput = z.infer<typeof VisualizeClientWorkflowOutputSchema>;

export async function visualizeClientWorkflow(
  input: VisualizeClientWorkflowInput
): Promise<VisualizeClientWorkflowOutput> {
  return visualizeClientWorkflowFlow(input);
}

const diagramPrompt = `You are an expert workflow automation consultant. Based on the client's description of their current business processes, generate a professional-looking and clear flowchart diagram.

- The diagram should visually represent an improved, automated workflow.
- Use simple shapes (rectangles, diamonds for decisions, ovals for start/end).
- Use clear, concise labels for each step.
- The diagram should be easy to understand for someone unfamiliar with the process.
- The final output must be ONLY the image. Do not add any extra text or explanation.

Client's Current Business Processes:
${'{{processDescription}}'}`;

const visualizeClientWorkflowFlow = ai.defineFlow(
  {
    name: 'visualizeClientWorkflowFlow',
    inputSchema: VisualizeClientWorkflowInputSchema,
    outputSchema: VisualizeClientWorkflowOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image-preview',
      prompt: [
        {text: diagramPrompt.replace('{{processDescription}}', input.processDescription)},
      ],
      config: {
        responseModalities: ['IMAGE'],
      },
    });

    const imageUrl = media?.url;

    if (!imageUrl) {
      throw new Error('The AI failed to generate an image for the workflow.');
    }

    return {
      workflowDiagram: imageUrl,
    };
  }
);
