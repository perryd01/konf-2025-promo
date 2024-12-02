import { cubicOut, linear } from "svelte/easing";
import type { FadeParams, TransitionConfig } from "svelte/transition";

export function expand(node, params) {
  const { delay = 0, duration = 400, easing = cubicOut } = params;

  const w = parseFloat(getComputedStyle(node).strokeWidth);

  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t}; stroke-width: ${t * w}`,
  };
}

export function customFade(
  node: Element,
  { delay = 0, duration = 400, easing = linear }: FadeParams = {}
): TransitionConfig {
  const o = +getComputedStyle(node).opacity;
  console.log(node, o);
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`,
  };
}
