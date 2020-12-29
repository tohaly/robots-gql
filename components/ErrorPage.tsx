import Link from 'next/link';
import classes from '../styles/ErrorPage.module.css';

export const ErrorPage = () => {
  return (
    <div className={classes.err}>
      <h1 className={classes.title}>Произогла ошибка:(</h1>
      <p className={classes.subtitle}>
        <Link href={'/'}>
          <a className={classes.back}>Вернитесь назад </a>
        </Link>
        или попробуйте позже
      </p>
    </div>
  );
};
