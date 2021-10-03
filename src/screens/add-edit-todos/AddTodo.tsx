import React, { ReactElement, useState, KeyboardEvent } from 'react';
import { ITodo } from '../../domains/todo';
import { TextInput } from '../../components/text-input/TextInput';
import css from './AddEditTodos.module.scss';
import classNames from 'classnames';
import { apiCreateTodo } from '../../apis/items-api';

interface IProps {
  onAdd: (item: ITodo) => void;
}

export const AddTodo = ({ onAdd }: IProps): ReactElement => {
  const [title, setTitle] = useState<string>('');

  const addTodo = () => {
    apiCreateTodo(title).then(item => {
      onAdd(item);
      setTitle('');
    });
  };

  const renderAddTodoBtn = (): ReactElement => {
    return (
      <button type="button" className={classNames(css.actTodo, css.add)} onClick={addTodo}>
        <i className="icon icon-plus"/>
      </button>
    );
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTodo()
    }
  };

  return (
    <div className="m-b-20">
      <TextInput label="Add Todo:" value={title} onChange={e => setTitle(e.target.value)} onKeyDown={handleKeyDown} asideContent={renderAddTodoBtn}/>
    </div>
  );
};
