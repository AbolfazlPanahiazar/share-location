if (!process.env.REACT_APP_API_BASE_URL) {
  process.exit(0);
}

export const REACT_APP_API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
