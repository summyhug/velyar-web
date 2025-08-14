import Header from './Header';
import Footer from './Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10">
            <h1 className="text-3xl font-bold text-primary mb-8">Terms of Service</h1>
            
            <div className="space-y-8 text-primary/80 leading-relaxed">
              <section>
                <h3 className="font-semibold text-primary mb-3 text-lg">1. Acceptance of Terms</h3>
                <p>By accessing and using Velyar, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-3 text-lg">2. Content Guidelines</h3>
                <p>Users are responsible for the content they upload. Prohibited content includes but is not limited to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Illegal, harmful, or offensive material</li>
                  <li>Content violating intellectual property rights</li>
                  <li>Spam, misleading, or deceptive content</li>
                  <li>Personal information of others without consent</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-3 text-lg">3. Age Requirements and Restrictions</h3>
                <p>You must be at least 13 years old to use this service. Users under 16 may have restricted access to certain features to comply with data protection laws.</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Users must provide accurate date of birth information</li>
                  <li>Age verification is required for account creation</li>
                  <li>Restricted accounts have limited feature access for safety</li>
                  <li>False age information may result in account suspension</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-3 text-lg">4. User Conduct</h3>
                <p>Users must not engage in activities that could harm the platform or other users, including but not limited to hacking, harassment, or misuse of the platform.</p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-3 text-lg">5. Content Reporting and Community Moderation</h3>
                <p>We employ a community-based moderation system where users can report content that violates our guidelines. Content may be automatically hidden after multiple reports.</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Users can report inappropriate, harmful, or illegal content</li>
                  <li>Reports are reviewed within 24 hours by our moderation team</li>
                  <li>Multiple reports may result in automatic content hiding</li>
                  <li>False or malicious reports may result in account restrictions</li>
                  <li>Anonymous reporting system protects user privacy</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-3 text-lg">6. Appeal Process</h3>
                <p>Content creators have the right to appeal moderation decisions within 30 days of action being taken.</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Appeals are reviewed by human moderators within 48 hours</li>
                  <li>Only one appeal per piece of content is allowed</li>
                  <li>Detailed explanations must be provided for appeal consideration</li>
                  <li>Successful appeals result in immediate content restoration</li>
                  <li>Appeal decisions are final and binding</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-3 text-lg">7. Privacy and Data Protection</h3>
                <p>We are committed to protecting your privacy in accordance with GDPR and other applicable data protection laws. Please refer to our Privacy Policy for detailed information.</p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-3 text-lg">8. Automated Content Moderation</h3>
                <p>We employ automated systems to detect and prevent the upload of prohibited content before it appears on our platform.</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Automated filtering for text and visual content</li>
                  <li>Real-time content analysis during upload</li>
                  <li>Machine learning systems continuously improve detection</li>
                  <li>Automated actions are logged for transparency</li>
                  <li>Users can appeal automated decisions</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-3 text-lg">9. Transparency and Compliance</h3>
                <p>We maintain transparency in our moderation practices and publish regular transparency reports.</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Quarterly transparency reports on moderation actions</li>
                  <li>Clear documentation of community guidelines</li>
                  <li>Regular updates to moderation policies</li>
                  <li>Compliance with Digital Services Act (DSA) requirements</li>
                  <li>User access to their moderation history</li>
                </ul>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-3 text-lg">10. Limitation of Liability</h3>
                <p>Velyar is provided "as is" without warranties. We shall not be liable for any damages arising from the use of our platform.</p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-3 text-lg">11. Changes to Terms</h3>
                <p>We reserve the right to modify these terms at any time. Users will be notified of significant changes.</p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-3 text-lg">12. Contact Information</h3>
                <p>For questions about these terms, please contact us through our support channels.</p>
              </section>

              <div className="text-sm text-primary/60 pt-6 border-t border-primary/20">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsPage;
