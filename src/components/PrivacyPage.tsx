import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h3 className="text-xl font-semibold text-primary mb-3">1. Information We Collect</h3>
              <p className="mb-3">We collect information you provide directly to us, such as:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (name, email, username)</li>
                <li>Profile information (city, country, date of birth)</li>
                <li>Content you upload (videos, comments)</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-primary mb-3">2. How We Use Your Information</h3>
              <p className="mb-3">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Personalize your experience</li>
                <li>Communicate with you</li>
                <li>Ensure platform safety and security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-primary mb-3">3. Your Rights Under GDPR</h3>
              <p className="mb-3">As an EU resident, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Erase your data ("right to be forgotten")</li>
                <li>Restrict processing of your data</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-primary mb-3">4. Data Sharing and Transfers</h3>
              <p>We do not sell your personal data. We may share data with service providers, for legal compliance, or with your consent. International transfers are protected by appropriate safeguards.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-primary mb-3">5. Data Retention</h3>
              <p>We retain your data only as long as necessary for the purposes outlined in this policy or as required by law.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-primary mb-3">6. Security</h3>
              <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-primary mb-3">7. Cookies and Tracking</h3>
              <p>We use essential cookies for functionality and analytics cookies to improve our service. You can manage cookie preferences in your browser settings.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-primary mb-3">8. Contact Us</h3>
              <p>For privacy-related questions or to exercise your rights, please contact our Data Protection Officer through our support channels.</p>
            </section>

            <div className="text-sm text-gray-500 pt-6 border-t border-gray-200">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
