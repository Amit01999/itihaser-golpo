
import { Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-manuscript text-parchment py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-maroon rounded-lg flex items-center justify-center">
                <span className="text-parchment font-bengali font-bold text-2xl">ই</span>
              </div>
              <div>
                <h3 className="font-bengali text-2xl font-bold">ইতিহাসের গল্প</h3>
                <p className="font-playfair text-sm text-parchment/70">Itihaser Golpo</p>
              </div>
            </div>
            <p className="font-inter text-parchment/80 leading-relaxed mb-6 max-w-md">
              Bringing history to life through immersive storytelling. Join us on a journey through time 
              as we explore the fascinating stories that shaped our world.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@itihasergolpo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-maroon rounded-lg flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#home" className="block text-parchment/80 hover:text-gold transition-colors">Home</a>
              <a href="#about" className="block text-parchment/80 hover:text-gold transition-colors">About</a>
              <a href="#episodes" className="block text-parchment/80 hover:text-gold transition-colors">Episodes</a>
              <a href="#series" className="block text-parchment/80 hover:text-gold transition-colors">Series</a>
              <a href="#contact" className="block text-parchment/80 hover:text-gold transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-parchment/60 text-sm">Email</p>
                <p className="text-parchment/80">itihasergolpo@gmail.com</p>
              </div>
              <div>
                <p className="text-parchment/60 text-sm">YouTube</p>
                <a 
                  href="https://www.youtube.com/@itihasergolpo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-parchment/80 hover:text-gold transition-colors"
                >
                  @itihasergolpo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-parchment/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-parchment/60 text-sm mb-4 md:mb-0">
            © 2024 Itihaser Golpo. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-parchment/60 hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-parchment/60 hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="text-parchment/60 hover:text-gold transition-colors">Cookie Policy</a>
          </div>
        </div>

        {/* Bengali Quote */}
        <div className="mt-8 text-center">
          <p className="font-bengali text-lg text-parchment/70 italic">
            "ইতিহাস হলো আমাদের পরিচয়ের আয়না"
          </p>
          <p className="font-playfair text-sm text-parchment/60 mt-2">
            "History is the mirror of our identity"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
