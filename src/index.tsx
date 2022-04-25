import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';

import { UIProvider } from './context';
import { AppRouter } from './router';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import React from 'react';

const createWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'app');
  document.body.appendChild(wrapper);

  return wrapper;
};

const root = createRoot(createWrapper());
const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UIProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </UIProvider>
    </Provider>
  </React.StrictMode>,
);
