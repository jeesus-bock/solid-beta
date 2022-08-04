import { Component, createEffect, createSignal, onMount } from 'solid-js';

interface CountDownProps {
  initial: number;
}
export const CountDown: Component<CountDownProps> = (props) => {
  const [t, setT] = createSignal(0);
  onMount(() => {
    setT(props.initial);
  });
  createEffect(() => {
    setT(props.initial);
  });

  setInterval(() => {
    setT(t() + 1);
  }, 400);
  return <span>t:{t()}</span>;
};
