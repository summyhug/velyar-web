const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'YouTube', icon: '▶️', url: '#' },
    { name: 'TikTok', icon: '🎵', url: '#' }
  ];

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        {/* App Teaser Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of people sharing their stories and discovering new perspectives every day.
          </p>
          
          {/* Mobile Mockup Placeholder */}
          <div className="bg-white/10 rounded-3xl p-8 mb-8 max-w-sm mx-auto">
            <div className="bg-white rounded-2xl p-4 text-primary text-center">
              <div className="text-4xl mb-2">📱</div>
              <p className="font-semibold">Velyar App</p>
              <p className="text-sm opacity-70">Download to start sharing</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-secondary">
              Download for iOS
            </button>
            <button className="btn-secondary">
              Download for Android
            </button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 pt-8 border-t border-white/20">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/assets/velyar_logo_full.svg" 
                alt="Velyar" 
                className="h-8 filter brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Connecting people across cultures through daily video prompts and authentic conversations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="text-2xl hover:opacity-70 transition-opacity"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#app" className="text-white/80 hover:text-white transition-colors">App</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Community Guidelines</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 mt-8 border-t border-white/20">
          <p className="text-white/60">
            © 2024 Velyar. All rights reserved. Made with ❤️ for global connection.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 