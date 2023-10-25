import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuth, redirectPath, children }) => {
  const navigate = useNavigate();

  if (!isAuth) {
    navigate(redirectPath);
    return null;
  }

  return children;
};

export default ProtectedRoute;
