import React, { InputHTMLAttributes, ReactElement, useRef } from 'react';
import { UuidUtil } from '../../utils/uuid/uuid';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextInput = ({ label, id: propId, ...restProps }: IProps): ReactElement => {
  const innerIdRef = useRef<string>(UuidUtil.generate());
  const id = propId || innerIdRef.current;

  return (
    <div>
      {label && (
        <div className="m-b-5">
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div>
        <input id={id} {...restProps} className="input"/>
      </div>
    </div>
  );
};
