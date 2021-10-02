import React, { PropsWithChildren, ReactElement } from 'react';
import css from './Modal.module.scss';

export const Modal = ({ children }: PropsWithChildren<{}>): ReactElement => {
  return <div className={css.wrapper}>
    <div className={css.backdrop} />

    <div>
      {children}
    </div>
  </div>
};
