import { useState } from 'react';
import FilterArray from './filterArray';
import styles from './style/showArray.module.scss';
import Modal from '../../../components/modal/modal';
import { format, parseISO, parse, isAfter, isBefore } from 'date-fns';

function ShowArray({ post }) {
  const [modalActive, setModalActive] = useState(false);

  const [townFilter, setTownFilter] = useState('');
  const [leadTypeFilter, setLeadTypeFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [filteredPosts, setFilteredPosts] = useState(post); // Ваш массив данных

  // Функция для применения фильтров
  const applyFilters = () => {
    let filteredArray = post;

    // Применение фильтра по leadType
    filteredArray = filteredArray.filter((item) => item.leadType === 'Курьер Лавка');

    // Применение фильтра по priority
    filteredArray = filteredArray.filter((item) => item.priority === Number(priorityFilter));

    // Другие фильтры можно добавить по аналогии

    setFilteredPosts(filteredArray);
  };

  const filteredPostsTest = post.filter((item) => {
    function registeredDate() {
      if (!startDate && !endDate) {
        return true;
      }

      const registeredFromDate = parse(item.registeredFrom, 'dd.MM.yyyy', new Date());
      const registeredToDate = parse(item.registeredTo, 'dd.MM.yyyy', new Date());
      const selectedFromDate = parse(startDate, 'yyyy-MM-dd', new Date());
      const selectedToDate = parse(endDate, 'yyyy-MM-dd', new Date());

      return selectedFromDate <= registeredFromDate && selectedToDate >= registeredToDate;
    }

    function townMatches() {
      if (townFilter !== '') {
        return item.town.toLowerCase().includes(townFilter.toLowerCase());
      } else {
        return item.town;
      }
    }

    function leadTypeMatches() {
      if (leadTypeFilter !== '') {
        return item.leadType.toLowerCase().includes(leadTypeFilter.toLowerCase());
      } else {
        return item.leadType;
      }
    }

    function priorityMatches() {
      if (priorityFilter !== '') {
        return item.priority === Number(priorityFilter);
      } else {
        return item.priority;
      }
    }

    return registeredDate() && townMatches() && leadTypeMatches() && priorityMatches();
  });

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Фильтр по городу"
          onChange={(e) => setTownFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Фильтр по типу лида"
          onChange={(e) => setLeadTypeFilter(e.target.value)}
        />
        <input
          type="number"
          placeholder="Фильтр по приоритету"
          onChange={(e) => setPriorityFilter(e.target.value)}
        />
        <input type="date" id="dateInputFrom" onChange={(e) => setStartDate(e.target.value)} />
        <input type="date" id="dateInputTo" onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <button onClick={applyFilters}>Применить фильтры</button>
      <table className={styles.ShowArrayContetn}>
        <thead>
          <tr>
            <th>
              <p>Город</p>
            </th>
            <th>
              <p>Тип лида</p>
            </th>
            <th>
              <p>Зарегистрирован с</p>
            </th>
            <th>
              <p>Зарегистрирован до</p>
            </th>
            <th>
              <p>Приоритет</p>
            </th>
            <th>
              <p>Ставка</p>
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredPostsTest.map((item, index) => (
            <tr key={item.userId.toString()}>
              <td>{item.town}</td>
              <td>{item.leadType}</td>
              <td>{item.registeredFrom}</td>
              <td>{item.registeredTo}</td>
              <td>{item.priority}</td>
              <td>{item.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal active={modalActive} setActive={setModalActive}>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias aliquam ex in voluptates,
          repellendus ipsam culpa nisi similique neque dolores officiis commodi voluptatum quisquam!
          Distinctio amet dolorum magni possimus nemo?
          <button
            onClick={() => {
              setModalActive(false);
            }}
          >
            Следующий
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default ShowArray;
