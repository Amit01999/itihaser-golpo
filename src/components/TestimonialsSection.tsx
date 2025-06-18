
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "রাজু আহমেদ",
      location: "ঢাকা, বাংলাদেশ",
      text: "ইতিহাসের গল্প চ্যানেলটি সত্যিই অসাধারণ! জটিল ইতিহাসকে এত সহজ ও আকর্ষণীয় করে উপস্থাপন করা হয় যে, প্রতিটি পর্ব দেখার পর আরও জানার আগ্রহ বেড়ে যায়।",
      englishText: "Itihaser Golpo is truly exceptional! Complex history is presented so simply and engagingly that after watching each episode, the desire to know more increases.",
      rating: 5
    },
    {
      id: 2,
      name: "প্রিয়া দাস",
      location: "কলকাতা, ভারত",
      text: "আমার ছেলেমেয়েরা এখন ইতিহাস পড়তে অনেক বেশি আগ্রহী হয়েছে। এই চ্যানেলের গল্প বলার ধরন সত্যিই মুগ্ধকর।",
      englishText: "My children are now much more interested in studying history. The storytelling style of this channel is truly captivating.",
      rating: 5
    },
    {
      id: 3,
      name: "তানভীর হাসান",
      location: "চট্টগ্রাম, বাংলাদেশ",
      text: "নেতাজির নিখোঁজ হওয়ার রহস্য নিয়ে যে পর্বটি করেছেন, সেটা দেখে মুগ্ধ হয়েছি। গবেষণার মান অত্যন্ত উচ্চ।",
      englishText: "I was amazed by the episode on the mystery of Netaji's disappearance. The quality of research is extremely high.",
      rating: 5
    },
    {
      id: 4,
      name: "অর্ণব মুখার্জি",
      location: "দুর্গাপুর, ভারত",
      text: "বাংলার নবজাগরণ সিরিজটি সম্পূর্ণ দেখেছি। প্রতিটি ব্যক্তিত্বের জীবনী এত সুন্দরভাবে তুলে ধরা হয়েছে!",
      englishText: "I've watched the complete Bengal Renaissance series. Each personality's biography has been presented so beautifully!",
      rating: 5
    },
    {
      id: 5,
      name: "ফারিহা খান",
      location: "সিলেট, বাংলাদেশ",
      text: "ইতিহাসের প্রতি আমার আগ্রহ জন্মেছে এই চ্যানেল দেখে। প্রতিটি গল্প এত জীবন্ত যে মনে হয় সেই সময়ে গিয়ে পৌঁছেছি।",
      englishText: "My interest in history was born from watching this channel. Each story is so vivid that it feels like I've traveled to that time.",
      rating: 5
    },
    {
      id: 6,
      name: "শুভ্র সেন",
      location: "আগরতলা, ভারত",
      text: "যুদ্ধের ইতিহাস নিয়ে যেসব পর্ব আছে, সেগুলো অসাধারণ। কৌশল ও বীরত্বের গল্পগুলো হৃদয় ছুঁয়ে যায়।",
      englishText: "The episodes on war history are extraordinary. The stories of strategy and valor touch the heart.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-parchment to-sepia/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bengali text-4xl md:text-5xl font-bold text-manuscript mb-6">
            দর্শকদের মতামত
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon to-gold mx-auto mb-6"></div>
          <h3 className="font-playfair text-2xl md:text-3xl text-manuscript/80 mb-8">
            What Our Viewers Say
          </h3>
          <p className="font-inter text-lg text-manuscript/70 max-w-2xl mx-auto">
            Stories from our community of history enthusiasts who journey with us through the corridors of time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="historical-card h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>
                
                <blockquote className="flex-1 mb-6">
                  <p className="font-bengali text-lg text-manuscript leading-relaxed mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-inter text-sm text-manuscript/70 italic">
                    "{testimonial.englishText}"
                  </p>
                </blockquote>
                
                <div className="border-t border-sepia pt-4">
                  <h4 className="font-bengali text-lg font-semibold text-manuscript">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-sm text-manuscript/60">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="historical-card p-8 max-w-2xl mx-auto">
            <h4 className="font-playfair text-2xl font-bold text-manuscript mb-4">
              Join Our Growing Community
            </h4>
            <p className="font-inter text-lg text-manuscript/80 leading-relaxed mb-6">
              Become part of a passionate community of history lovers. Share your thoughts, 
              engage in discussions, and help us uncover more fascinating stories from the past.
            </p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-maroon">50K+</div>
                <div className="text-sm text-manuscript/60">Community Members</div>
              </div>
              <div className="w-px h-12 bg-sepia"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maroon">10K+</div>
                <div className="text-sm text-manuscript/60">Comments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
