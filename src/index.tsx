import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';

import { UIProvider } from './context';
import { AppRouter } from './router';

const createWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'app');
  document.body.appendChild(wrapper);

  return wrapper;
};

const root = createRoot(createWrapper());

root.render(
  <UIProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </UIProvider>,
);
