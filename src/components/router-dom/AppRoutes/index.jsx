/* eslint-disable react/jsx-no-undef */
import { Navigate, Route, Routes } from 'react-router-dom';

import styles from '../AppRoutes/index.module.scss';
import Main from '../../../pages/main';
import Statistics from '../../../pages/statistics';

const AppRoutes = () => {
  return (
    <div className={styles.appRouters}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
