import React, { ReactElement } from 'react';
import { IItem } from '../../domains/todo-domain';
import css from './ItemHeader.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface IProps {
  item: IItem;
  showEdit: boolean;
  title: string;
  onDelete: () => void;
}

export const ItemHeader = ({ item, showEdit, title, onDelete }: IProps): ReactElement => {
  const headerClasses = classNames(css.header, css[`header-${item.type}`]);

  return (
    <header className={headerClasses}>
      <h3 className={css.title}>{title}</h3>

      <div className={css.icons}>
        <i className="icon icon-trash" onClick={() => onDelete && onDelete()}/>

        {showEdit && (
          <Link to={`/edit-item/${item.id}`}>
            <i className="icon icon-pencil"/>
          </Link>
        )}
        <Link to="/">
          <i className="icon icon-x-circle"/>
        </Link>
      </div>
    </header>
  );
};
