import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const getUserIdFromToken = (token) => {
  if (!token) return null;
  const decoded = jwtDecode(token);
  return decoded.user_id;
}


const getUserTypeFromToken = (token) => {
  if (!token) return null;
  const decoded = jwtDecode(token);
  return decoded.user_type;
}

export { getUserIdFromToken, getUserTypeFromToken };

