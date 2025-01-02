function getTokenFromCookies(cookieName) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
    return null; // Return null if the token is not found
  }
  
  // Usage
  const token = getTokenFromCookies("token");
  console.log("Token:", token);