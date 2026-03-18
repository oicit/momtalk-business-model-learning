import { Routes, Route } from 'react-router-dom';
import Portal from './pages/Portal';
import GarageSalePage from './pages/GarageSalePage';
import ChickFilAPage from './pages/ChickFilAPage';
import AuthPage from './pages/AuthPage';
import AuthGuard from './components/AuthGuard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portal />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/garage-sale" element={<AuthGuard><GarageSalePage /></AuthGuard>} />
      <Route path="/chick-fil-a" element={<AuthGuard><ChickFilAPage /></AuthGuard>} />
    </Routes>
  );
}
