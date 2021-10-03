import React, { ReactElement, useEffect, useState } from 'react';
import css from './Main.module.scss';
import { List } from '../list/List';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { NoSelected } from '../no-selected/NoSelected';
import { AddItem } from '../add-item/AddItem';
import { ViewItem } from '../view-item/ViewItem';
import { IItem } from '../../domains/todo';
import { apiFetchItems } from '../../apis/items-api';

export const Main = (): ReactElement => {
  const location = useLocation();
  const history = useHistory();

  const [items, setItems] = useState<IItem[]>([]);

  const getItems = (needToRefresh: boolean = false): void => {
    apiFetchItems().then(newItems => {
      setItems(newItems);
      needToRefresh && location.pathname !== '/' && history.push('/');
    })
  };

  useEffect(getItems, []);

  return (
    <div className={css.app}>

      <section className={css.content}>
        <aside className={css.aside}>
          <List items={items}/>
        </aside>

        <main className={css.main}>
          <Switch>
            <Route path="/add-item">
              <AddItem onItem={() => getItems(true)}/>
            </Route>
            <Route path="/view-item/:id">
              <ViewItem/>
            </Route>
            <Route path="/">
              <NoSelected/>
            </Route>
          </Switch>
        </main>
      </section>
    </div>
  );
};
