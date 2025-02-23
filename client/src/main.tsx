import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './App.tsx';
import { Toaster } from './components/ui/toaster.tsx';
import { BrowserRouter } from "react-router-dom";
import { store } from './store/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
      <BrowserRouter >
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
