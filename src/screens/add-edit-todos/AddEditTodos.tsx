import React, { FormEvent, ReactElement, useState } from 'react';
import { IItemData, ItemType, ITodo, ITodoList } from '../../domains/todo';
import { TextInput } from '../../components/text-input/TextInput';
import { AddTodo } from './AddTodo';
import { Todos } from './Totos';

interface IProps {
  onItem: (item: IItemData) => void;
  item?: ITodoList;
}

export const AddEditTodos = ({ onItem, item }: IProps): ReactElement => {
  const [title, setTitle] = useState<string>(item?.title);
  const [todos, setTodos] = useState<ITodo[]>(item?.todos || []);
  const isSubmitAllowed = !!title && !!todos.length;

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (isSubmitAllowed) {
      onItem({
        title,
        todos: todos,
        type: ItemType.TODO,
      })
    }
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const editTodo = (id: string, title: string) => {
    const todosClone = [...todos];
    const todo = todosClone.find(t => t.id === id);

    if (todo) {
      todo.title = title;
      setTodos(todosClone);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="m-b-20">
        <TextInput label="Title" value={title} onChange={e => setTitle(e.target.value)}/>
      </div>

      <Todos todos={todos} onRemove={removeTodo} onEdit={editTodo}/>

      <AddTodo onAdd={todo => setTodos(todos.concat([todo]))}/>

      <div style={{ textAlign: 'right' }}>
        <button className="btn" disabled={!isSubmitAllowed}>Add</button>
      </div>
    </form>
  );
};
