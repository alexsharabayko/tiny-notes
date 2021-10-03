import React, { ReactElement } from 'react';
import { TextInput } from '../../components/text-input/TextInput';
import { ITodo } from '../../domains/todo-domain';
import classNames from 'classnames';
import css from './AddEditTodos.module.scss';

interface IProps {
  todos: ITodo[];
  onRemove: (id: string) => void;
  onEdit: (id: string, value: string) => void;
}

export const Todos = ({ todos, onRemove, onEdit }: IProps): ReactElement => {
  if (!todos.length) {
    return null;
  }

  const renderRemoveTodoBtn = (todo: ITodo): ReactElement => {
    return (
      <button type="button" className={classNames(css.actTodo, css.remove)} onClick={() => onRemove(todo.id)}>
        <i className="icon icon-x"/>
      </button>
    );
  };

  return (
    <ul className="m-b-20">
      <div className="m-b-5">Todos</div>

      {todos.map(todo => {
        return (
          <li key={todo.id} className="m-b-10">
            <TextInput value={todo.title} onChange={e => onEdit(todo.id, e.target.value)} asideContent={() => renderRemoveTodoBtn(todo)}/>
          </li>
        );
      })}
    </ul>
  );
};
