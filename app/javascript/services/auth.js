import { makeRequest } from './helper';

export default {
  login(username, password) {
    return makeRequest('/api/v1/sessions', { method: 'POST', 
      body: JSON.stringify({username, password}) });
  },

  signup(payload) {
    return makeRequest('/api/v1/users', { method: 'POST', body: JSON.stringify({
      firstname: payload.firstname,
      lastname: payload.lastname,
      username: payload.username,
      email: payload.email,
      password: payload.password
    })});
  },
  resetPassword(email) {
    const formData = new FormData();
    formData.append('email', email);
    return fakeApi(email);
  },
};

function fakeApi(email) {
  const msg = 'Please check your email';
  return new Promise(resolve => setTimeout(_ => resolve(msg), 2000));
}
