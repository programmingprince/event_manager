import store from '../store/configureStore';
import { refreshToken } from '../actions';
export const BASE_URL = 'http://localhost:3000'; // or url for staging
const makeFetchRequest = (path, options) => {
  if (!options) {
    options = {};
  }

  options.accept = 'application/json';

  const { token } = store.getState().userState;
  // if (token) {
    if (!options.headers) {
      options.headers = {'Content-Type':'application/json'};
    }
    // options.headers['Authorization'] = `Bearer ${token}`;
  // }
  console.log("making request for signup, options")
  console.log(options)
  console.log(BASE_URL + path)
  return fetch(BASE_URL + path, options).then(async response => {
    console.log("got respone: ")
    console.log(response)
    return {
      body: response.json(),
      status: response.status,
    };
  });
};

export const makeRequest = async (path, options) => {
  const response = await makeFetchRequest(path, options);
  if (response.status && response.status === 401) {
    return await {success: false, message: 'Unable to process request.'}
  } else {
    return await response.body;
  }
};
