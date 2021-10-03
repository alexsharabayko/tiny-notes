import React, { ReactElement } from 'react';
import { IItem } from '../../domains/todo';
import css from './ItemHeader.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface IProps {
  item: IItem;
}

export const ItemHeader = ({ item }: IProps): ReactElement => {
  const headerClasses = classNames(css.header, css[`header-${item.type}`]);

  return (
    <header className={headerClasses}>
      <h3 className={css.title}>{item.title}</h3>

      <div className={css.icons}>
        <Link to="/">
          <i className="icon icon-pencil" />
        </Link>
        <Link to="/">
          <i className="icon icon-x-circle" />
        </Link>
      </div>
    </header>
  );
};
