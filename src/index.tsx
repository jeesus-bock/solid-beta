/* @refresh reload */
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import '../node_modules/normalize.css/normalize.css';
import './index.css';
import { App } from './App';
import { CtxProvider } from '../src/context/root';
import { ContentCtxProvider } from './context/contents';

render(
  () => (
    <CtxProvider>
      <ContentCtxProvider>
        <Router>
          <App />
        </Router>
      </ContentCtxProvider>
    </CtxProvider>
  ),
  document.getElementById('root') as HTMLElement
);
