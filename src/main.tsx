import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import i18n from './app/i18n.ts';
import { I18nextProvider } from 'react-i18next';
import './app/index.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>,
);
