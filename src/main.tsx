import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  // eslint-disable-line @typescript-eslint/no-non-null-assertion
  <App />,
);
