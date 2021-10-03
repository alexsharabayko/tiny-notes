import React, { ReactElement } from 'react';
import { IRadioOption } from '../../domains/ui';
import css from './RadioGroup.module.scss';
import classNames from 'classnames';

interface IProps<T = string> {
  options: IRadioOption<T>[];
  value: T;
  name: string;
  onCheck: (value: T) => void;
}

export const RadioGroup = <T extends string>({ options, value, name, onCheck }: IProps<T>): ReactElement => {
  return (
    <ul className={css.list}>
      {options.map(option => {
        const titleClasses = classNames(css.title, css[option.color]);

        return (
          <li key={option.value} className={css.li}>
            <label className={css.label}>
              <input
                className={css.input}
                type="radio"
                name={name}
                value={option.value}
                checked={option.value === value}
                onChange={() => onCheck(option.value)}
              />
              <span className={titleClasses}>{option.title}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
