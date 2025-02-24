import { 
  Firestore, 
  DocumentReference, 
  DocumentSnapshot 
} from '@google-cloud/firestore'
import { SessionStore, SessionData } from '@genkit-ai/core'

export class FirebaseSessionStore<S = any> implements SessionStore<S> {
  private firestore: Firestore
  private collectionName: string

  constructor(firestore: Firestore, collectionName = 'chat_sessions') {
    this.firestore = firestore
    this.collectionName = collectionName
  }

  private getDocRef(sessionId: string): DocumentReference {
    return this.firestore.collection(this.collectionName).doc(sessionId)
  }

  async get(sessionId: string): Promise<SessionData<S> | undefined> {
    try {
      const docRef = this.getDocRef(sessionId)
      const snapshot: DocumentSnapshot = await docRef.get()
      
      if (!snapshot.exists) {
        return undefined
      }

      return snapshot.data() as SessionData<S>
    } catch (error) {
      console.error('Error retrieving session:', error)
      return undefined
    }
  }

  async save(sessionId: string, sessionData: SessionData<S>): Promise<void> {
    try {
      const docRef = this.getDocRef(sessionId)
      await docRef.set(sessionData, { merge: true })
    } catch (error) {
      console.error('Error saving session:', error)
    }
  }
}
