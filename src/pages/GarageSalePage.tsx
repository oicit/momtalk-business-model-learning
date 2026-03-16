import Header from '../components/Header';
import Footer from '../components/Footer';
import GarageSale from '../modules/GarageSale';

export default function GarageSalePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: 1 }}>
        <GarageSale />
      </div>
      <Footer />
    </div>
  );
}
