/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getPagesArray, getPagesCount } from '../../components/utils/pages';
import style from '../style/index.module.scss';
import ShowArray from './mainComponents/showArray';
import rateArray from '../../components/array/rateArray';

function Main() {
  const [post, setPost] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  async function fatchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: { _limit: limit, _page: page },
    });
    setPost(response.data);
    const xTotalCount = Number(response.headers['x-total-count']);
    setTotalCount(getPagesCount(xTotalCount, limit));
  }

  function clikPage(params) {
    setPage(params);
  }

  useEffect(() => {
    fatchPosts();
  }, [page]);

  function creatArray() {
    function randomInteger(min, max) {
      const rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }
    const arraayText = ['Курьер', 'Курьер Лавка', 'Сборщик'];

    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push({
        userId: i + Math.random(),
        town: 'text',
        leadType: arraayText[randomInteger(0, 2)],
        registeredFrom: `${randomInteger(1, 31)}.07.2023`,
        registeredTo: `${randomInteger(1, 30)}.08.2023`,
        priority: randomInteger(1, 10),
        rate: randomInteger(1000, 5000),
      });
    }
    console.log(array);
  }
  // creatArray();

  return (
    <div className={style.main}>
      <h2>Ставки</h2>
      <div className={style.mainConteiner}>
        <ShowArray post={rateArray} />
      </div>
      <div className={style.mainConteinerPages}>
        {getPagesArray(totalCount).map((item) => (
          <button
            onClick={() => clikPage(item)}
            className={page === item ? style.mainConteinerPBtnActive : style.mainConteinerPBtn}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Main;
