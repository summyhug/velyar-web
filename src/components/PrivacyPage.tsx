import Header from './Header';
import Footer from './Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-primary/70">
                Last updated: [Date]
              </p>
            </div>

            {/* Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="prose prose-lg max-w-none text-primary">
                <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: Types of information collected from users, including:
                  personal information, usage data, device information, and content shared.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: How collected information is used, including:
                  service provision, communication, analytics, and improvement of the platform.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">3. Information Sharing</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: When and how information might be shared with:
                  other users, service providers, legal authorities, and business partners.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: Security measures taken to protect user data,
                  including encryption, access controls, and data breach procedures.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">5. Data Retention</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: How long different types of data are retained,
                  and what happens to data when accounts are deleted.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: User rights regarding their data, including:
                  access, correction, deletion, portability, and opt-out options.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">7. Cookies and Tracking</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: Use of cookies, tracking technologies, and
                  how users can control these technologies.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">8. Third-Party Services</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: Third-party services used (analytics, hosting, etc.)
                  and their privacy practices.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">9. International Data Transfers</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: How data may be transferred internationally
                  and compliance with relevant regulations.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">10. Children's Privacy</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: Special considerations for users under 13 or 16,
                  depending on applicable laws.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">11. Changes to This Policy</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: How and when the privacy policy may be updated,
                  and how users will be notified of changes.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">12. Contact Us</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: How to contact Velyar with privacy-related questions,
                  concerns, or requests.]
                </p>

                <div className="bg-accent/10 rounded-lg p-6 mt-8">
                  <p className="text-primary/80 text-sm">
                    <strong>Note:</strong> This is a placeholder Privacy Policy. Please replace with your actual policy 
                    from the velyar-global-stories project or have it reviewed by legal counsel to ensure compliance 
                    with applicable privacy laws (GDPR, CCPA, etc.).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
