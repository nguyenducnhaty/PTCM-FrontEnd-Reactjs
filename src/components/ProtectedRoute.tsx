import Layout from '@/layouts/MainLayout';

import { Navigate } from 'react-router-dom';

const ProtectedRoutes = () => {
  const localStorageToken = JSON.parse(localStorage.getItem('token') || 'null');

  return localStorageToken ? <Layout /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoutes;
