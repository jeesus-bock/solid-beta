import { createSignal, For, Show } from 'solid-js';
import { CountDown } from '../components/CountDown';
import { useCtx } from '../context/root';
export default function Magicks() {
  const [initCd, setInitCd] = createSignal(0);
  const ctx = useCtx();
  console.log(ctx);
  return (
    <div>
      Magicks <CountDown initial={initCd()} />
      <button
        onClick={() => {
          setInitCd(1);
          setInitCd(0);
        }}>
        Reset
      </button>
      <Show when={ctx && ctx.users}>
        <For each={ctx.users}>{(u: string) => <span>{u}</span>}</For>
      </Show>
    </div>
  );
}
