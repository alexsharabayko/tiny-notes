import React, { InputHTMLAttributes, MutableRefObject, ReactElement, useRef } from 'react';
import { UuidUtil } from '../../utils/uuid/uuid';
import css from './TextInput.module.scss';
import classNames from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  asideContent?: (input: MutableRefObject<HTMLInputElement>) => ReactElement;
}

export const TextInput = ({ label, id: propId, asideContent, ...restProps }: IProps): ReactElement => {
  const innerIdRef = useRef<string>(UuidUtil.generate());
  const inputRef = useRef<HTMLInputElement>();
  const id = propId || innerIdRef.current;
  const inputClasses = classNames('input', css.input, {
    [css.withAside]: !!asideContent,
  });

  return (
    <div>
      {label && (
        <div className="m-b-5">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div className={css.inputWrapper}>
        <input id={id} {...restProps} className={inputClasses} ref={inputRef}/>
        {asideContent && asideContent(inputRef)}
      </div>
    </div>
  );
};
