import { useNavigate } from 'react-router-dom';
import HeaderView from './view/HeaderView';

export default function Header() {
  const navigate = useNavigate();
  const hasToken = !!localStorage.getItem('token');

  const HeaderProps = {
    onGoMain: () => navigate('/'),
    onGoTodos: () => navigate('/todos'),
    onGoLogin: () => navigate('/auth/login'),
    onGoSignUp: () => navigate('/auth/signup'),
    onLogout: () => {
      localStorage.removeItem('token');
      navigate('/');
    },
    hasToken,
  };

  return <HeaderView {...HeaderProps} />;
}
