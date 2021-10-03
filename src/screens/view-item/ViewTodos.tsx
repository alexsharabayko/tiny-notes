import React, { ReactElement } from 'react';
import { ITodo, ITodoList } from '../../domains/todo';
import css from './ViewItem.module.scss';
import classNames from 'classnames';

interface IPorps {
  todoList: ITodoList;
  onToggleComplete: (todo: ITodo) => void;
}

export const ViewTodos = ({ todoList: { id, todos }, onToggleComplete }: IPorps): ReactElement => {
  return (
    <ul className={css.todos}>
      {todos.map(todo => {
        const htmlId = `view-todo-${todo.id}`;
        const todoClasses = classNames(css.item, {
          [css.completed]: todo.completed,
        });

        return (
          <li key={todo.id} className={todoClasses}>
            <div className="m-r-5">
              <input id={htmlId} type="checkbox" checked={todo.completed} onChange={() => onToggleComplete(todo)}/>
            </div>
            <label htmlFor={htmlId}>
              {todo.title}
            </label>
          </li>
        );
      })}
    </ul>
  );
};
