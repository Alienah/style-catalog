import { setupWorker } from 'msw';
import { productsHandler } from './mock-server';
export const server = setupWorker(...productsHandler)