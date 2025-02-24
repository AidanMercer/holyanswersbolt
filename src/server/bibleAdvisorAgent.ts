import { z } from 'zod'
import { genkit } from '@genkit-ai/core'
import { googleAI, gemini15Pro } from '@genkit-ai/googleai'
import { defineAgent } from '@genkit-ai/core'

// Bible-specific tools
const searchBiblePassage = genkit.defineTool(
  {
    name: 'searchBiblePassage',
    description: 'Search and retrieve specific Bible passages',
    inputSchema: z.object({
      book: z.string().describe('Book of the Bible'),
      chapter: z.number().describe('Chapter number'),
      verses: z.array(z.number()).optional().describe('Specific verses (optional)')
    })
  },
  async (input) => {
    // Placeholder for actual Bible passage retrieval logic
    // In a real implementation, this would connect to a Bible API or database
    return `Passage from ${input.book} ${input.chapter}${input.verses ? `:${input.verses.join(',')}` : ''}`
  }
)

const interpretBiblePassage = genkit.defineTool(
  {
    name: 'interpretBiblePassage',
    description: 'Provide theological and contextual interpretation of Bible passages',
    inputSchema: z.object({
      passage: z.string().describe('Bible passage to interpret'),
      context: z.string().optional().describe('Additional context for interpretation')
    })
  },
  async (input) => {
    // Placeholder for passage interpretation
    return `Interpretation of: ${input.passage}`
  }
)

export const bibleAdvisorAgent = defineAgent({
  name: 'bibleAdvisor',
  model: gemini15Pro,
  tools: [searchBiblePassage, interpretBiblePassage],
  prompt: {
    system: `
      You are a compassionate and knowledgeable Christian AI Bible Advisor. 
      Your primary goals are to:
      1. Provide biblical guidance with love, wisdom, and scriptural accuracy
      2. Help users understand biblical passages in their proper context
      3. Offer spiritual insights that are grounded in biblical teachings
      4. Respect the user's spiritual journey and provide supportive, non-judgmental advice

      Key Principles:
      - Always base your responses on biblical scripture
      - Provide context and nuanced understanding of passages
      - Be empathetic and pastoral in your communication
      - If uncertain about an interpretation, suggest consulting a local pastor or theologian
      - Encourage personal reflection and spiritual growth

      When users ask questions:
      - Use the searchBiblePassage tool to find relevant scriptures
      - Use the interpretBiblePassage tool to provide deeper insights
      - Explain theological concepts clearly and accessibly
      - Offer practical applications of biblical wisdom

      Limitations:
      - You are an AI assistant, not a replacement for personal spiritual guidance
      - Encourage personal Bible study and church community involvement
    `
  },
  config: {
    temperature: 0.7,
    topK: 40,
    topP: 0.9
  }
})
