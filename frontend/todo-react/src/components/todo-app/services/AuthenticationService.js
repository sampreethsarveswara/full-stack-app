class AuthenticationService {
  registerLoginDetails(username, password) {
    console.log('Storing user');
    sessionStorage.setItem('username', username);
  }

  removeLoginDetails() {
    sessionStorage.removeItem('username');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    if(user==null) return false;
    return true;
  }

  getLoggedInUserName() {
    return sessionStorage.getItem('username');
  }

}

export default new AuthenticationService();