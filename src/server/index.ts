import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { genkit } from '@genkit-ai/core'
import { googleAI } from '@genkit-ai/googleai'
import { FirebaseSessionStore } from './firebaseSessionStore'
import { bibleAdvisorAgent } from './bibleAdvisorAgent'

// Initialize Firebase Admin
const firebaseAdminApp = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  })
})

const firestore = getFirestore(firebaseAdminApp)

// Configure Genkit
genkit.configure({
  plugins: [googleAI()],
  agents: [bibleAdvisorAgent],
  sessionStore: new FirebaseSessionStore(firestore)
})

// Example chat handler
async function handleChatRequest(userId: string, message: string) {
  // Create or load session for the user
  const session = await genkit.loadSession(userId, {
    initialState: {
      userId,
      lastInteraction: Date.now()
    }
  })

  // Start a chat in the session
  const chat = session.chat({
    tools: [
      bibleAdvisorAgent.searchBiblePassage, 
      bibleAdvisorAgent.interpretBiblePassage
    ]
  })

  // Send message and get response
  const response = await chat.send(message)

  return response
}

export { handleChatRequest }
