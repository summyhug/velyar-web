import Header from './Header';
import Footer from './Footer';

const CSAEStandardsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#285A66] mb-6">
              Child Safety & CSAE Standards
            </h1>
            <p className="text-lg text-[#697B85]">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none">
              <p className="text-[#697B85] mb-8 leading-relaxed">
                At Velyar, we have a zero-tolerance policy for child sexual abuse and exploitation (CSAE). 
                Protecting children and ensuring a safe environment for all users is a core principle of our platform.
              </p>

              <h2 className="text-2xl font-bold text-[#285A66] mb-4 mt-8">
                1. Zero-Tolerance Commitment
              </h2>
              
              <ul className="list-disc list-inside text-[#697B85] mb-8 space-y-2">
                <li>Any form of CSAE content is strictly prohibited.</li>
                <li>Accounts found to be creating, sharing, or attempting to share CSAE content will be immediately removed and permanently banned.</li>
                <li>Where appropriate, such cases will be reported to relevant law enforcement authorities.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#285A66] mb-4 mt-8">
                2. Reporting CSAE Content
              </h2>
              
              <p className="text-[#697B85] mb-4 leading-relaxed">
                If you encounter CSAE content on our platform, please report it immediately by:
              </p>
              
              <ul className="list-disc list-inside text-[#697B85] mb-4 space-y-2">
                <li>Using the report function in the app, or</li>
                <li>Contacting us directly at <a href="mailto:info@velyar.com" className="text-[#285A66] hover:underline">info@velyar.com</a></li>
              </ul>
              
              <p className="text-[#697B85] mb-8 leading-relaxed">
                All reports are reviewed with priority. Confirmed CSAE cases are escalated and actioned without delay.
              </p>

              <h2 className="text-2xl font-bold text-[#285A66] mb-4 mt-8">
                3. Moderation & Enforcement
              </h2>
              
              <ul className="list-disc list-inside text-[#697B85] mb-8 space-y-2">
                <li>We use content moderation processes (a mix of automated checks and human review) to detect and prevent CSAE.</li>
                <li>Reported accounts are investigated quickly and removed if they violate these standards.</li>
                <li>We work in accordance with international standards and will cooperate with organizations such as NCMEC (National Center for Missing & Exploited Children) or equivalent bodies where required.</li>
              </ul>

              <h2 className="text-2xl font-bold text-[#285A66] mb-4 mt-8">
                4. No Age Verification at Signup
              </h2>
              
              <p className="text-[#697B85] mb-8 leading-relaxed">
                Currently, Velyar does not require formal age verification. However, our platform is designed for general audiences, 
                and we reserve the right to implement stricter access controls if necessary to enhance child safety.
              </p>

              <h2 className="text-2xl font-bold text-[#285A66] mb-4 mt-8">
                5. Compliance
              </h2>
              
              <p className="text-[#697B85] mb-4 leading-relaxed">
                Our policy aligns with global standards, including but not limited to:
              </p>
              
              <ul className="list-disc list-inside text-[#697B85] mb-8 space-y-2">
                <li>The EU Regulation on Child Sexual Abuse Material</li>
                <li>The U.S. PROTECT Act</li>
                <li>The Apple App Store and Google Play Developer Policies</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CSAEStandardsPage;
