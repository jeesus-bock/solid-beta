import { describe, expect, test } from 'vitest';
import { render } from 'solid-testing-library';
import { NavBar } from './NavBar';
import { Router } from '@solidjs/router';

/* NavBar requires the Router, so the renders() have to use it.
 */
describe('<NavBar />', () => {
  test('Renders', async () => {
    const { container, unmount } = await render(() => (
      <Router>
        <NavBar />
      </Router>
    ));
    expect(container).toMatchSnapshot();
    unmount();
  });
  test('Renders nav link texts', async () => {
    const { container, unmount } = await render(() => (
      <Router>
        <NavBar />
      </Router>
    ));
    const childTexts = [...(container.firstChild?.childNodes || [])].map((cn) => cn.textContent);
    expect(childTexts).toEqual(['Home', 'About', 'Magicks']);
    unmount();
  });
});
