import axios from 'axios';

const BASE_URL = 'https://api.spaceflightnewsapi.net/v4/';

const headers = {
  Accept: 'application/json',
};

const api = axios.create({
  baseURL: BASE_URL,
  headers,
  responseType: 'json',
  timeout: 6000 * 10,
  timeoutErrorMessage: 'Timeout - Network Error',
});

// Add a request interceptor
api.interceptors.request.use(function (config) {
  console.log!('AXIOS::config.url: ', config);

  return config;
});

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    console.log('response:::: ', response);
    return response;
  },
  function (error) {
    console.log('error:::: ', error);
    return Promise.reject(error);
  },
);

export default api;
