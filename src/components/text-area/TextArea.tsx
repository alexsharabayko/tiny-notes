import React, { ReactElement, TextareaHTMLAttributes, useRef } from 'react';
import { UuidUtil } from '../../utils/uuid/uuid';
import classNames from 'classnames';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  resize?: 'both' | 'vertical' | 'horizontal';
}

export const TextArea = ({ label, id: propId, value, resize, ...restProps }: IProps): ReactElement => {
  const innerIdRef = useRef<string>(UuidUtil.generate());
  const id = propId || innerIdRef.current;
  const areaClasses = classNames('input', {
    'input--resize-horizontal': resize === 'horizontal',
    'input--resize-vertical': resize === 'vertical',
  });

  return (
    <div>
      {label && (
        <div className="m-b-5">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div>
        <textarea id={id} className={areaClasses} {...restProps} />
      </div>
    </div>
  );
};
