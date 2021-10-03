import React, { ReactElement, useEffect, useState } from 'react';
import css from './Main.module.scss';
import { List } from '../list/List';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { NoSelected } from '../no-selected/NoSelected';
import { AddItem } from '../add-item/AddItem';
import { ViewItem } from '../view-item/ViewItem';
import { IItem } from '../../domains/todo';
import { apiDeleteItem, apiFetchItems } from '../../apis/items-api';
import { EditItem } from '../edit-item/EditItem';

export const Main = (): ReactElement => {
  const location = useLocation();
  const history = useHistory();

  const [items, setItems] = useState<IItem[]>([]);

  const getItems = (): void => {
    apiFetchItems().then(newItems => {
      setItems(newItems);
    })
  };

  const onUpdate = (item: IItem) => {
    getItems();
    history.push(`/view-item/${item.id}`)
  };

  const onDelete = (id: string) => {
    apiDeleteItem(id).then(getItems).then(() => {
      history.push('/')
    });
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
              <AddItem onItem={onUpdate}/>
            </Route>
            <Route path="/view-item/:id">
              <ViewItem onDelete={onDelete} />
            </Route>
            <Route path="/edit-item/:id">
              <EditItem onItem={onUpdate} onDelete={onDelete} />
            </Route>
            <Route path="/">
              <NoSelected />
            </Route>
          </Switch>
        </main>
      </section>
    </div>
  );
};
