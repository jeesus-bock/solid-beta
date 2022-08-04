import { createSignal } from 'solid-js';
import { CountDown } from '../components/CountDown';
export default function Magicks() {
  const [initCd, setInitCd] = createSignal(0);
  return (
    <div>
      Magicks <CountDown initial={initCd()} />{' '}
      <button
        onClick={() => {
          setInitCd(1);
          setInitCd(0);
        }}>
        Reset
      </button>
    </div>
  );
}
