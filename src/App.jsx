import { Route, Routes } from 'react-router-dom';
import Navbar from 'module/Navbar/Navbar';
import HomePage from 'Page/HomePage';
import TweetsPage from 'Page/TweetsPage';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />}/>
      </Routes>
    </>
  );
};
