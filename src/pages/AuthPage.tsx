import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KidCodeEntry from '../components/KidCodeEntry';

export default function AuthPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [success, setSuccess] = useState(false);

  // Where to go after auth — default to portal
  const redirect = searchParams.get('redirect') || '/';

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => navigate(redirect), 1500);
      return () => clearTimeout(timer);
    }
  }, [success, navigate, redirect]);

  if (success) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 64, marginBottom: 12 }}>🎉</div>
            <h2 style={{ color: '#2D7B5F', fontSize: 24 }}>You're in!</h2>
            <p style={{ color: '#5E8C7F', fontWeight: 600 }}>Loading your lessons...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <KidCodeEntry onSuccess={() => setSuccess(true)} />
      </div>
      <Footer />
    </div>
  );
}
