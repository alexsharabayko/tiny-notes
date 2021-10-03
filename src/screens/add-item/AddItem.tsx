import React, { ReactElement, useState } from 'react';
import css from './AddItem.module.scss';
import { Link } from 'react-router-dom';
import { IItem, IItemCreate, ItemType } from '../../domains/todo';
import { apiCreateItem } from '../../apis/items-api';
import { RadioGroup } from '../../components/radio-group/RadioGroup';
import { IRadioOption } from '../../domains/ui';
import { AddEditTodos } from '../add-edit-todos/AddEditTodos';
import { AddEditNote } from '../add-edit-note/AddEditNote';

interface IProps {
  onItem: (item: IItem) => void;
}

export const AddItem = ({ onItem }: IProps): ReactElement => {
  const [type, setType] = useState<ItemType>(ItemType.TODO);
  const typeOptions: IRadioOption<ItemType>[] = [
    {
      title: 'Todo',
      value: ItemType.TODO,
    },
    {
      title: 'Note',
      value: ItemType.NOTE,
    },
  ];
  const ContentComponent = type === ItemType.NOTE ? AddEditNote : AddEditTodos;

  const createItem = (item: IItemCreate) => {
    apiCreateItem(item).then(onItem);
  };

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <div>
          <h2 className={css.title}>Add Item</h2>
          <div>
            <RadioGroup<ItemType> options={typeOptions} name="type" onCheck={setType} />
          </div>
        </div>

        <Link to="/">
          <i className="icon icon-x-circle" />
        </Link>
      </header>

      <section className={css.content}>
        <ContentComponent onItem={createItem} />
      </section>
    </div>
  );
};
