import Header from './Header';
import Hero from './Hero';
import AppPreview from './AppPreview';
import HowItWorks from './HowItWorks';
import CommunityConnections from './LiveMissions';
import CommunityValues from './CommunityValues';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <CommunityConnections />
      <AppPreview />
      <CommunityValues />
      <Footer />
    </div>
  );
};

export default LandingPage; 