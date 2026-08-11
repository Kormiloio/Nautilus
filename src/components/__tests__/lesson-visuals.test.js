import { describe, expect, it } from 'vitest';
import { getColorSpec, getItemColorSpec } from '../lesson-visuals.js';

describe('color lesson visuals', () => {
  it('recognizes Montenegrin and support-language color terms', () => {
    expect(getColorSpec('crvena')?.hex).toBe('#e53935');
    expect(getColorSpec('blue')?.id).toBe('blue');
    expect(getColorSpec('bijela')?.id).toBe('white');
  });

  it('does not apply color visuals outside the Colors topic', () => {
    const item = { targetText: 'crvena', supportText: 'red' };
    expect(getItemColorSpec('colors', item)?.id).toBe('red');
    expect(getItemColorSpec('family', item)).toBeNull();
  });
});
