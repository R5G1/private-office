import axios from 'axios';
import { SetStateAction, useEffect, useState } from 'react';
import { getPagesArray, getPagesCount } from '../../components/utils/pages';
import style from '../style/index.module.scss';
import ShowArray from '../betting/bettingComponents/showArray';
import leadsArray from '../../components/array/leadsArray';

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
      '-',
    ];
    const arrayIDLeads = [
      'aff29829d9d9accbc02d7e10ddc46980',
      '1e8a5f4b67c5d3f2a9d7e4c5b3a8f2c',
      'b9a2c4d7e2f0d8c1a9f5f2e8f3e9f4a7',
      '6c8b4a1f2d3c5b6a8c7b0c1c2d3e4f5',
      'd1e2c3e4a5b6e7d8c9a0b1c2d3e4f5',
      '0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5',
      'f1e2d3c4b5a6f7e8d9c0b1a2f3e4d5',
      '9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4',
      '6d5c4b3a2f1e0d9c8b7a6f5e4d3c2',
      '7a6b5c4d3e2f1a0b9c8d7e6f5a4b3',
      '5c4d3e2f1a0b9c8d7e6f5a4b3c2',
      'b3c4d5e6f7a8b9c0d1e2f3a4b5c6',
      'f2e3d4c5b6a7f8e9d0c1b2a3f4e5',
      'a4b5c6d7e8f9a0b1c2d3e4f5a6b7',
      'c8d9e0f1a2b3c4d5e6f7a8b9c0',
      '2d3e4f5a6b7c8d9e0f1a2b3c4d5',
      'e6f7a8b9c0d1e2f3a4b5c6d7e8',
      'f9a0b1c2d3e4f5a6b7c8d9e0f1',
      '2a3b4c5d6e7f8a9b0c1d2e3f4a5',
      'b6c7d8e9f0a1b2c3d4e5f6a7b8',
      'c9d0e1f2a3b4c5d6e7f8a9b0',
      'd1e2f3a4b5c6d7e8f9a0b1c2',
      'e3f4a5b6c7d8e9f0a1b2c3d4',
      'f5a6b7c8d9e0f1a2b3c4d5e6',
      '7f8a9b0c1d2e3f4a5b6c7d8e9',
      'f0a1b2c3d4e5f6a7b8c9d0e1',
      '2f3a4b5c6d7e8f9a0b1c2d3e4',
      '5a6b7c8d9e0f1a2b3c4d5e6f7',
    ];
    const arrayFirstName = [
      'Алексей',
      'Екатерина',
      'Иван',
      'Мария',
      'Дмитрий',
      'Ольга',
      'Андрей',
      'Анна',
      'Сергей',
      'Елена',
      'Павел',
      'Наталья',
      'Максим',
      'Ирина',
      'Владимир',
      'Татьяна',
      'Александр',
      'Светлана',
      'Константин',
      'Юлия',
      'Николай',
      'Алёна',
      'Григорий',
      'Оксана',
      'Виктор',
      'Лариса',
      'Роман',
      'Маргарита',
      'Михаил',
      '-',
    ];
    const arrayLastname = [
      'Иванов',
      'Петров',
      'Смирнов',
      'Сидоров',
      'Козлов',
      'Морозов',
      'Павлов',
      'Волков',
      'Соловьев',
      'Васильев',
      'Зайцев',
      'Попов',
      'Лебедев',
      'Кузнецов',
      'Макаров',
      'Федоров',
      'Киселев',
      'Степанов',
      'Горбачев',
      'Ковалев',
      'Новиков',
      'Морозова',
      'Андреева',
      'Петрова',
      'Сидорова',
      'Козлова',
      'Макарова',
      'Горбачева',
      'Новикова',
    ];
    const arrayStatus = [
      'Актив 1',
      'Активный',
      'Активный 1',
      'Активный 10',
      'Активный 25',
      'Активный 5',
      'Не лид',
      'Приглашен в Хаб',
      'Создан',
    ];

    const arrayReward = [
      7740,
      '-',
      '-',
      3886,
      '-',
      '-',
      7108,
      '-',
      '-',
      3990,
      '-',
      '-',
      2144,
      '-',
      '-',
      6354,
      '-',
      '-',
      9854,
      '-',
      '-',
      2593,
      '-',
      '-',
      5615,
      '-',
      '-',
      8349,
      '-',
      '-',
    ];
    const arrayReasonNotLeading = [
      '-',
      '-',
      '-',
      '-',
      '-',
      'ServiceNotAvailable',
      'ServiceNotAvailable',
      'ServiceNotAvailable',
      'ServiceNotAvailable',
      'ServiceNotAvailable',
      '-',
      '-',
      '-',
      '-',
      '-',
      'DuplicateAutomatically',
      'DuplicateAutomatically',
      'DuplicateAutomatically',
      'DuplicateAutomatically',
      'DuplicateAutomatically',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
    ];
    const arrayUser = [
      'wCx0c4WcrG@example.com',
      'P6TZM8hTbo@example.com',
      '7LymUa8TbB@example.com',
      'n1uMqyFzD4@example.com',
      'vwKfLcxyUN@example.com',
      'ECW8iD9QDZ@example.com',
      'CgrHnURPbq@example.com',
      'TS3oMKC2bH@example.com',
      'QALhRpTrDI@example.com',
      'JhB1syQyF5@example.com',
      '0rO9EbvHxB@example.com',
      '8gHzgdxXHo@example.com',
      '7xRDfsX2V1@example.com',
      'FVfQkqBcni@example.com',
      '4WMmMQ5Inb@example.com',
      'YNEw1zYwDN@example.com',
      'rZ0nQ3JfFg@example.com',
      'iyHcZM3j0X@example.com',
      'n0iFHEvZnq@example.com',
      'qHCTlzLl4d@example.com',
      'iWbY1is1Gf@example.com',
      'P5WyxNf9gA@example.com',
      'a0QxNG0zNW@example.com',
      'xGxjHqE98S@example.com',
      'MC0C6LrgLw@example.com',
      'Z0Tti8q5lS@example.com',
      'jCEBCmcVuV@example.com',
      'aGO9zB7uUv@example.com',
      'EkuILXV1DM@example.com',
      '6JWRyf6vIr@example.com',
    ];

    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push({
        userId: i + Math.random(),
        IDLeads: arrayIDLeads[randomInteger(0, 29)],
        dateRegistration: `${randomInteger(1, 31, 'true')}.08.2023`,
        updateDate: `${randomInteger(1, 31, 'true')}.08.2023`,
        firstName: arrayFirstName[randomInteger(0, 29)],
        lastname: arrayLastname[randomInteger(0, 29)],
        phoneNumber: `${randomInteger(790, 799)}${randomInteger(10000000, 90000000)}`,
        town: arrayTown[randomInteger(0, 10)],
        status: arrayStatus[randomInteger(0, 8)],
        reward: arrayReward[randomInteger(0, 29)],
        reasonNotLeading: arrayReasonNotLeading[randomInteger(0, 29)],
        user: arrayUser[randomInteger(0, 29)],
        vacancy: arraayText[randomInteger(0, 2)],
        challengeStatus: '-',
        UTMcontent: 'blank',
        UTMsource: '-',
        tariff: 'junior',
        visitDatetime: `${randomInteger(1, 31, 'true')}.08.2023`,
      });
    }
    console.log(array);
  }
  // creatArray();

  return (
    <div className={style.main}>
      <h2>Leads</h2>
      <div className={style.mainConteiner}>
        <ShowArray post={post} />
      </div>
    </div>
  );
}

export default Betting;
