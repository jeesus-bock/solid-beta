import { Component, ErrorBoundary, lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
const Home = lazy(() => import('./views/Home'));
const About = lazy(() => import('./views/About'));
const Magicks = lazy(() => import('./views/Magicks'));
export const App: Component = () => {
  return (
    <ErrorBoundary fallback={<span>Big oops</span>}>
      <Routes>
        <Route path='/magicks' component={Magicks} />
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
      </Routes>
    </ErrorBoundary>
  );
};
