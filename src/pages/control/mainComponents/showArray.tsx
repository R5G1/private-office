import { useState } from 'react';
import { IArray } from '../../../components/type/type';
import createContentCopy from './createContentCopy';
import FilterArray from './filterArray';
import styles from './style/showArray.module.scss';
import Modal from '../../../components/modal/modal';

function ShowArray({ post }: any) {
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
              <p>userId</p>
            </th>
            <th>
              <p>id</p>
            </th>
            <th>
              <p>Название</p>
            </th>
            <th>
              <p>комментарии</p>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            onClick={() => {
              setModalActive(false);
            }}
          >
            <td className={styles.ShowArrayContetnUserId}>
              <FilterArray array={createContentCopy(post, 'userId')} useFilter={false} />
            </td>
            <td>
              <FilterArray array={createContentCopy(post, 'id')} />
            </td>
            <td>
              <FilterArray array={createContentCopy(post, 'title')} />
            </td>
            <td>
              <FilterArray array={createContentCopy(post, 'body')} />
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
