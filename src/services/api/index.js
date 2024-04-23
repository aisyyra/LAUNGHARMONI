// import { helper } from "../../utils";

class apis {
  // host = () => `${import.meta.env.VITE_API_BASE_URL}/api`;
  host = () => `http://localhost:8000/api`;
  headers = (name, ctx) => ({
    // Authorization: `Bearer xxx`,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    // 'X-Frame-Options': 'SAMEORIGIN',
    'Content-Type': 'application/json',
    // 'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
  });
}

const api = new apis();
export default api;
