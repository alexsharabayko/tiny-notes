import React, { ReactElement } from 'react';
import css from './Main.module.scss';
import { Header } from '../header/Header';
import { List } from '../../screens/list/List';

console.log(css);

export const Main = (): ReactElement => {
  return <div className={css.app}>
    <Header />

    <section className={css.content}>
      <aside className={css.listWrapper}>
        <List />
      </aside>

      <main>Hello</main>
    </section>
  </div>
};
