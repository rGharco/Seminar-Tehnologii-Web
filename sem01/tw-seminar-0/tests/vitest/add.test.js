import { describe, it, expect } from 'vitest';
import { add } from '../../src/add.js';

describe('add function', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
  
  it('should handle string numbers', () => {
    expect(add('2', '3')).toBe(5);
  });
  
  it('should handle negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });
});
