import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';

import { UIProvider } from './context';
import { AppRouter } from './router';
import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react';
import { ErrorBoundary } from './components';

const createWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'app');
  document.body.appendChild(wrapper);

  return wrapper;
};

const root = createRoot(createWrapper());

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <UIProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </UIProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
