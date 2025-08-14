import Header from './Header';
import Footer from './Footer';

const AccountDeletionPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <span className="text-4xl mr-4">🗑️</span>
                <h1 className="text-4xl md:text-5xl font-bold text-red-800">
                  Delete Your Velyar Account
                </h1>
              </div>
              <p className="text-xl text-primary/70 leading-relaxed">
                We respect your right to control your data. Request permanent deletion of your account and associated information.
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Important Notice */}
              <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-8">
                <div className="flex items-start">
                  <span className="text-2xl mr-4 mt-1">⚠️</span>
                  <div>
                    <h2 className="text-2xl font-bold text-red-800 mb-3">Important Notice</h2>
                    <p className="text-red-700 leading-relaxed">
                      <strong>Account deletion is permanent and cannot be undone.</strong> Once your account is deleted, 
                      all your personal data, conversations, connections, and profile information will be permanently removed 
                      from our systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Steps Section */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10">
                <h2 className="text-3xl font-bold text-primary mb-6">📋 How to Request Account Deletion</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Step-by-Step Process</h3>
                    <ol className="list-decimal list-inside space-y-3 text-blue-700">
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">1.</span>
                        <div>
                          <strong>Click the "Request Account Deletion" button</strong> at the bottom of this page
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">2.</span>
                        <div>
                          <strong>Provide your account information:</strong>
                          <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                            <li>Email address associated with your Velyar account</li>
                            <li>Username (if different from your email)</li>
                            <li>Any additional identifiers you used</li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">3.</span>
                        <div>
                          <strong>Confirm your identity:</strong> We may ask for additional verification to ensure 
                          the request is legitimate and protect your account
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">4.</span>
                        <div>
                          <strong>Wait for processing:</strong> We'll process your request within 30 days and 
                          send you a confirmation email
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Data Details Section */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10">
                <h2 className="text-3xl font-bold text-primary mb-6">📊 What Happens to Your Data</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Data to be Deleted */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                      <span className="mr-2">✅</span>
                      Data That Will Be Deleted
                    </h3>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Your profile information and preferences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>All conversation history and messages</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Connection data and community interactions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>App usage analytics and personal data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Account settings and preferences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Stored media and content you've shared</span>
                      </li>
                    </ul>
                  </div>

                  {/* Data to be Retained */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-yellow-800 mb-4 flex items-center">
                      <span className="mr-2">📋</span>
                      Data That May Be Retained
                    </h3>
                    <ul className="space-y-2 text-yellow-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <div>
                          <strong>Transaction records</strong> (for legal compliance) - 7 years
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <div>
                          <strong>Aggregated, anonymized usage data</strong> (no personal identifiers)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <div>
                          <strong>Security logs</strong> (for fraud prevention) - 2 years
                        </div>
                      </li>
                    </ul>
                    <p className="text-sm text-yellow-600 mt-4 italic">
                      This data is retained for legal compliance and service improvement purposes only.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Section */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10">
                <h2 className="text-3xl font-bold text-primary mb-6">⏱️ Processing Timeline</h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Immediate Response</h4>
                        <p className="text-blue-700">We'll send you a confirmation email within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Verification Process</h4>
                        <p className="text-blue-700">Identity verification may take 2-5 business days</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                      <div>
                        <h4 className="font-semibold text-blue-800">Data Deletion</h4>
                        <p className="text-blue-700">Complete deletion process within 30 days</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4">✓</div>
                      <div>
                        <h4 className="font-semibold text-green-800">Final Confirmation</h4>
                        <p className="text-green-700">You'll receive a final confirmation email</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10">
                <h2 className="text-3xl font-bold text-primary mb-6">📞 Need Help?</h2>
                <p className="text-primary/70 mb-4 leading-relaxed">
                  If you have questions about the account deletion process or need assistance, 
                  please contact our support team.
                </p>
                                 <div className="grid md:grid-cols-2 gap-4">
                   <div className="bg-gray-50 rounded-lg p-4">
                     <h4 className="font-semibold text-primary mb-2">Account Deletion</h4>
                     <p className="text-primary/70">info@velyar.com</p>
                     <p className="text-sm text-primary/60">For account deletion requests</p>
                   </div>
                   <div className="bg-gray-50 rounded-lg p-4">
                     <h4 className="font-semibold text-primary mb-2">General Support</h4>
                     <p className="text-primary/70">info@velyar.com</p>
                     <p className="text-sm text-primary/60">For general questions</p>
                   </div>
                 </div>
              </div>

              {/* Action Button */}
              <div className="text-center">
                                 <button 
                   onClick={() => {
                     const mailtoLink = `mailto:info@velyar.com?subject=${encodeURIComponent('Velyar Account Deletion Request')}&body=${encodeURIComponent(
                     `Dear Velyar Support Team,\n\nI would like to request permanent deletion of my Velyar account.\n\nAccount Information:\n- Email address associated with my account: [Please provide your email]\n- Username (if different from email): [If applicable]\n- Date of account creation (if known): [If applicable]\n\nI understand that:\n- This action is permanent and cannot be undone\n- All my personal data, conversations, and connections will be deleted\n- Some transaction records may be retained for legal compliance (7 years)\n- Security logs may be retained for fraud prevention (2 years)\n- The deletion process may take up to 30 days\n- I will receive confirmation emails throughout the process\n\nPlease confirm receipt of this request and provide any additional steps needed for verification.\n\nThank you,\n[Your name]\n[Date: ${new Date().toLocaleDateString()}]`
                     )}`;
                     window.location.href = mailtoLink;
                   }}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg flex items-center justify-center mx-auto"
                >
                  🗑️ Request Account Deletion
                </button>
                <p className="text-sm text-primary/60 mt-4">
                  Clicking this button will open your email client with a pre-filled deletion request
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AccountDeletionPage;
