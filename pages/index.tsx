import 'antd/dist/antd.css';
import React from 'react';
import { Cards } from '../components/cards/cards';
import { GetDigimons } from './api/hello';
import { FilterDigimon } from '../components/filters/filter-digimon/filter-digimon';
import { motion } from 'framer-motion';

const Index = (): JSX.Element => {
  return (
    <>
      <FilterDigimon fnChange={op => alert(op)} />
      <div style={{ marginTop: '20px' }}>
        <Cards digimons={GetDigimons()} />
      </div>
    </>
  );
};

export default Index;
