import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('Root element with id "root" not found in index.html');
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
