import { generate, defineFlow } from 'genkit';
import { z } from 'zod';

// Define a schema for structured output
const ChatResponseSchema = z.object({
  response: z.string(),
  tone: z.enum(['friendly', 'scholarly', 'compassionate', 'direct']).optional(),
  references: z.array(z.string()).optional()
});

export const chatFlow = defineFlow(
  {
    name: 'chatFlow',
    inputSchema: z.object({
      prompt: z.string(),
      context: z.any().optional()
    }),
    outputSchema: ChatResponseSchema
  },
  async ({ prompt, context }) => {
    try {
      const { output } = await generate({
        prompt,
        output: { schema: ChatResponseSchema },
        context
      });

      return output;
    } catch (error) {
      console.error('AI Generation Error:', error);
      return { response: 'Sorry, I could not generate a response.' };
    }
  }
);

export async function generateChatResponse(prompt: string, context?: any) {
  return await chatFlow({ prompt, context });
}

export async function generateStreamedResponse(prompt: string, context?: any) {
  const { response, stream } = await generate({
    prompt,
    output: { schema: ChatResponseSchema },
    context
  });

  return { 
    completeResponse: await response, 
    stream 
  };
}
