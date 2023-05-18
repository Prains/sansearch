class Token {
  setAccessToken(token) {
    localStorage.setItem("access", token);
  }
  getAccesToken() {
    return localStorage.getItem("access");
  }
  logOut() {
    localStorage.clear();
  }
}

const token = new Token();

export default token;
