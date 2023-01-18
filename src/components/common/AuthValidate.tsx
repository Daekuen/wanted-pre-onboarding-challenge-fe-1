import React, { useEffect } from 'react';
import { ChildrenProps } from '../../types/children';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AuthValidate({ children }: ChildrenProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuthPage = pathname === '/auth/login' || pathname === '/auth/signUp';

  useEffect(() => {
    const hasToken = !!localStorage.getItem('token');
    if (hasToken && isAuthPage) {
      navigate('/todos', { replace: true });
    }
  }, [navigate, isAuthPage]);

  return <>{children}</>;
}
