import style from '../style/index.module.scss';
import ShowArray from './mainComponents/showArray';
import rateArray from '../../components/array/rateArray';

function Main() {
  return (
    <div className={style.main}>
      <h2>Ставки</h2>
      <div className={style.mainConteiner}>
        <ShowArray post={rateArray} />
      </div>
    </div>
  );
}

export default Main;
