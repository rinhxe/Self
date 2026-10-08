import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ScrollReveal from './ScrollReveal';

class MockIntersectionObserver implements IntersectionObserver {
  static instances: MockIntersectionObserver[] = [];

  readonly root = null;
  readonly rootMargin = '0px';
  readonly scrollMargin = '0px';
  readonly thresholds = [0];
  private target: Element | null = null;

  constructor(private readonly callback: IntersectionObserverCallback) {
    MockIntersectionObserver.instances.push(this);
  }

  observe = (target: Element) => {
    this.target = target;
  };

  disconnect = () => {};
  unobserve = () => {};
  takeRecords = () => [];

  trigger(isIntersecting: boolean) {
    if (!this.target) throw new Error('No target is being observed');

    const entry = {
      boundingClientRect: this.target.getBoundingClientRect(),
      intersectionRatio: isIntersecting ? 1 : 0,
      intersectionRect: this.target.getBoundingClientRect(),
      isIntersecting,
      rootBounds: null,
      target: this.target,
      time: 0,
    } satisfies IntersectionObserverEntry;

    this.callback([entry], this);
  }
}

describe('ScrollReveal', () => {
  beforeEach(() => {
    MockIntersectionObserver.instances = [];
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
    vi.stubGlobal('matchMedia', () => ({ matches: false }));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('reverses the entrance direction when scrolling back up', () => {
    render(<ScrollReveal><section>Portfolio section</section></ScrollReveal>);

    const wrapper = screen.getByText('Portfolio section').parentElement;
    const observer = MockIntersectionObserver.instances[0];

    expect(wrapper).toHaveStyle({ opacity: '0', transform: 'translateY(24px)' });

    act(() => observer.trigger(true));
    expect(wrapper).toHaveStyle({ opacity: '1', transform: 'translateY(0)' });

    act(() => observer.trigger(false));
    expect(wrapper).toHaveStyle({ opacity: '0', transform: 'translateY(24px)' });

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 100 });
    fireEvent.scroll(window);
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 50 });
    fireEvent.scroll(window);

    expect(wrapper).toHaveStyle({ transform: 'translateY(-24px)' });

    act(() => observer.trigger(true));
    expect(wrapper).toHaveStyle({ opacity: '1', transform: 'translateY(0)' });
  });
});
