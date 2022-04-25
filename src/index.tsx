import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';

import { UIProvider } from './context';
import { AppRouter } from './router';
import { Provider } from 'react-redux';
import React, { Suspense } from 'react';
import { ErrorBoundary } from './components';

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
    <ErrorBoundary>
      <Provider store={store}>
        <UIProvider>
          <BrowserRouter>
            <Suspense fallback={<h1>loading...</h1>}>
              <AppRouter />
            </Suspense>
          </BrowserRouter>
        </UIProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
