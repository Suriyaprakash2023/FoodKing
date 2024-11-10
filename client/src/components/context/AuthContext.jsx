import  { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import API_BASE_URL from './data';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(); // Initialize as null
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState('');

  const fetchUser = useCallback(async () => {
    const token = localStorage.getItem('token');
    console.log(token,"token")
    if (token) {
      try {
        const response = await axios.get(`${API_BASE_URL}/user/`, {
          headers: { Authorization: `Token ${token}` },
        });
        setIsAuthenticated(true);
        setUserData(response.data); // Expecting response.data to be a user object
      } catch (err) {
        console.error('Error fetching user:', err);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const login = async (mobile_number, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login/`, {
        mobile_number,
        password,
      });
      if (response.status === 200) {
        const { tokens, user } = response.data;
        localStorage.setItem('token', response.data.tokens);
        localStorage.setItem('userRole', response.data.groups);
        setIsAuthenticated(true);
        setLoading(false);
        setUserData(response.data); // Ensure `user` is a plain object with fields
        setUserRole(response.data.groups);
      }
    } catch (err) {
      console.error('Login failed:', err);
      throw new Error('Authentication failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setUserData(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userData,
        login,
        logout,
        loading,
        userRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
