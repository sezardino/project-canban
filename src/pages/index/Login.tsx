import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigator = useNavigate();

  useEffect(() => {
    navigator('/soon');
  }, []);

  return <h1>login page</h1>;
};

export default Login;
