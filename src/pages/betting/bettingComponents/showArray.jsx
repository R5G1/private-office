import { useState } from 'react';
import styles from '../../style/showArray.module.scss';
import Modal from '../../../components/modalBetting/modal';
import FilterArray from './filterArray';
import Select from 'react-select';
import UniqueList from './uniqueList';
import HandleRowClick from './filterArrayComponents/handleRowClick';

function ShowArray({ post }) {
  const [modalActive, setModalActive] = useState(false);
  const [modalActiveClick, setModalActiveClick] = useState(false);
  const [resetOptions, setResetOptions] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [IDLeadsFilter, setIDLeadsFilter] = useState('');
  const [startUpdateDate, setStartUpdateDate] = useState('');
  const [endUpdateDate, setEndUpdateDate] = useState('');
  const [phoneNumberFilter, setPhoneNumberFilter] = useState('');
  const [townFilter, setTownFilter] = useState('');
  const [vacancyFilter, setVacancyFilter] = useState('');

  const optionsStatus = UniqueList(post, 'status');
  const optionsTown = UniqueList(post, 'Town');
  const optionsVacancy = UniqueList(post, 'vacancy');

  function setSelected(params) {
    setSelectedRow(params);
    setModalActiveClick(true);
  }

  function resetFilter() {
    setStartDate('');
    setEndDate('');
    setStatusFilter('');
    setIDLeadsFilter('');
    setStartUpdateDate('');
    setEndUpdateDate('');
    setPhoneNumberFilter('');
    setTownFilter('');
    setVacancyFilter('');
    setResetOptions(Date.now());
  }

  return (
    <div>
      <div className={styles.ShowArrayFilteredConteiner}>
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
              onChange={(selected) => {
                setStatusFilter(selected ? selected.value : '');
              }}
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
            IDLeadsFilter={IDLeadsFilter}
            startUpdateDate={startUpdateDate}
            endUpdateDate={endUpdateDate}
            phoneNumberFilter={phoneNumberFilter}
            townFilter={townFilter}
            vacancyFilter={vacancyFilter}
            setSelectedRow={setSelected}
          />
        </table>
      </div>
      <Modal active={modalActiveClick} setActive={setModalActiveClick} text={'Информация о лиде'}>
        {HandleRowClick(selectedRow)}
      </Modal>
      <Modal active={modalActive} setActive={setModalActive} text={'Фильтры'}>
        <div>
          <label htmlFor="IDLeadsFilter">
            Поиск по ID лида
            <input
              type="text"
              id="IDLeadsFilter"
              value={IDLeadsFilter}
              placeholder="Поиск по ID лида"
              onChange={(e) => setIDLeadsFilter(e.target.value)}
            />
          </label>
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
          <label htmlFor="dateInputFromUp">
            Дата изменения c
            <input
              type="date"
              id="dateInputFromUp"
              value={startUpdateDate}
              onChange={(e) => setStartUpdateDate(e.target.value)}
            />
          </label>
          <label htmlFor="dateInputToUp">
            Дата изменения до
            <input
              type="date"
              id="dateInputToUp"
              value={endUpdateDate}
              onChange={(e) => setEndUpdateDate(e.target.value)}
            />
          </label>
          <label htmlFor="phoneNumberFilter">
            Телефон
            <input
              type="number"
              id="phoneNumberFilter"
              value={phoneNumberFilter}
              placeholder="Телефон"
              onChange={(e) => setPhoneNumberFilter(e.target.value)}
            />
          </label>
          <label>
            Город
            <Select
              isClearable={true}
              onChange={(selected) => {
                setTownFilter(selected ? selected.value : '');
              }}
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
              onChange={(selected) => {
                setVacancyFilter(selected ? selected.value : '');
              }}
              value={optionsVacancy.find((option) => option.value === vacancyFilter) || null}
              options={optionsVacancy}
              isSearchable
              placeholder="Вакансия"
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
            Статус
            <Select
              isClearable={true}
              onChange={(selected) => {
                setStatusFilter(selected ? selected.value : '');
              }}
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
        </div>
      </Modal>
    </div>
  );
}

export default ShowArray;
