import { Link } from '@solidjs/router';
import style from './NavBar.module.css';
export const NavBar = () => {
  return (
    <nav class={style.nav}>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/magicks'>Magicks</Link>
    </nav>
  );
};
