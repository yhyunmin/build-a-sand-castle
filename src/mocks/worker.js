import { setupWorker } from 'msw/browser';
import { handlers } from './handler.ts';

const worker = setupWorker(...handlers);

export default worker;
