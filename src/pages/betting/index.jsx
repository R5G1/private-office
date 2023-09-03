import axios from 'axios';
import { SetStateAction, useEffect, useState } from 'react';
import { getPagesArray, getPagesCount } from '../../components/utils/pages';
import style from '../style/index.module.scss';
import ShowArray from '../betting/bettingComponents/showArray';
import leadsArray from '../../components/array/leadsArray';

function Betting() {
  const itemsPerPage = 100;
  const [visibleData, setVisibleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const loadMoreData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newData = leadsArray.slice(startIndex, endIndex);
    setVisibleData([...visibleData, ...newData]);
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const startIndex = 0;
    const endIndex = itemsPerPage;
    const initialData = leadsArray.slice(startIndex, endIndex);
    setVisibleData(initialData);
  }, []);

  return (
    <div className={style.main}>
      <h2>Leads</h2>
      <div className={style.mainConteiner}>
        <ShowArray post={visibleData} />
      </div>
      <button className={style.mainConteinerPlaginBtn} onClick={loadMoreData}>
        Загрузить ещё
      </button>
      <div className={style.mainConteinerPlaginBtnFooter}></div>
    </div>
  );
}

export default Betting;
