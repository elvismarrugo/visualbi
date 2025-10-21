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
      "A Mermaid.js flowchart string representing the proposed automated workflow."
    ),
});
export type VisualizeClientWorkflowOutput = z.infer<typeof VisualizeClientWorkflowOutputSchema>;

export async function visualizeClientWorkflow(
  input: VisualizeClientWorkflowInput
): Promise<VisualizeClientWorkflowOutput> {
  return visualizeClientWorkflowFlow(input);
}

const diagramPrompt = `You are an expert workflow automation consultant. Based on the client's description of their current business processes, generate a Mermaid.js flowchart.

- The diagram should visually represent an improved, automated workflow.
- Use simple shapes (rectangles, diamonds for decisions, ovals for start/end).
- Use clear, concise labels for each step.
- IMPORTANT: Do not use parentheses '()' inside node labels. For example, instead of 'Notify Customer (Out of Stock)', use 'Notify Customer - Out of Stock'.
- The diagram should be easy to understand for someone unfamiliar with the process.
- The final output must be ONLY the Mermaid.js code block, starting with \`\`\`mermaid and ending with \`\`\`. Do not add any extra text, titles, or explanation before or after the code block.

Client's Current Business Processes:
{{{processDescription}}}`;

const visualizeClientWorkflowFlow = ai.defineFlow(
  {
    name: 'visualizeClientWorkflowFlow',
    inputSchema: VisualizeClientWorkflowInputSchema,
    outputSchema: VisualizeClientWorkflowOutputSchema,
  },
  async input => {
    const llmResponse = await ai.generate({
      prompt: diagramPrompt,
      model: 'googleai/gemini-2.5-flash',
      config: {
        temperature: 0.3,
      }
    });

    const mermaidText = llmResponse.text;
    
    if (!mermaidText) {
        throw new Error('The AI failed to generate a diagram.');
    }

    // Clean up the output to ensure it's just the Mermaid syntax
    const cleanedMermaid = mermaidText.replace(/```mermaid\n/g, '').replace(/```/g, '').trim();

    return {
      workflowDiagram: cleanedMermaid,
    };
  }
);
