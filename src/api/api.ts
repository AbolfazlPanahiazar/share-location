import axios from "axios";

import { REACT_APP_API_BASE_URL } from "constants/env";

export const axiosClient = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
  timeout: 10000
});
