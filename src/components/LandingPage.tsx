import Header from './Header';
import Hero from './Hero';
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
      <CommunityValues />
      <Footer />
    </div>
  );
};

export default LandingPage; 