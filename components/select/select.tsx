import React from 'react';
import { Select } from 'antd';
import style from './select.module.scss';
import { SelectValue } from 'antd/es/select';

export const SelectComponent = (props: {
  fnClick: (e: SelectValue) => void;
  options: JSX.Element[];
  icon: React.ReactElement;
  placeholder?: string;
}): JSX.Element => (
  <div className={style.select}>
    {props.icon
      ? React.cloneElement(props.icon, {
          className: props.icon.props.className + ' ' + style.icon,
        })
      : null}
    <Select
      size={'large'}
      allowClear
      maxTagCount={'responsive'}
      style={{ width: '100%' }}
      placeholder={props.placeholder}
      onChange={props.fnClick}
    >
      {props.options}
    </Select>
  </div>
);
