
import { Youtube } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EpisodesSection = () => {
  const episodes = [
    {
      id: 1,
      title: "The Mystery of Netaji's Disappearance",
      bengaliTitle: "নেতাজির নিখোঁজ হওয়ার রহস্য",
      description: "Unraveling one of India's greatest mysteries - what really happened to Subhas Chandra Bose?",
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      duration: "22:45",
      views: "1.2M",
      category: "Mysteries"
    },
    {
      id: 2,
      title: "The Rise of the Mughal Empire",
      bengaliTitle: "মুঘল সাম্রাজ্যের উত্থান",
      description: "From Babur's conquest to Akbar's golden age - the story of India's greatest empire.",
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
      duration: "28:30",
      views: "890K",
      category: "Empires"
    },
    {
      id: 3,
      title: "The Bengal Famine of 1943",
      bengaliTitle: "১৯৪ৃ সালের বাংলার দুর্ভিক্ষ",
      description: "A tragic chapter in Bengal's history - the man-made famine that shook the nation.",
      thumbnail: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=800&q=80",
      duration: "25:12",
      views: "1.5M",
      category: "Tragedies"
    },
    {
      id: 4,
      title: "The Battle of Plassey Untold",
      bengaliTitle: "পলাশীর যুদ্ধের অজানা কাহিনী",
      description: "Beyond the textbooks - the real story of the battle that changed India forever.",
      thumbnail: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
      duration: "31:08",
      views: "720K",
      category: "Battles"
    },
    {
      id: 5,
      title: "Lost Civilizations of the Indus Valley",
      bengaliTitle: "সিন্ধু সভ্যতার হারানো রহস্য",
      description: "Exploring the ancient cities of Harappa and Mohenjo-daro and their mysterious decline.",
      thumbnail: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80",
      duration: "26:45",
      views: "980K",
      category: "Ancient"
    },
    {
      id: 6,
      title: "The Legends of Shivaji Maharaj",
      bengaliTitle: "শিবাজী মহারাজের বীরগাথা",
      description: "The inspiring tales of the Maratha warrior king who challenged the mighty Mughals.",
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      duration: "29:20",
      views: "1.1M",
      category: "Heroes"
    }
  ];

  const categories = ["All", "Mysteries", "Empires", "Battles", "Heroes", "Ancient", "Tragedies"];

  return (
    <section id="episodes" className="py-20 bg-parchment">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bengali text-4xl md:text-5xl font-bold text-manuscript mb-6">
            সাম্প্রতিক পর্ব
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon to-gold mx-auto mb-6"></div>
          <h3 className="font-playfair text-2xl md:text-3xl text-manuscript/80 mb-8">
            Latest Episodes
          </h3>
          <p className="font-inter text-lg text-manuscript/70 max-w-2xl mx-auto">
            Discover our most recent historical narratives, each carefully researched and presented to bring the past to life.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={`${
                category === "All" 
                  ? "bg-maroon text-parchment hover:bg-manuscript" 
                  : "border-manuscript text-manuscript hover:bg-manuscript hover:text-parchment"
              } transition-all duration-300`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Episodes grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {episodes.map((episode) => (
            <Card key={episode.id} className="historical-card overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={episode.thumbnail} 
                  alt={episode.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Youtube className="w-12 h-12 text-white" />
                </div>
                <div className="absolute top-3 left-3 bg-maroon text-parchment px-2 py-1 rounded text-sm font-medium">
                  {episode.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {episode.duration}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h4 className="font-bengali text-xl font-bold text-manuscript mb-2 line-clamp-2">
                  {episode.bengaliTitle}
                </h4>
                <h5 className="font-playfair text-lg font-semibold text-manuscript/80 mb-3 line-clamp-2">
                  {episode.title}
                </h5>
                <p className="font-inter text-manuscript/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {episode.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-manuscript/60">{episode.views} views</span>
                  <Button 
                    size="sm" 
                    className="bg-maroon hover:bg-manuscript text-parchment"
                    onClick={() => window.open('https://www.youtube.com/@itihasergolpo', '_blank')}
                  >
                    Watch Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button 
            size="lg"
            className="bg-maroon hover:bg-manuscript text-parchment px-8 py-4 text-lg"
            onClick={() => window.open('https://www.youtube.com/@itihasergolpo', '_blank')}
          >
            <Youtube className="w-5 h-5 mr-2" />
            View All Episodes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;
