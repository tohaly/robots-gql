import Link from 'next/link';
import classes from '../styles/Robot.module.css';

interface IProps {
  code: string;
  id: string;
}

export const Robot = ({ code, id }: IProps) => {
  return (
    <li className={classes.robot}>
      <span className={classes.text}>Robot code: </span>
      <span>{code}</span>
      <Link href={`/robots/robot/${id}`}>
        <a className={classes.more}>more info</a>
      </Link>
    </li>
  );
};
