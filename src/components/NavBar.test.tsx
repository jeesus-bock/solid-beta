import { describe, test } from 'vitest';
import { render } from 'solid-testing-library';
import { NavBar } from './NavBar';
import { Router } from '@solidjs/router';
describe('<NavBar />', () => {
  test('Renders', async () => {
    console.log(render);
    let res = await render(() => (
      <Router>
        <NavBar />
      </Router>
    ));
    console.log(Object.keys(res));
  });
});
