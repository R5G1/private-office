import { useState } from 'react';
import styles from '../../style/showArray.module.scss';
import FilterArray from './filterArray';

function ShowArray({ post }) {
  return (
    <div>
      <div className={styles.ShowArrayFilteredConteiner}>
        <h3>Детализация по выплатам</h3>
        <div className={styles.ShowArrayFilteredContent}>
          <div className={styles.ShowArrayFilteredContentColumn}>
            <h4>Доход</h4>
            <p>За прошлый период</p>
            <div>
              <span>0 ₽</span>/<span> 0 из 0 лидов</span>
            </div>
          </div>
          <div className={styles.ShowArrayFilteredContentColumn}>
            <h4>Прогноз</h4>
            <p>На текущий период</p>
            <div>
              <span>0 ₽</span>/<span> 0 из 0 лидов</span>
            </div>
          </div>
        </div>
      </div>
      <h3>История выплат</h3>
      <div className={styles.ShowArrayContetnTable}>
        <table className={styles.ShowArrayContetn}>
          <thead>
            <tr>
              <th>
                <p>Дата</p>
              </th>
              <th>
                <p>Лиды</p>
              </th>
              <th>
                <p>Выполнили цель</p>
              </th>
              <th>
                <p>Выплаты</p>
              </th>
            </tr>
          </thead>
          {/* <FilterArray array={post} /> */}
        </table>
      </div>
    </div>
  );
}

export default ShowArray;
