import React, { ReactElement, useEffect, useState } from 'react';
import css from './List.module.scss';
import { IItem, ItemType } from '../../domains/todo';
import { UuidUtil } from '../../utils/uuid/uuid';
import { ListItem } from './ListItem';

export const List = (): ReactElement => {
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    setItems([
      {
        id: UuidUtil.generate(),
        createdAt: Date.now(),
        title: 'First Note',
        text: 'Morbi blandit placerat nibh. Nullam nec dapibus lacus, at tempus tellus. Suspendisse mattis eu tortor non aliquam. Cras a ligula velit. Donec imperdiet pretium augue, sit amet tempor augue congue sit amet. Cras a odio libero. Integer sapien ligula, blandit ut finibus in, luctus id arcu. Etiam vehicula imperdiet blandit. Curabitur bibendum vehicula tellus, ac lobortis lorem elementum eu. Curabitur id tortor pharetra, finibus tellus non, consectetur orci. Sed egestas, felis a ultricies blandit, neque risus molestie augue, eu porttitor justo elit at ante.',
        type: ItemType.NOTE,
      },
      {
        id: UuidUtil.generate(),
        createdAt: Date.now(),
        title: 'Second Note',
        text: 'Morbi blandit placerat nibh. Nullam nec dapibus lacus, at tempus tellus. Suspendisse mattis eu tortor non aliquam. Cras a ligula velit. Donec imperdiet pretium augue, sit amet tempor augue congue sit amet. Cras a odio libero. Integer sapien ligula, blandit ut finibus in, luctus id arcu. Etiam vehicula imperdiet blandit. Curabitur bibendum vehicula tellus, ac lobortis lorem elementum eu. Curabitur id tortor pharetra, finibus tellus non, consectetur orci. Sed egestas, felis a ultricies blandit, neque risus molestie augue, eu porttitor justo elit at ante.',
        type: ItemType.NOTE,
      },
      {
        id: UuidUtil.generate(),
        createdAt: Date.now(),
        title: 'Third Note',
        text: 'Morbi blandit placerat nibh. Nullam nec dapibus lacus, at tempus tellus. Suspendisse mattis eu tortor non aliquam. Cras a ligula velit. Donec imperdiet pretium augue, sit amet tempor augue congue sit amet. Cras a odio libero. Integer sapien ligula, blandit ut finibus in, luctus id arcu. Etiam vehicula imperdiet blandit. Curabitur bibendum vehicula tellus, ac lobortis lorem elementum eu. Curabitur id tortor pharetra, finibus tellus non, consectetur orci. Sed egestas, felis a ultricies blandit, neque risus molestie augue, eu porttitor justo elit at ante.',
        type: ItemType.NOTE,
      },
      {
        id: UuidUtil.generate(),
        createdAt: Date.now(),
        title: 'First Todo List',
        items: [
          {
            id: UuidUtil.generate(),
            createdAt: Date.now(),
            title: 'Wake Up',
            completed: true,
          },
          {
            id: UuidUtil.generate(),
            createdAt: Date.now(),
            title: 'Cook breakfast',
            completed: false,
          },
        ],
        type: ItemType.TODO,
      },
    ]);
  }, []);

  return <ul className={css.list}>
    {items.map(item => <ListItem item={item} key={item.id} />)}
  </ul>
};
