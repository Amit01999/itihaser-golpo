
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-sepia/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-bengali text-4xl md:text-5xl font-bold text-manuscript mb-6">
              আমাদের গল্প
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-maroon to-gold mx-auto mb-6"></div>
            <h3 className="font-playfair text-2xl md:text-3xl text-manuscript/80 mb-8">
              Our Story
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="historical-card p-8">
                <h4 className="font-playfair text-2xl font-bold text-manuscript mb-6">
                  Why Historical Storytelling Matters
                </h4>
                <p className="font-inter text-lg text-manuscript/80 leading-relaxed mb-6">
                  History is not just about dates and events—it's about the human stories that shaped our world. 
                  Every civilization, every culture, every moment in time has tales that deserve to be told and remembered.
                </p>
                <p className="font-inter text-lg text-manuscript/80 leading-relaxed">
                  Through engaging narratives and immersive storytelling, we bring these forgotten tales to life, 
                  making history accessible and exciting for Bengali-speaking audiences worldwide.
                </p>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="historical-card p-8">
                <h4 className="font-playfair text-2xl font-bold text-manuscript mb-6">
                  Our Vision
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-maroon rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-inter text-manuscript/80">
                      Preserve and share historical narratives in an engaging Bengali format
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-maroon rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-inter text-manuscript/80">
                      Make history accessible through immersive storytelling techniques
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-maroon rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-inter text-manuscript/80">
                      Connect past wisdom with present understanding
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-maroon rounded-full mt-3 flex-shrink-0"></div>
                    <p className="font-inter text-manuscript/80">
                      Build a community of history enthusiasts and learners
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <div className="historical-card p-8 max-w-2xl mx-auto">
              <h4 className="font-playfair text-2xl font-bold text-manuscript mb-4">
                Join Our Journey Through Time
              </h4>
              <p className="font-inter text-lg text-manuscript/80 leading-relaxed">
                Every week, we uncover new stories, explore forgotten civilizations, and bring to light 
                the fascinating tales that shaped our world. Subscribe to be part of this incredible journey 
                through the corridors of time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
