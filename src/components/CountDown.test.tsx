import { describe, expect, test } from 'vitest';
import { render } from 'solid-testing-library';
import { CountDown } from './CountDown';
describe('<CountDown />', () => {
  test('Renders', async () => {
    const { container, unmount } = await render(() => <CountDown initial={10} />);
    expect(container).toMatchSnapshot();
    unmount();
  });
  test('Renders initial time', async () => {
    const { baseElement, unmount } = await render(() => <CountDown initial={10} />);
    expect(baseElement.textContent).toEqual('t:10');
    unmount();
  });
});
