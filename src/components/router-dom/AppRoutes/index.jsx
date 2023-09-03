/* eslint-disable react/jsx-no-undef */
import { Navigate, Route, Routes } from 'react-router-dom';

import styles from '../AppRoutes/index.module.scss';
import Main from '../../../pages/main';
import Betting from '../../../pages/betting';
import Billings from '../../../pages/billings';
import Control from '../../../pages/control';

const AppRoutes = () => {
  return (
    <div className={styles.appRouters}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/betting" element={<Betting />} />
        <Route path="/billings" element={<Billings />} />
        <Route path="/control" element={<Control />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
