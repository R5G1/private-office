import { useState } from 'react';
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

  const filteredPosts = post.filter((item) => {
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

  function resetFilter() {
    setTownFilter('');
    setLeadTypeFilter('');
    setPriorityFilter('');
    setStartDate('');
    setEndDate('');
  }

  return (
    <div>
      <div className={styles.ShowArrayFilteredConteiner}>
        <div className={styles.ShowArrayFilteredText}>
          <label htmlFor="townFilter">
            Город
            <input
              type="text"
              id="townFilter"
              value={townFilter}
              placeholder="Фильтр по городу"
              onChange={(e) => setTownFilter(e.target.value)}
            />
          </label>
          <label htmlFor="LeadTypeFilter">
            Вакансия
            <input
              type="text"
              id="LeadTypeFilter"
              value={leadTypeFilter}
              placeholder="Фильтр по типу лида"
              onChange={(e) => setLeadTypeFilter(e.target.value)}
            />
          </label>
          <label htmlFor="PriorityFilter">
            Приоритет
            <input
              type="number"
              id="PriorityFilter"
              value={priorityFilter}
              placeholder="Фильтр по приоритету"
              onChange={(e) => setPriorityFilter(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.ShowArrayFilteredText}>
          <label htmlFor="dateInputFrom">
            Зарегистрирован с
            <input
              type="date"
              id="dateInputFrom"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label htmlFor="dateInputTo">
            Зарегистрирован до
            <input
              type="date"
              id="dateInputTo"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <button onClick={resetFilter}>Сбросить</button>
          {/* <button
            className={styles.ShowArrayFilteredBtn}
            onClick={() => {
              setModalActive(true);
            }}
          >
            <div className={styles.ShowArrayFilteredBtnImg}></div>
          </button> */}
        </div>
      </div>

      <div className={styles.ShowArrayContetnTable}>
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
            {filteredPosts.map((item, index) => (
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
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <div>
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
