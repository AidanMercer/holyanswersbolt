// Update the loadUserSessions method
const loadUserSessions = useCallback(async () => {
  if (!currentUser) return

  try {
    // Fetch user's chat sessions
    const sessionsQuery = query(
      collection(firestore, 'chatSessions'), 
      where('userId', '==', currentUser.uid),
      orderBy('createdAt', 'desc')
    )
    const sessionSnapshot = await getDocs(sessionsQuery)
    
    const userSessions: ChatSession[] = await Promise.all(
      sessionSnapshot.docs.map(async (sessionDoc) => {
        const sessionData = { 
          id: sessionDoc.id, 
          ...sessionDoc.data() 
        } as ChatSession

        // Fetch messages for this session
        const messagesQuery = query(
          collection(firestore, 'messages'), 
          where('sessionId', '==', sessionDoc.id),
          orderBy('timestamp', 'asc')
        )
        const messagesSnapshot = await getDocs(messagesQuery)
        
        sessionData.messages = messagesSnapshot.docs.map(messageDoc => ({
          id: messageDoc.id,
          ...messageDoc.data()
        } as ChatMessage))

        return sessionData
      })
    )

    setSessions(userSessions)
    
    // Set the first session as current if exists
    if (userSessions.length > 0) {
      setCurrentSession(userSessions[0])
    } else {
      createNewSession()
    }
  } catch (error) {
    console.error('Detailed Error loading user sessions:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    })

    // Optionally, show a user-friendly error notification
    if (error.code === 'permission-denied') {
      // You might want to add a toast or alert system here
      console.warn('You do not have permission to access chat sessions. Please check your authentication.')
    }
  }
}, [currentUser, createNewSession])
