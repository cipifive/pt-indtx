import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
}); 

axiosInstance.interceptors.request.use(
  async (config) => {

    const defaultParam = `url=${encodeURIComponent('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')}`;
   
    if (config?.url?.includes('?')) {
      config.url += `&${defaultParam}`;
    } else {
      config.url += `?${defaultParam}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance