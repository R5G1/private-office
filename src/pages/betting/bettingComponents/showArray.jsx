import { useState, useEffect } from 'react';
import styles from './style/showArray.module.scss';
import Modal from '../../../components/modal/modal';
import FilterArray from './filterArray';
import Select from 'react-select';
import UniqueList from './uniqueList';

function ShowArray({ post }) {
  const [townFilter, setTownFilter] = useState('');
  const [leadTypeFilter, setLeadTypeFilter] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [resetOptions, setResetOptions] = useState(null);

  const optionsTown = UniqueList(post, true);
  const optionsLeadType = UniqueList(post, false);
  const handleChangeTown = (selected) => {
    setTownFilter(selected ? selected.value : '');
  };
  const handleChangeLeadType = (selected) => {
    setLeadTypeFilter(selected ? selected.value : '');
  };

  function resetFilter() {
    setTownFilter('');
    setLeadTypeFilter('');
    setPriorityFilter('');
    setStartDate('');
    setEndDate('');
    setResetOptions(Date.now());
  }

  return (
    <div>
      <div className={styles.ShowArrayFilteredConteiner}>
        <div className={styles.ShowArrayFilteredText}>
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
          <FilterArray
            array={post}
            townFilter={townFilter}
            leadTypeFilter={leadTypeFilter}
            priorityFilter={priorityFilter}
            startDate={startDate}
            endDate={endDate}
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
