import style from '../style/index.module.scss';
import ShowArray from './mainComponents/showArray';
import rateArray from '../../components/array/rateArray';
import React, { useState, useEffect } from 'react';

function Main() {
  const itemsPerPage = 100;
  const [visibleData, setVisibleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMoreData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newData = rateArray.slice(startIndex, endIndex);
    setVisibleData([...visibleData, ...newData]);
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const startIndex = 0;
    const endIndex = itemsPerPage;
    const initialData = rateArray.slice(startIndex, endIndex);
    setVisibleData(initialData);
  }, []);

  return (
    <div className={style.main}>
      <h2>Ставки</h2>
      <div className={style.mainConteiner}>
        <ShowArray post={visibleData} />
        <button className={style.mainConteinerPlaginBtn} onClick={loadMoreData}>
          Загрузить ещё
        </button>
        <div className={style.mainConteinerPlaginBtnFooter}></div>
      </div>
    </div>
  );
}

export default Main;
