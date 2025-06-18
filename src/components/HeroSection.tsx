import { FacebookIcon, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden manuscript-bg"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-gold rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-maroon rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-sepia rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="font-bengali text-5xl md:text-7xl lg:text-8xl font-bold text-manuscript mb-4 leading-tight">
              ইতিহাসের গল্প
            </h1>
            <div className="flex items-center justify-center mb-10">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent w-36"></div>
              <div className="w-3 h-3 bg-maroon rounded-full mx-4 shadow-lg"></div>
              <div className="h-px bg-gradient-to-r from-amber-600 via-amber-400 to-transparent w-36"></div>
            </div>
          </div>

          <div className="animate-slide-up">
            <h2 className="font-playfair text-2xl md:text-4xl lg:text-5xl text-manuscript/90 mb-8 leading-relaxed">
              Discover the Stories Time Forgot
            </h2>

            <p className="font-inter text-lg md:text-xl text-manuscript/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Journey through the pages of history with us. From legendary
              battles to forgotten tales, from cultural mysteries to heroic
              sagas - every story deserves to be told, every moment deserves to
              be remembered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-maroon hover:bg-manuscript text-parchment px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
                onClick={() =>
                  window.open(
                    'https://www.youtube.com/@itihasergolpo',
                    '_blank'
                  )
                }
              >
                <Youtube className="w-6 h-6 mr-3" />
                Watch on YouTube
              </Button>

              <Button
                size="lg"
                className="group border-2 border-amber-600 bg-transparent text-amber-700 hover:bg-amber-600 hover:text-white px-10 py-5 text-lg font-medium transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl rounded-full"
                onClick={() =>
                  window.open(
                    'https://www.facebook.com/itihasergolpo',
                    '_blank'
                  )
                }
              >
                <FacebookIcon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                Follow on Facebook
              </Button>
            </div>
          </div>

          <div className="mt-16 animate-fade-in">
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-6 md:space-y-0">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-maroon">
                  106K+
                </div>
                <div className="text-sm text-manuscript/60 font-medium">
                  Subscribers
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-sepia"></div>
              <div className="block md:hidden w-12 h-px bg-sepia"></div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-maroon">
                  208+
                </div>
                <div className="text-sm text-manuscript/60 font-medium">
                  Stories Told
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-sepia"></div>
              <div className="block md:hidden w-12 h-px bg-sepia"></div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-maroon">
                  354K+
                </div>
                <div className="text-sm text-manuscript/60 font-medium">
                  Views
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-sepia"></div>
              <div className="block md:hidden w-12 h-px bg-sepia"></div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-maroon">
                  579K+
                </div>
                <div className="text-sm text-manuscript/60 font-medium">
                  FB Followers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
