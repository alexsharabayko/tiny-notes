import React, { ReactElement } from 'react';
import { IItem, ItemType } from '../../domains/todo';
import css from './List.module.scss';
import classNames from 'classnames';

interface IProps {
  item: IItem;
}

export const ListItem = ({ item }: IProps): ReactElement => {
  const isItemNote = item.type === ItemType.NOTE;
  const isItemTodo = item.type === ItemType.TODO;
  const itemClasses = classNames(css.item, {
    [css['item--note']]: isItemNote,
    [css['item--todo']]: isItemTodo,
  });

  return (
    <li className={itemClasses}>
      <h4 className={css.title}>{item.title}</h4>

      {isItemNote && <p className={css.text}>{item.text}</p>}

      {isItemTodo && (
        <div className={css.todo}>
          Items: <strong>{item.items.length}</strong>
          &nbsp;
          Completed: <strong>{item.items.filter(todo => todo.completed).length}</strong>
        </div>
      )}
    </li>
  );
};
