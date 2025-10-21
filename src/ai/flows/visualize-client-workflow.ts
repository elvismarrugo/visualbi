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
      'A Mermaid.js graph definition representing the proposed automated workflow.'
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
  output: {
    schema: VisualizeClientWorkflowOutputSchema,
  },
  prompt: `You are an expert workflow automation consultant. Based on the client's description of their current business processes, generate a proposed automated workflow diagram.

The diagram should be a clear, professional-looking flowchart using Mermaid.js syntax. Use a 'graph TD' (Top-Down) layout.
The diagram should highlight areas where automation can improve efficiency. Ensure the diagram is clear and easy to understand for someone unfamiliar with the processes.

Generate only the Mermaid.js code block for the diagram, starting with 'graph TD' and ending before any explanations.

Client's Current Business Processes:
{{{processDescription}}}`,
});

const visualizeClientWorkflowFlow = ai.defineFlow(
  {
    name: 'visualizeClientWorkflowFlow',
    inputSchema: VisualizeClientWorkflowInputSchema,
    outputSchema: z.object({workflowDiagram: z.string()}),
  },
  async input => {
    const {output} = await diagramPrompt(input);
    if (!output) {
      throw new Error('Failed to generate workflow diagram');
    }
    return {
      workflowDiagram: output.workflowDiagram.replace(/```mermaid\n|```/g, '').trim(),
    };
  }
);
