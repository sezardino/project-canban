import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigator = useNavigate();

  navigator('/soon');

  return <h1>login page</h1>;
};

export default Login;
