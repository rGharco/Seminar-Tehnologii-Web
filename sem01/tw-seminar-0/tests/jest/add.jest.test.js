import { describe, it, expect } from '@jest/globals';
import { add } from '../../src/add.js';

describe('add function (Jest)', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
});
