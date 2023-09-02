import { useState } from 'react';
import style from '../style/index.module.scss';
import ShowArray from './controlComponents/showArray';
import leadsArray from '../../components/array/leadsArray';

function Control() {
  return (
    <div className={style.main}>
      <div className={style.mainConteiner}>
        <ShowArray post={leadsArray} />
      </div>
    </div>
  );
}

export default Control;
