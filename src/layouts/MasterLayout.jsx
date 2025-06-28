import Header from '../components/Header';
import Footer from '../components/Footer';
import FixedCallButton from '../components/FixedCallButton';
import FixedWhatsAppButton from '../components/FixedWhatsAppButton';
import '../assets/globals.css';

import { Outlet } from 'react-router-dom';

function MasterLayout() {
  return (
    <div dir="rtl" className="font-sans bg-[#f0f8ff] text-[#003366] relative">
      <Header />
      <h2 className="md:text-4xl bg-cyan-200 p-3 sticky top-0 z-50 text-center font-bold">
        فني مكيفات بالرياض - 0566789423
      </h2>

      <main className="max-w-6xl mx-auto p-6">
        <Outlet />
      </main>

      <Footer />
      <FixedCallButton />
      <FixedWhatsAppButton />
    </div>
  );
}

export default MasterLayout;
