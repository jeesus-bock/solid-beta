import { describe, expect, test } from 'vitest';
import { render } from 'solid-testing-library';
// No named exports because of the router. TODO investigate.
import About from './About';

describe('views <About />', () => {
  test('Renders', async () => {
    const { container, unmount } = await render(() => <About />);
    expect(container).toMatchSnapshot();
    unmount();
  });
});
