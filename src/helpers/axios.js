import axios from "axios";
import { api } from "../urlConfigs";

const axiosInstance = axios.create({
  baseURL: api,
});

export default axiosInstance;
