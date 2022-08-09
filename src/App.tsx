import { Component, ErrorBoundary, lazy, useContext } from 'solid-js';
import { Routes, Route, Link } from '@solidjs/router';
import { NavBar } from './components/NavBar';
import { CtxProvider, useCtx } from './context/root';
import { ContentCtxProvider } from './context/contents';
const Home = lazy(() => import('./views/Home'));
const About = lazy(() => import('./views/About'));
const Magicks = lazy(() => import('./views/Magicks'));
export const App: Component = () => {
  const ctx = useCtx();
  console.log('app.tsx', ctx);
  return (
    <ErrorBoundary fallback={<span>Big oops</span>}>
      <NavBar />
      <Routes>
        <ContentCtxProvider>
          <Route path='/magicks' component={Magicks} />
          <Route path='/' component={Home} />
          <Route path='/about/:aboutId' component={About} />
          <Route path='/about' component={About} />
        </ContentCtxProvider>{' '}
      </Routes>
    </ErrorBoundary>
  );
};
