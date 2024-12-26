import { Route, Routes } from 'react-router-dom';
import { PNotFound } from './PNotFound';
import PMain from './PMain';

//import LogoutPage from './LogoutPage';
//import LogoutPage from './LogoutPage';
//<Route path="logout" element={<LogoutPage />} />
export const usePagesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PMain />} />
      <Route path="*" element={<PNotFound />} />
    </Routes>
  );
};
