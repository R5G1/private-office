import { useState } from 'react';
import styles from '../../style/showArray.module.scss';
import Modal from '../../../components/modalBetting/modal';
import FilterArray from './filterArray';
function ShowArray({ post }) {
  const [modalActiveClick, setModalActiveClick] = useState(false);
  const [modalActiveNewUser, setModalActiveNewUser] = useState(false);
  const [selectedRow, setSelectedRow] = useState('');

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    setModalActiveClick(true);
    console.log(selectedRow);
  };

  return (
    <div>
      <div className={styles.ShowArrayContetnTitle}>
        <h2>Управление доступом</h2>
        <button onClick={() => setModalActiveNewUser(true)}>+</button>
      </div>

      <div className={styles.ShowArrayContetnTable}>
        <table className={styles.ShowArrayContetn}>
          <thead>
            <tr>
              <th>
                <p>Имя</p>
              </th>
              <th>
                <p>Яндекс ID</p>
              </th>
              <th>
                <p>Статус</p>
              </th>
            </tr>
          </thead>
          {/* <tbody>
            {post.map((item, index) => (
              <tr key={item.userId.toString()} onClick={() => handleRowClick(item)}>
                <td>
                  {item.firstName} {item.lastname}
                </td>
                <td>{item.IDLeads}</td>

                <td>{item.tariff}</td>
              </tr>
            ))}
          </tbody> */}
          <FilterArray array={post} handleRowClick={handleRowClick} />
        </table>
      </div>
      <Modal
        active={modalActiveClick}
        setActive={setModalActiveClick}
        text={'Редактирование пользователя'}
      >
        <div className={styles.ShowArrayContetnM}>
          <label>
            Имя
            <input type="text" defaultValue={selectedRow.firstName} placeholder="Имя" />
          </label>
          <label>
            Фамилия
            <input type="text" defaultValue={selectedRow.lastname} placeholder="Фамилия" />
          </label>
          <label>
            Отчество
            <input type="text" defaultValue={selectedRow.firstName} placeholder="Отчество" />
          </label>
          <label>
            Статус
            <select>
              <option value="">Активный</option>
              <option value="">Деактивирован</option>
              <option value="">Создан</option>
            </select>
          </label>
          <label>
            Телефон
            <input type="number" defaultValue={selectedRow.phoneNumber} placeholder="Телефон" />
          </label>
          <div className={styles.ShowArrayContetnMBtn}>
            <button onClick={() => setModalActiveClick(false)}>Отмена</button>
            <button onClick={() => setModalActiveClick(false)}>Сохранить</button>
          </div>
        </div>
      </Modal>
      <Modal
        active={modalActiveNewUser}
        setActive={setModalActiveNewUser}
        text={'Новый пользователь'}
      >
        <div className={styles.ShowArrayContetnM}>
          <label>
            Яндекс Логин
            <input type="text" placeholder="Яндекс Логин" />
          </label>
          <label>
            Имя пользователя
            <input type="text" placeholder="Имя пользователя" />
          </label>
          <label>
            Имя
            <input type="text" placeholder="Имя" />
          </label>
          <label>
            Фамилия
            <input type="text" placeholder="Фамилия" />
          </label>
          <label>
            Отчество
            <input type="text" placeholder="Отчество" />
          </label>
          <label>
            Телефон
            <input type="number" placeholder="Телефон" />
          </label>
          <div className={styles.ShowArrayContetnMBtn}>
            <button onClick={() => setModalActiveNewUser(false)}>Отмена</button>
            <button onClick={() => setModalActiveNewUser(false)}>Добавить</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ShowArray;
