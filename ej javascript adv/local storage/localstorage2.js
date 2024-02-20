function getUserFromLocalStorage() {
    try {
    
      const userJSON = localStorage.getItem('user');
  
     
      const userObject = JSON.parse(userJSON);
  
      
      console.log('User retrieved from localStorage:', userObject);
  
      return userObject;
    } catch (error) {
      console.error('Error retrieving user from localStorage:', error);
      return null;
    }
  }
  
  
  const retrievedUser = getUserFromLocalStorage();