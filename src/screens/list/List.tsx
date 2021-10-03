import React, { ReactElement, useEffect, useState } from 'react';
import css from './List.module.scss';
import { IItem } from '../../domains/todo-domain';
import { ListItem } from './ListItem';
import { ListHeader } from './ListHeader';

interface IProps {
  items: IItem[];
}

export const List = ({ items }: IProps): ReactElement => {
  return (
    <div className={css.wrapper}>
      <ListHeader />

      <ul className={css.list}>
        {items.map(item => <ListItem item={item} key={item.id}/>)}
      </ul>
    </div>
  );
};
