export interface IEntity {
  id: string;
  createdAt: number;
}

export enum ItemType {
  TODO,
  NOTE,
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
