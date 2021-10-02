import React, { ReactElement } from 'react';
import css from './Header.module.scss';

export const Header = (): ReactElement => {
  return (
    <header className={css.header}>
      <h1>Tiny Notes</h1>

      <button type="button" className={css.add}>Add</button>
    </header>
  );
};
