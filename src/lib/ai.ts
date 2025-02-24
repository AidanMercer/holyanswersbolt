import { genkit } from 'genkit';
import { z } from 'zod';

// Define a schema for structured output
const ChatResponseSchema = z.object({
  response: z.string(),
  tone: z.enum(['friendly', 'scholarly', 'compassionate', 'direct']).optional(),
  references: z.array(z.string()).optional()
});

export async function generateChatResponse(prompt: string, context?: any) {
  try {
    const { output } = await genkit.generate({
      prompt,
      output: { schema: ChatResponseSchema },
      context
    });

    return output;
  } catch (error) {
    console.error('AI Generation Error:', error);
    return null;
  }
}

export async function generateStreamedResponse(prompt: string, context?: any) {
  const { response, stream } = await genkit.generateStream({
    prompt,
    output: { schema: ChatResponseSchema },
    context
  });

  return { 
    completeResponse: await response, 
    stream 
  };
}
