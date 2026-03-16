import { Routes, Route } from 'react-router-dom';
import Portal from './pages/Portal';
import GarageSalePage from './pages/GarageSalePage';
import ChickFilAPage from './pages/ChickFilAPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portal />} />
      <Route path="/garage-sale" element={<GarageSalePage />} />
      <Route path="/chick-fil-a" element={<ChickFilAPage />} />
    </Routes>
  );
}
