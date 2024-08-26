import './main.scss';

import { createRoot } from 'react-dom/client';

import { MyApp } from './components/app';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks');

  return worker.start({ onUnhandledRequest: 'bypass' });
}

enableMocking().then(() =>
  createRoot(document.getElementById('root')).render(<MyApp />),
);
