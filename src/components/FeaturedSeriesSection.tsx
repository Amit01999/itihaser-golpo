
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedSeriesSection = () => {
  const series = [
    {
      id: 1,
      title: "Bengal Renaissance Chronicles",
      bengaliTitle: "বাংলার নবজাগরণের ইতিহাস",
      description: "The intellectual and cultural awakening of Bengal in the 19th century",
      episodes: 8,
      totalViews: "2.5M",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80",
      status: "Complete"
    },
    {
      id: 2,
      title: "Forgotten Warriors of India",
      bengaliTitle: "ভারতের ভুলে যাওয়া বীরযোদ্ধারা",
      description: "Untold stories of brave warriors who defended their motherland",
      episodes: 12,
      totalViews: "3.8M",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      status: "Ongoing"
    },
    {
      id: 3,
      title: "Mysteries of Ancient India",
      bengaliTitle: "প্রাচীন ভারতের রহস্য",
      description: "Exploring the unexplained phenomena and lost civilizations",
      episodes: 6,
      totalViews: "1.9M",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80",
      status: "Complete"
    },
    {
      id: 4,
      title: "The Great Bengal Famines",
      bengaliTitle: "বাংলার মহাদুর্ভিক্ষ",
      description: "A detailed look at the tragic famines that devastated Bengal",
      episodes: 4,
      totalViews: "2.1M",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
      status: "Complete"
    }
  ];

  return (
    <section id="series" className="py-20 bg-gradient-to-br from-sepia/20 to-parchment">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bengali text-4xl md:text-5xl font-bold text-manuscript mb-6">
            বিশেষ সিরিজ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon to-gold mx-auto mb-6"></div>
          <h3 className="font-playfair text-2xl md:text-3xl text-manuscript/80 mb-8">
            Featured Series
          </h3>
          <p className="font-inter text-lg text-manuscript/70 max-w-2xl mx-auto">
            Dive deep into comprehensive series that explore major historical themes and periods in detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
          {series.map((item) => (
            <Card key={item.id} className="historical-card overflow-hidden group cursor-pointer">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === 'Complete' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gold text-manuscript'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-bengali text-2xl font-bold mb-2">
                    {item.bengaliTitle}
                  </h4>
                  <h5 className="font-playfair text-lg font-semibold opacity-90">
                    {item.title}
                  </h5>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="font-inter text-manuscript/80 leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-maroon">{item.episodes}</div>
                      <div className="text-sm text-manuscript/60">Episodes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-maroon">{item.totalViews}</div>
                      <div className="text-sm text-manuscript/60">Total Views</div>
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-maroon hover:bg-manuscript text-parchment transition-all duration-300"
                  onClick={() => window.open('https://www.youtube.com/@itihasergolpo', '_blank')}
                >
                  Watch Series
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="historical-card p-8 max-w-3xl mx-auto">
            <h4 className="font-playfair text-2xl font-bold text-manuscript mb-4">
              Upcoming Series
            </h4>
            <p className="font-inter text-lg text-manuscript/80 leading-relaxed mb-6">
              We're constantly working on new series to bring you more captivating historical narratives. 
              Subscribe to our channel to be the first to know when new series are released!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-sepia px-4 py-2 rounded-full text-manuscript font-medium">
                Mughal Dynasty Deep Dive
              </span>
              <span className="bg-sepia px-4 py-2 rounded-full text-manuscript font-medium">
                Freedom Fighters Untold
              </span>
              <span className="bg-sepia px-4 py-2 rounded-full text-manuscript font-medium">
                Ancient Trade Routes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSeriesSection;
