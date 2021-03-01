import React, { useCallback, useState } from 'react';
import style from './filter-trigger.module.scss';

export const FilterTrigger = (props: { fnClick }): JSX.Element => {
  const [isOpen, setOpen] = useState(false);
  const clickHandler = useCallback(() => {
    setOpen(prev => !prev);
    console.log(isOpen);
    props.fnClick();
  }, [props]);
  return (
    <a className={style.trigger} tabIndex={0} onClick={clickHandler}>
      <div className={`${style.icon} ${isOpen && style.open}`}>
        <i aria-hidden={'true'} className={`material-icons`}>
          expand_more
        </i>
      </div>
      Advanced search
    </a>
  );
};
