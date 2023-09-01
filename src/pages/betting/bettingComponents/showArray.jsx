import { useState, useEffect } from 'react';
import styles from './style/showArray.module.scss';
import Modal from '../../../components/modal/modal';
import FilterArray from './filterArray';
import Select from 'react-select';
import UniqueList from './uniqueList';

function ShowArray({ post }) {
  const [modalActive, setModalActive] = useState(false);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const [userData, setUserData] = useState({
    IDLeads: '',
    dateRegistration: '',
    updateDate: '',
    firstName: '',
    lastname: '',
    phoneNumber: '',
    town: '',
    status: '',
    reward: '',
    reasonNotLeading: '',
    user: '',
    vacancy: '',
    challengeStatus: '',
    UTMcontent: '',
    UTMsource: '',
    tariff: '',
    visitDatetime: '',
  });

  const [townFilter, setTownFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

  const [resetOptions, setResetOptions] = useState(null);

  const optionsTown = UniqueList(post, true);
  const optionsLeadType = UniqueList(post, false);
  const optionsStatus = UniqueList(post, 'status');

  const handleChangeTown = (selected) => {
    setTownFilter(selected ? selected.value : '');
  };
  const handleChangeLeadType = (selected) => {
    setStatusFilter(selected ? selected.value : '');
  };

  function resetFilter() {
    setStartDate('');
    setEndDate('');
    setStatusFilter('');

    setTownFilter('');
    setPriorityFilter('');
    setResetOptions(Date.now());
  }

  return (
    <div>
      <div className={styles.ShowArrayFilteredConteiner}>
        {/* <div className={styles.ShowArrayFilteredText}>
          <label>
            Город
            <Select
              isClearable={true}
              onChange={handleChangeTown}
              value={optionsTown.find((option) => option.value === townFilter) || null}
              options={optionsTown}
              isSearchable
              placeholder="Фильтр по городу"
              className="react-select-container"
              classNamePrefix="react-select"
              key={resetOptions}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: 'black',
                },
              })}
            />
          </label>
          <label>
            Вакансия
            <Select
              isClearable={true}
              onChange={handleChangeLeadType}
              value={optionsLeadType.find((option) => option.value === leadTypeFilter || null)}
              options={optionsLeadType}
              isSearchable
              placeholder="Фильтр по типу лида"
              className="react-select-container"
              classNamePrefix="react-select"
              key={resetOptions}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: 'black',
                },
              })}
            />
          </label>
          <label htmlFor="PriorityFilter">
            Приоритет
            <input
              type="number"
              min={0}
              max={10}
              id="PriorityFilter"
              value={priorityFilter}
              placeholder="Фильтр по приоритету"
              onChange={(e) => setPriorityFilter(e.target.value)}
            />
          </label>
        </div> */}
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
          <label>
            Статус
            <Select
              isClearable={true}
              onChange={handleChangeLeadType}
              value={optionsStatus.find((option) => option.value === statusFilter || null)}
              options={optionsStatus}
              isSearchable
              placeholder="Статус"
              className="react-select-container"
              classNamePrefix="react-select"
              key={resetOptions}
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary: 'black',
                },
              })}
            />
          </label>
          <button onClick={resetFilter}>Сбросить</button>
          <button
            className={styles.ShowArrayFilteredBtn}
            onClick={() => {
              setModalActive(true);
            }}
          >
            <div className={styles.ShowArrayFilteredBtnImg}></div>
          </button>
        </div>
      </div>
      <div className={styles.ShowArrayContetnTable}>
        <table className={styles.ShowArrayContetn}>
          <thead>
            <tr>
              <th>
                <p>ID лида</p>
              </th>
              <th>
                <p>Дата регистрации</p>
              </th>
              <th>
                <p>Дата обновления</p>
              </th>
              <th>
                <p>Имя</p>
              </th>
              <th>
                <p>Фамилия</p>
              </th>
              <th>
                <p>Номер телефона</p>
              </th>
              <th>
                <p>Город</p>
              </th>
              <th>
                <p>Статус</p>
              </th>
              <th>
                <p>Вознаграждение</p>
              </th>
              <th>
                <p>Причина не лида</p>
              </th>
              <th>
                <p>Пользователь</p>
              </th>
              <th>
                <p>Вакансия</p>
              </th>
              <th>
                <p>Статус оспаривания</p>
              </th>
              <th>
                <p>UTM content</p>
              </th>
              <th>
                <p>UTM source</p>
              </th>
              <th>
                <p>Тариф</p>
              </th>
              <th>
                <p>visit_datetime</p>
              </th>
            </tr>
          </thead>
          <FilterArray
            array={post}
            startDate={startDate}
            endDate={endDate}
            statusFilter={statusFilter}
            townFilter={townFilter}
            priorityFilter={priorityFilter}
          />
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
