import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken, callback) {
    localStorage.setItem('id_token', idToken);
    callback(); 
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.href = '/';
    // window.location.reload();
  }
}

const auth = new AuthService();
export default auth;

