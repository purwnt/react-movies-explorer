import { API_URL, MOVIE_API_ACCESS_TOKEN } from '@/config';
import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${MOVIE_API_ACCESS_TOKEN}`,
  },
});
