import React, { ReactElement } from 'react';
import css from './List.module.scss';
import { Link } from 'react-router-dom';

export const ListHeader = (): ReactElement => {
  return (
    <header className={css.header}>
      <h1 className={css.mainTitle}>Tiny Notes</h1>

      <Link to={`/add-item`}>
        <div className={css.addItem}>
          <i className="icon icon-plus"/>
        </div>
      </Link>
    </header>
  );
};
