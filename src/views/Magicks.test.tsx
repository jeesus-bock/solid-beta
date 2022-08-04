import { describe, expect, test } from 'vitest';
import { render } from 'solid-testing-library';
// No named exports because of the router. TODO investigate.
import Home from './Home';

describe('views <Home />', () => {
  test('Renders', async () => {
    const { container, unmount } = await render(() => <Home />);
    expect(container).toMatchSnapshot();
    unmount();
  });
});
