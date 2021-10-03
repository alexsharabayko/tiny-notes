import { IItem, IItemCreate, ItemType, ITodo } from '../domains/todo';
import { UuidUtil } from '../utils/uuid/uuid';

const ITEMS: IItem[] = [
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
];

export const apiFetchItems = (): Promise<IItem[]> => {
  return Promise.resolve([...ITEMS]);
};

export const apiFetchItem = (id: string): Promise<IItem | undefined> => {
  return Promise.resolve(ITEMS.find(item => item.id === id));
};

export const apiCreateItem = (data: IItemCreate): Promise<IItem> => {
  const item: IItem = {
    ...data,
    id: UuidUtil.generate(),
    createdAt: Date.now(),
  };

  ITEMS.push(item);

  return Promise.resolve(item);
};

export const apiCreateTodo = (title: string): Promise<ITodo> => {
  return Promise.resolve({
    title,
    completed: false,
    id: UuidUtil.generate(),
    createdAt: Date.now(),
  });
};
