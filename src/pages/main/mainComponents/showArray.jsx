import { useState } from 'react';
import { IArray } from '../../../components/type/type';
import createContent from './createContent';
import FilterArray from './filterArray';
import styles from './style/showArray.module.scss';
import Modal from '../../../components/modal/modal';

function ShowArray({ post }) {
  const [modalActive, setModalActive] = useState(false);
  const [string, setString] = useState();
  // console.log(toString(string));
  function handleClick() {}
  return (
    <div>
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
          <tr
            onClick={() => {
              setModalActive(false);
            }}
          >
            {/* <td className={styles.ShowArrayContetnUserId}>
              <FilterArray array={createContent(post, 'userId')} useFilter={false} />
            </td> */}
            <td>
              <FilterArray array={createContent(post, 'town')} />
            </td>
            <td>
              <FilterArray array={createContent(post, 'leadType')} />
            </td>
            <td>
              <FilterArray array={createContent(post, 'registeredFrom')} />
            </td>
            <td>
              <FilterArray array={createContent(post, 'registeredTo')} />
            </td>
            <td>
              <FilterArray array={createContent(post, 'priority')} />
            </td>
            <td>
              <FilterArray array={createContent(post, 'rate')} />
            </td>
          </tr>
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
