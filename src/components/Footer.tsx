import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer id="contact" className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        {/* App Teaser Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of people sharing their stories and discovering new perspectives every day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://apps.apple.com/app/velyar/id1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Download for iOS
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.velyar.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Download for Android
            </a>
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
              <li><Link to="/privacy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/80 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/safety" className="text-white/80 hover:text-white transition-colors">Child Safety</Link></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Community Guidelines</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 mt-8 border-t border-white/20">
          <p className="text-white/60">
            © 2024 Unfixedtime UG. All rights reserved. Made with ❤️ for global connection.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 