export interface IEntity {
  id: string;
  createdAt: number;
}

export enum ItemType {
  TODO = 'todo',
  NOTE = 'note',
}

export interface ITodo extends IEntity {
  title: string;
  completed: boolean;
  description?: string;
}

export interface ITodoList extends IEntity {
  title: string;
  items: ITodo[];
  type: ItemType.TODO;
}

export interface INote extends IEntity {
  title: string;
  text: string;
  type: ItemType.NOTE;
}

export type IItem = ITodoList | INote;

export type ITodoListCreate = Pick<ITodoList, 'title' | 'items' | 'type'>
export type INoteCreate = Pick<INote, 'title' | 'text' | 'type'>
export type IItemCreate = ITodoListCreate | INoteCreate;
