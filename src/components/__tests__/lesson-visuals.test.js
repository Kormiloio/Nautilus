import { describe, expect, it } from 'vitest';
import { getColorSpec, getImmersiveLessonScene, getItemColorSpec, renderColorsIntro } from '../lesson-visuals.js';

describe('color lesson visuals', () => {
  it('recognizes Montenegrin and support-language color terms', () => {
    expect(getColorSpec('crvena')?.hex).toBe('#e53935');
    expect(getColorSpec('blue')?.id).toBe('blue');
    expect(getColorSpec('bijela')?.id).toBe('white');
    expect(getColorSpec('narandžasta')?.id).toBe('orange');
    expect(getColorSpec('ljubičasta')?.id).toBe('purple');
    expect(getColorSpec('roze')?.id).toBe('pink');
    expect(getColorSpec('smeđa')?.id).toBe('brown');
    expect(getColorSpec('siva')?.id).toBe('gray');
  });

  it('does not apply color visuals outside the Colors topic', () => {
    const item = { targetText: 'crvena', supportText: 'red' };
    expect(getItemColorSpec('colors', item)?.id).toBe('red');
    expect(getItemColorSpec('family', item)).toBeNull();
  });

  it('renders the Colors scene beneath the configured application base URL', () => {
    expect(renderColorsIntro('colors')).toContain(`${import.meta.env.BASE_URL}assets/illustrations/colors-harbor.jpg`);
  });

  it('provides a coordinated poster environment for six destination lessons', () => {
    const topics = ['family', 'greetings', 'colors', 'food', 'cafe', 'directions'];
    topics.forEach(topic => {
      const scene = getImmersiveLessonScene(topic);
      expect(scene.src).toContain(`${import.meta.env.BASE_URL}assets/illustrations/poster-${topic}-v1.jpg`);
      expect(scene.place).toBeTruthy();
    });
    expect(getImmersiveLessonScene('numbers')).toBeNull();
  });
});
