import React, { ReactElement } from 'react';
import { ITodo, ITodoList } from '../../domains/todo';
import css from './ViewItem.module.scss';

interface IPorps {
  todoList: ITodoList;
  onToggleComplete: (todo: ITodo) => void;
}

export const ViewTodos = ({ todoList: { id, items }, onToggleComplete }: IPorps): ReactElement => {
  return (
    <ul className={css.todos}>
      {items.map(todo => {
        return (
          <li key={todo.id} className={css.todosItem}>
            <div className="m-r-5">
              <input type="checkbox" checked={todo.completed} onChange={() => onToggleComplete(todo)}/>
            </div>
            <div>
              {todo.title}
            </div>
          </li>
        );
      })}
    </ul>
  );
};
