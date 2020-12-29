import classes from '../styles/Field.module.css';
import { ChangeEvent } from 'react';

interface IProps {
  onChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
}

export const Field = ({ onChange, name, value }: IProps) => {
  return (
    <div className={classes.field}>
      <label className={classes.label} htmlFor={name}>
        {name}
      </label>
      <input
        className={classes.input}
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
};
