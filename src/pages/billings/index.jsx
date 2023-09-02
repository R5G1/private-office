import { useState } from 'react';
import style from '../style/index.module.scss';
import ShowArray from './billingsComponents/showArray';
import leadsArray from '../../components/array/leadsArray';

function Billings() {
  const [post, setPost] = useState([]);

  return (
    <div className={style.main}>
      <h2>Биллинг</h2>
      <div className={style.mainConteiner}>
        <ShowArray post={leadsArray} />
      </div>
    </div>
  );
}

export default Billings;
