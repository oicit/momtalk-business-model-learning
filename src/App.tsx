import { Routes, Route } from 'react-router-dom';
import Portal from './pages/Portal';
import GarageSalePage from './pages/GarageSalePage';
import ChickFilAPage from './pages/ChickFilAPage';
import LemonadeStandPage from './pages/LemonadeStandPage';
import Business101Page from './pages/Business101Page';
import PetShopPage from './pages/PetShopPage';
import YouTubeCreatorPage from './pages/YouTubeCreatorPage';
import CookieBakeryPage from './pages/CookieBakeryPage';
import PiggyBankPage from './pages/PiggyBankPage';
import StockMarketPage from './pages/StockMarketPage';
import IndexFundsPage from './pages/IndexFundsPage';
import DiversificationPage from './pages/DiversificationPage';
import LongGamePage from './pages/LongGamePage';
import DividendsPage from './pages/DividendsPage';
import BullsBearsPage from './pages/BullsBearsPage';
import BondsPage from './pages/BondsPage';
import FirstPortfolioPage from './pages/FirstPortfolioPage';
import GreatCompanyPage from './pages/GreatCompanyPage';
import CompanyDetectivePage from './pages/CompanyDetectivePage';
import IsItGrowingPage from './pages/IsItGrowingPage';
import DoesItMakeMoneyPage from './pages/DoesItMakeMoneyPage';
import MoatTestPage from './pages/MoatTestPage';
import CheapOrExpensivePage from './pages/CheapOrExpensivePage';
import SpotTheTrendPage from './pages/SpotTheTrendPage';
import StockDetectivePage from './pages/StockDetectivePage';
import McDonaldsPage from './pages/McDonaldsPage';
import InventorsLabPage from './pages/InventorsLabPage';
import DealMakerPage from './pages/DealMakerPage';
import CharityLabPage from './pages/CharityLabPage';
import RiskPoolIslandPage from './pages/RiskPoolIslandPage';
import TaxTownPage from './pages/TaxTownPage';
import SubscriptionSensePage from './pages/SubscriptionSensePage';
import RobloxPage from './pages/RobloxPage';
import CostcoPage from './pages/CostcoPage';
import AmazonPage from './pages/AmazonPage';
import LegoPage from './pages/LegoPage';
import DisneyPage from './pages/DisneyPage';
import FarmStandPage from './pages/FarmStandPage';
import SnowDayHustlePage from './pages/SnowDayHustlePage';
import MarketingMountainPage from './pages/MarketingMountainPage';
import SurveyMasterPage from './pages/SurveyMasterPage';
import EtsyShopPage from './pages/EtsyShopPage';
import PizzaPlacePage from './pages/PizzaPlacePage';
import StartupPitchPage from './pages/StartupPitchPage';
import AppMakerPage from './pages/AppMakerPage';
import WordBattlePage from './pages/WordBattlePage';
import StemLabPage from './pages/StemLabPage';
import CardsPage from './pages/CardsPage';
import CertificatePage from './pages/CertificatePage';
import PracticePage from './pages/PracticePage';
import MissionPrintPage from './pages/MissionPrintPage';
import AuthPage from './pages/AuthPage';
import KidsDevPage from './pages/dev/KidsDevPage';
import LessonPreviewPage from './pages/dev/LessonPreviewPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portal />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/garage-sale" element={<GarageSalePage />} />
      <Route path="/chick-fil-a" element={<ChickFilAPage />} />
      <Route path="/lemonade-stand" element={<LemonadeStandPage />} />
      <Route path="/business-101" element={<Business101Page />} />
      <Route path="/pet-shop" element={<PetShopPage />} />
      <Route path="/youtube-creator" element={<YouTubeCreatorPage />} />
      <Route path="/cookie-bakery" element={<CookieBakeryPage />} />
      <Route path="/piggy-bank" element={<PiggyBankPage />} />
      <Route path="/stock-market" element={<StockMarketPage />} />
      <Route path="/index-funds" element={<IndexFundsPage />} />
      <Route path="/diversification" element={<DiversificationPage />} />
      <Route path="/long-game" element={<LongGamePage />} />
      <Route path="/dividends" element={<DividendsPage />} />
      <Route path="/bulls-bears" element={<BullsBearsPage />} />
      <Route path="/bonds" element={<BondsPage />} />
      <Route path="/first-portfolio" element={<FirstPortfolioPage />} />
      <Route path="/great-company" element={<GreatCompanyPage />} />
      <Route path="/company-detective" element={<CompanyDetectivePage />} />
      <Route path="/is-it-growing" element={<IsItGrowingPage />} />
      <Route path="/does-it-make-money" element={<DoesItMakeMoneyPage />} />
      <Route path="/moat-test" element={<MoatTestPage />} />
      <Route path="/cheap-or-expensive" element={<CheapOrExpensivePage />} />
      <Route path="/spot-the-trend" element={<SpotTheTrendPage />} />
      <Route path="/stock-detective" element={<StockDetectivePage />} />
      <Route path="/mcdonalds" element={<McDonaldsPage />} />
      <Route path="/inventors-lab" element={<InventorsLabPage />} />
      <Route path="/deal-maker" element={<DealMakerPage />} />
      <Route path="/charity-lab" element={<CharityLabPage />} />
      <Route path="/risk-pool-island" element={<RiskPoolIslandPage />} />
      <Route path="/tax-town" element={<TaxTownPage />} />
      <Route path="/subscription-sense" element={<SubscriptionSensePage />} />
      <Route path="/roblox" element={<RobloxPage />} />
      <Route path="/costco" element={<CostcoPage />} />
      <Route path="/amazon" element={<AmazonPage />} />
      <Route path="/lego" element={<LegoPage />} />
      <Route path="/disney" element={<DisneyPage />} />
      <Route path="/farm-stand" element={<FarmStandPage />} />
      <Route path="/snow-day-hustle" element={<SnowDayHustlePage />} />
      <Route path="/marketing-mountain" element={<MarketingMountainPage />} />
      <Route path="/survey-master" element={<SurveyMasterPage />} />
      <Route path="/etsy-shop" element={<EtsyShopPage />} />
      <Route path="/pizza-place" element={<PizzaPlacePage />} />
      <Route path="/startup-pitch" element={<StartupPitchPage />} />
      <Route path="/app-maker" element={<AppMakerPage />} />
      <Route path="/word-battle" element={<WordBattlePage />} />
      <Route path="/stem-lab" element={<StemLabPage />} />
      <Route path="/cards" element={<CardsPage />} />
      <Route path="/certificate" element={<CertificatePage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/practice/print/:missionId" element={<MissionPrintPage />} />
      <Route path="/dev/kids" element={<KidsDevPage />} />
      <Route path="/dev/lesson/:slug" element={<LessonPreviewPage />} />
    </Routes>
  );
}
