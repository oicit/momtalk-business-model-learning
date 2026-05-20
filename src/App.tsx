import { Routes, Route } from 'react-router-dom';
import Portal from './pages/Portal';
import GarageSalePage from './pages/GarageSalePage';
import ChickFilAPage from './pages/ChickFilAPage';
import LemonadeStandPage from './pages/LemonadeStandPage';
import Business101Page from './pages/Business101Page';
import PetShopPage from './pages/PetShopPage';
import YouTubeCreatorPage from './pages/YouTubeCreatorPage';
import CookieBakeryPage from './pages/CookieBakeryPage';
import CardsPage from './pages/CardsPage';
import CertificatePage from './pages/CertificatePage';
import PracticePage from './pages/PracticePage';
import MissionPrintPage from './pages/MissionPrintPage';
import AuthPage from './pages/AuthPage';
import KidsDevPage from './pages/dev/KidsDevPage';
import LessonPreviewPage from './pages/dev/LessonPreviewPage';
import AuthGuard from './components/AuthGuard';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portal />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/garage-sale" element={<AuthGuard><GarageSalePage /></AuthGuard>} />
      <Route path="/chick-fil-a" element={<AuthGuard><ChickFilAPage /></AuthGuard>} />
      <Route path="/lemonade-stand" element={<AuthGuard><LemonadeStandPage /></AuthGuard>} />
      <Route path="/business-101" element={<AuthGuard><Business101Page /></AuthGuard>} />
      <Route path="/pet-shop" element={<AuthGuard><PetShopPage /></AuthGuard>} />
      <Route path="/youtube-creator" element={<AuthGuard><YouTubeCreatorPage /></AuthGuard>} />
      <Route path="/cookie-bakery" element={<AuthGuard><CookieBakeryPage /></AuthGuard>} />
      <Route path="/cards" element={<CardsPage />} />
      <Route path="/certificate" element={<CertificatePage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/practice/print/:missionId" element={<MissionPrintPage />} />
      <Route path="/dev/kids" element={<KidsDevPage />} />
      <Route path="/dev/lesson/:slug" element={<LessonPreviewPage />} />
    </Routes>
  );
}
