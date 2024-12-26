import { TextEncoder, TextDecoder as NodeTextDecoder } from 'node:util';
import '@testing-library/jest-dom';

// Переопределяем глобальный TextDecoder для Jest
global.TextEncoder = TextEncoder;
global.TextDecoder = NodeTextDecoder as typeof global.TextDecoder;

test('dummy test', () => {
  expect(true).toBe(true);
});
