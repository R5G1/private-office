/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getPagesArray, getPagesCount } from '../../components/utils/pages';
import style from '../style/index.module.scss';
import ShowArray from './mainComponents/showArray';

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

  function clikPage(params: any) {
    setPage(params);
  }

  useEffect(() => {
    fatchPosts();
  }, [page]);

  return (
    <div className={style.main}>
      <div className={style.mainConteiner}>
        <ShowArray post={post} />
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
