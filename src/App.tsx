import { Component, ErrorBoundary, lazy } from 'solid-js';
import { Routes, Route, Link } from '@solidjs/router';
import { NavBar } from './components/NavBar';
const Home = lazy(() => import('./views/Home'));
const About = lazy(() => import('./views/About'));
const Magicks = lazy(() => import('./views/Magicks'));
export const App: Component = () => {
  return (
    <ErrorBoundary fallback={<span>Big oops</span>}>
      <NavBar />
      <Routes>
        <Route path='/magicks' component={Magicks} />
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
      </Routes>
    </ErrorBoundary>
  );
};
