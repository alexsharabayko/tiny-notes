import React, { ReactElement } from 'react';
import { IRadioOption } from '../../domains/ui';

interface IProps<T = string> {
  options: IRadioOption<T>[];
  name: string;
  onCheck: (value: T) => void;
}

export const RadioGroup = <T extends string>({ options, name, onCheck }: IProps<T>): ReactElement => {
  return (
    <ul>
      {options.map(option => {
        return <li key={option.value}>
          <label>
            <input type="radio" name={name} value={option.value} onClick={() => onCheck(option.value)}/>
          </label>
        </li>
      })}
    </ul>
  );
};
