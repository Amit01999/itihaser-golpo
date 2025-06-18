
import { useState } from 'react';
import { Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-parchment/95 backdrop-blur-sm border-b border-sepia shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-maroon rounded-lg flex items-center justify-center">
              <span className="text-parchment font-bengali font-bold text-lg">ই</span>
            </div>
            <div>
              <h1 className="font-bengali text-xl font-bold text-manuscript">ইতিহাসের গল্প</h1>
              <p className="font-playfair text-sm text-manuscript/70">Itihaser Golpo</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="story-link text-manuscript font-medium hover:text-maroon transition-colors">Home</a>
            <a href="#about" className="story-link text-manuscript font-medium hover:text-maroon transition-colors">About</a>
            <a href="#episodes" className="story-link text-manuscript font-medium hover:text-maroon transition-colors">Episodes</a>
            <a href="#series" className="story-link text-manuscript font-medium hover:text-maroon transition-colors">Series</a>
            <a href="#contact" className="story-link text-manuscript font-medium hover:text-maroon transition-colors">Contact</a>
          </nav>

          <Button 
            className="hidden md:flex bg-maroon hover:bg-manuscript text-parchment"
            onClick={() => window.open('https://www.youtube.com/@itihasergolpo', '_blank')}
          >
            <Youtube className="w-4 h-4 mr-2" />
            Subscribe
          </Button>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-manuscript transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-manuscript mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-manuscript mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-sepia animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-manuscript font-medium hover:text-maroon transition-colors">Home</a>
              <a href="#about" className="text-manuscript font-medium hover:text-maroon transition-colors">About</a>
              <a href="#episodes" className="text-manuscript font-medium hover:text-maroon transition-colors">Episodes</a>
              <a href="#series" className="text-manuscript font-medium hover:text-maroon transition-colors">Series</a>
              <a href="#contact" className="text-manuscript font-medium hover:text-maroon transition-colors">Contact</a>
              <Button 
                className="bg-maroon hover:bg-manuscript text-parchment w-fit"
                onClick={() => window.open('https://www.youtube.com/@itihasergolpo', '_blank')}
              >
                <Youtube className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
