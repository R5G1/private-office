import axios from 'axios';
import { SetStateAction, useEffect, useState } from 'react';
import { getPagesArray, getPagesCount } from '../../components/utils/pages';
import style from '../style/index.module.scss';
import ShowArray from '../main/mainComponents/showArray';

function Betting() {
  const [post, setPost] = useState([]);

  function creatArray() {
    function randomInteger(min, max, role = 'false') {
      const rand = min + Math.random() * (max + 1 - min);
      if (role === 'true') {
        return Math.floor(rand) < 10 ? '0' + Math.floor(rand) : Math.floor(rand);
      } else {
        return Math.floor(rand);
      }
    }
    const arraayText = ['Курьер', 'Курьер Лавка', 'Сборщик'];
    const arrayTown = [
      'Москва',
      'Санкт-Петербург',
      'Новосибирск',
      'Екатеринбург',
      'Нижний Новгород',
      'Казань',
      'Челябинск',
      'Омск',
      'Самара',
      'Ростов-на-Дону',
    ];

    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push({
        userId: i + Math.random(),
        town: arrayTown[randomInteger(0, 9)],
        leadType: arraayText[randomInteger(0, 2)],
        registeredFrom: `${randomInteger(1, 31, 'true')}.07.2023`,
        registeredTo: `${randomInteger(1, 31, 'true')}.08.2023`,
        priority: randomInteger(1, 10),
        rate: randomInteger(1000, 5000),
      });
    }
    console.log(array);
  }
  // creatArray();

  return (
    <div className={style.main}>
      <div className={style.mainConteiner}>
        <ShowArray post={post} />
      </div>
    </div>
  );
}

export default Betting;
