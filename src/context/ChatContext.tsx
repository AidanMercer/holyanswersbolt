// In the loadUserSessions method, update the catch block
  catch (error) {
    console.error('Error loading user sessions:', {
      message: error.message,
      code: error.code,
      stack: error.stack
    })

    // Optional: Add more specific error handling
    if (error.code === 'permission-denied') {
      console.warn('Permission denied. Ensure you are authenticated and have the correct Firestore rules.')
      // Optionally, you could trigger a re-authentication or show a user-friendly error
    }
  }
