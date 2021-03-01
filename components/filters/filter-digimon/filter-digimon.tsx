import React, { useRef, useState } from 'react';
import style from './filter-digimon.module.scss';
import { Select } from 'antd';
import { Attribute, Level } from '../../../models/digimon';
import { FilterTrigger } from '../filter-trigger/filter-trigger';
import { SelectComponent } from '../../select/select';
import { FilterInput } from '../../../models/filter';

const { Option } = Select;
const enumToOptions = <T extends Record<string, string>>(
  enumType: T,
): JSX.Element[] => {
  return Object.keys(enumType)
    .map(k => enumType[k])
    .map((opt, i) => (
      <Option key={i.toString(36) + i} value={i}>
        {opt}
      </Option>
    ));
};
const levelOptions = enumToOptions(Level);
const attrOptions = enumToOptions(Attribute);

export const FilterDigimon = (props: {
  fnChange: (f: FilterInput) => void;
}): JSX.Element => {
  const [filter, setFilter] = useState(new FilterInput());
  const [isOpen, setOpen] = useState(false);
  const [setHeight, setHeightState] = useState(0);
  const fnOnChangeFilter = (x: any) => {
    console.log(x);
  };
  const content = useRef(null);

  const toggleAccordion = () => {
    setOpen(prev => !prev);
    setHeightState(!isOpen ? content.current.scrollHeight : 0);
  };

  return (
    <div className={`${style.filter__opened} ${style.filter}`}>
      <div className={style.filter__main}>
        <div
          className={style.filter__content}
          ref={content}
          style={{ maxHeight: `${setHeight}px` }}
        >
          <h2 className={style.filter__title}>Search options</h2>
          <div className={style.selects}>
            <SelectComponent
              icon={<i className={'fas fa-star'} />}
              fnClick={fnOnChangeFilter}
              options={levelOptions}
              placeholder={Object.values(Level)[2]}
            />
            <SelectComponent
              icon={<i className={'fas fa-dna'} />}
              fnClick={fnOnChangeFilter}
              options={attrOptions}
              placeholder={Object.values(Attribute)[2]}
            />
          </div>
        </div>
        {/*<div style={{ width: '350px' }}>*/}
        {/*  <Search*/}
        {/*    placeholder="Search for a name, level or type"*/}
        {/*    allowClear*/}
        {/*    size="large"*/}
        {/*    onSearch={onSearch}*/}
        {/*    enterButton*/}
        {/*  />*/}
        {/*</div>*/}
        <div className={style.filter__trigger}>
          <FilterTrigger fnClick={toggleAccordion} />
        </div>
      </div>
    </div>
  );
};
