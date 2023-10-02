// httpClient.ts
import axios, { AxiosInstance } from 'axios';

// Define una interfaz para describir la estructura de tu objeto Axios
interface MyAxiosInstance extends AxiosInstance {}

// Crea una instancia Axios tipada
const httpClient: MyAxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/job-match',
});

export default httpClient;
