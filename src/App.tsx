import { Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { BookingPage } from '@/pages/BookingPage';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { Toast, useToast } from '@/components/Toast';

function App() {
  const toast = useToast();

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking/:slug" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
      <Toast toast={toast} />
    </div>
  );
}

export default App;
