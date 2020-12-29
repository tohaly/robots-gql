import React from 'react';
import style from '../styles/Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.content}>
        <div className={style.icon} />
        <div className={style.item}>
          <div className={style.ball} />
        </div>
      </div>
    </div>
  );
};
