import Link from 'next/link';
import classes from '../styles/Header.module.css';

export const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <Link href={'/'}>
          <a className={classes.link}>Main</a>
        </Link>
        <Link href={'/robots'}>
          <a className={classes.link}>Trading robots</a>
        </Link>
        <Link href={'/about'}>
          <a className={classes.link}>About</a>
        </Link>
      </nav>
      <hr />
    </header>
  );
};
