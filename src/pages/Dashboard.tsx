import Header from '../components/Header';
import TabNavigation from '../components/TabNavigation';
import Footer from '../components/Footer';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="pt-16">
        <TabNavigation />
      </div>
      <Footer />
    </div>
  );
}
