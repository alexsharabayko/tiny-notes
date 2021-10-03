import React, { ReactElement } from 'react';
import css from './NoSelected.module.scss';

export const NoSelected = (): ReactElement => {
  return (
    <article className={css.content}>
      <div>
        <i className="icon icon-annotation" />

        <h3 className={css.title}>No Selected Item Yet!</h3>
        <small className={css.description}>
          Please choose any note or todo list to see its content. Or click on plus to create a new item
        </small>
      </div>
    </article>
  );
};
