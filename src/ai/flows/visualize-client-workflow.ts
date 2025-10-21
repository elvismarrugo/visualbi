'use server';
/**
 * @fileOverview Generates a visual representation of a proposed automated workflow based on a client's description of their current business processes.
 *
 * - visualizeClientWorkflow - A function that takes a description of current business processes and returns a Mermaid.js flowchart string.
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
      "A Mermaid.js flowchart string representing the proposed automated workflow, formatted as just the code without markdown backticks."
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
  input: {schema: VisualizeClientWorkflowInputSchema},
  output: {
    format: 'json',
    schema: VisualizeClientWorkflowOutputSchema
  },
  model: 'googleai/gemini-1.5-flash',
  config: {
    temperature: 0.3,
  },
  prompt: `You are an expert workflow automation consultant. Based on the client's description of their current business processes, generate a Mermaid.js flowchart.

- The diagram must be written entirely in Spanish. All node labels and text must be in Spanish.
- The diagram should visually represent an improved, automated workflow.
- Use simple shapes (rectangles, diamonds for decisions, ovals for start/end).
- Use clear, concise labels for each step.
- IMPORTANT: Do not use parentheses '()' inside node labels. For example, instead of 'Notificar Cliente (Sin Stock)', use 'Notificar Cliente - Sin Stock'.
- The diagram should be easy to understand for someone unfamiliar with the process.
- You must generate ONLY the Mermaid.js flowchart code itself, without any surrounding markdown like \`\`\`mermaid or \`\`\`.

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
    const llmResponse = await diagramPrompt(input);
    
    const output = llmResponse.output;

    if (!output?.workflowDiagram) {
        throw new Error('The AI failed to generate a diagram.');
    }
    
    // The prompt now asks for raw text, but as a fallback, clean it.
    const cleanedMermaid = output.workflowDiagram
      .replace(/```mermaid\n/g, '')
      .replace(/```/g, '')
      .trim();

    return {
      workflowDiagram: cleanedMermaid,
    };
  }
);
