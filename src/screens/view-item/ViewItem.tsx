import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiFetchItem, apiUpdateToggleComplete } from '../../apis/items-api';
import { IItem, ItemType, ITodo } from '../../domains/todo-domain';
import css from './ViewItem.module.scss';
import { ViewTodos } from './ViewTodos';
import { ItemHeader } from '../item-header/ItemHeader';

interface IProps {
  onDelete: (id: string) => void;
}

export const ViewItem = ({ onDelete }: IProps): ReactElement => {
  const [item, setItem] = useState<IItem>();
  const { id } = useParams<{ id: string }>();

  const getItem = (): void => {
    apiFetchItem(id).then(item => setItem(item));
  };

  useEffect(getItem, [id]);

  if (!item) {
    return null;
  }

  const toggleTodoComplete = (todo: ITodo): void => {
    apiUpdateToggleComplete(id, todo.id).then(getItem);
  };

  return (
    <article>
      <ItemHeader item={item} showEdit={true} title={item.title} onDelete={() => onDelete(item.id)} />

      {item.type === ItemType.NOTE && <p className={css.text}>{item.text}</p>}
      {item.type === ItemType.TODO && <ViewTodos todoList={item} onToggleComplete={toggleTodoComplete}/>}
    </article>
  );
};
