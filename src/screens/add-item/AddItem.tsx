import React, { ReactElement } from 'react';
import css from './AddItem.module.scss';
import { Link } from 'react-router-dom';
import { AddNote } from './AddNote';
import { IItem, IItemCreate } from '../../domains/todo';
import { apiCreateItem } from '../../apis/items-api';

interface IProps {
  onItem: (item: IItem) => void;
}

export const AddItem = ({ onItem }: IProps): ReactElement => {
  const createItem = (item: IItemCreate) => {
    apiCreateItem(item).then(onItem);
  };

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <h2 className={css.title}>Add Item</h2>

        <Link to="/">
          <i className="icon icon-x-circle" />
        </Link>
      </header>

      <section className={css.content}>
        <AddNote onItem={createItem} />
      </section>
    </div>
  );
};
