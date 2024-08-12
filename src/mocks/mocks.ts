import { setupWorker } from 'msw/browser';

import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

worker.start();

fetch('/plants').then((res) => console.log(res.json()));
