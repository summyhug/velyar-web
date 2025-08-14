const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-primary/70 leading-relaxed">
              Have questions about Velyar? Want to join our community? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
                         {/* Contact Form */}
             <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10">
               <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
               
                              <form 
                 className="space-y-6"
                 onSubmit={(e) => {
                   e.preventDefault();
                   const formData = new FormData(e.currentTarget);
                   const firstName = formData.get('firstName');
                   const lastName = formData.get('lastName');
                   const email = formData.get('email');
                   const subject = formData.get('subject');
                   const message = formData.get('message');
                   
                   const mailtoLink = `mailto:info@velyar.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(
                     `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
                   )}`;
                   
                   window.location.href = mailtoLink;
                 }}
               >
                                 <div className="grid md:grid-cols-2 gap-4">
                  <div>
                                         <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                       First Name
                     </label>
                                          <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white/50"
                        placeholder="Your first name"
                        required
                      />
                  </div>
                  <div>
                                         <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                       Last Name
                     </label>
                                          <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white/50"
                        placeholder="Your last name"
                        required
                      />
                  </div>
                </div>
                
                                 <div>
                   <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                     Email Address
                   </label>
                                      <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white/50"
                      placeholder="your.email@example.com"
                      required
                    />
                 </div>
                
                                 <div>
                   <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                     Subject
                   </label>
                                      <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white/50"
                      required
                    >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                     Message
                   </label>
                                      <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white/50 resize-none"
                      placeholder="Tell us what's on your mind..."
                      required
                    ></textarea>
                 </div>
                
                                 <button
                   type="submit"
                   className="w-full btn-primary text-lg py-4"
                 >
                   Send Message
                 </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Mission Statement */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-primary/70 leading-relaxed">
                  We're building a world where people can connect across differences, 
                  learn from each other, and discover that we have more in common than we think. 
                  Every conversation is a step toward a more understanding world.
                </p>
              </div>

                             {/* Contact Methods */}
               <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
                 <h3 className="text-2xl font-bold text-primary mb-6">Other Ways to Connect</h3>
                 
                 <div className="space-y-4">
                   <div className="flex items-center">
                     <span className="text-2xl mr-4">📧</span>
                     <div>
                       <p className="font-medium text-primary">Email</p>
                       <p className="text-primary/70">hello@velyar.com</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center">
                     <span className="text-2xl mr-4">🌐</span>
                     <div>
                       <p className="font-medium text-primary">Social Media</p>
                       <p className="text-primary/70">Follow us for updates and community stories</p>
                     </div>
                   </div>
                   
                   <div className="flex items-center">
                     <span className="text-2xl mr-4">📱</span>
                     <div>
                       <p className="font-medium text-primary">App Support</p>
                       <p className="text-primary/70">Get help with the Velyar app</p>
                     </div>
                   </div>
                 </div>
               </div>

                               {/* Account Deletion Link */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary/10">
                  <div className="text-center">
                    <p className="text-primary/70 mb-3 text-sm">
                      Need to delete your account? 
                    </p>
                    <a 
                      href="/account-deletion"
                      className="text-accent hover:text-accent/80 font-medium transition-colors text-sm underline"
                    >
                      Request account deletion →
                    </a>
                  </div>
                </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-2">We'll Get Back to You</h3>
                <p className="text-white/90">
                  We typically respond within 24 hours. Your message matters to us, 
                  and we're excited to hear from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
