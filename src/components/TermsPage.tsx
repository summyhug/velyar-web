import Header from './Header';
import Footer from './Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-primary/70">
                Last updated: [Date]
              </p>
            </div>

            {/* Content */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10">
              <div className="prose prose-lg max-w-none text-primary">
                <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: Terms of service content will be added here. This should include sections on:
                  user responsibilities, acceptable use, intellectual property, disclaimers, 
                  limitation of liability, termination, and governing law.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">2. User Responsibilities</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: Content about user responsibilities, community guidelines, 
                  and acceptable behavior on the platform.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">3. Intellectual Property</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: Information about who owns what content, licensing terms, 
                  and user-generated content rights.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">4. Privacy and Data</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: How user data is collected, used, and protected. 
                  Reference to Privacy Policy for detailed information.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">5. Disclaimers</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: Legal disclaimers about service availability, 
                  accuracy of content, and third-party services.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">6. Limitation of Liability</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: Legal limitations on Velyar's liability for damages 
                  arising from use of the service.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">7. Termination</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: Terms for account termination, both by user and by Velyar, 
                  and what happens to user data upon termination.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">8. Changes to Terms</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: How and when terms may be updated, and how users 
                  will be notified of changes.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">9. Governing Law</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: Which jurisdiction's laws govern these terms and 
                  where disputes will be resolved.]
                </p>

                <h2 className="text-2xl font-bold text-primary mb-4">10. Contact Information</h2>
                <p className="text-primary/70 mb-6">
                  [Placeholder: How to contact Velyar with questions about these terms.]
                </p>

                <div className="bg-accent/10 rounded-lg p-6 mt-8">
                  <p className="text-primary/80 text-sm">
                    <strong>Note:</strong> This is a placeholder Terms of Service. Please replace with your actual terms 
                    from the velyar-global-stories project or have them reviewed by legal counsel.
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

export default TermsPage;
