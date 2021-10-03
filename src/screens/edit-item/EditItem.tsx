import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiFetchItem, apiUpdateItem } from '../../apis/items-api';
import { IItem, IItemData, ItemType } from '../../domains/todo';
import css from './EditItem.module.scss';
import { ItemHeader } from '../item-header/ItemHeader';
import { AddEditTodos } from '../add-edit-todos/AddEditTodos';
import { AddEditNote } from '../add-edit-note/AddEditNote';

interface IProps {
  onItem: (item: IItem) => void;
}

export const EditItem = ({ onItem }: IProps): ReactElement => {
  const [item, setItem] = useState<IItem>();
  const { id } = useParams<{ id: string }>();

  const getItem = (): void => {
    apiFetchItem(id).then(item => setItem(item));
  };

  useEffect(getItem, [id]);

  if (!item) {
    return null;
  }

  const editItem = (id: string, itemData: IItemData): void => {
    apiUpdateItem(id, itemData).then(onItem)
  };

  return (
    <article>
      <ItemHeader item={item} showEdit={false} title={`Edit ${item.title}`}/>

      <div className={css.edit}>
        {item.type === ItemType.NOTE && <AddEditNote onItem={itemData => editItem(item.id, itemData)} item={item}/>}
        {item.type === ItemType.TODO && <AddEditTodos onItem={itemData => editItem(item.id, itemData)} item={item}/>}
      </div>
    </article>
  );
};
