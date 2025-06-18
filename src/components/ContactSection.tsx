
import { useState } from 'react';
import { Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-sepia/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-bengali text-4xl md:text-5xl font-bold text-manuscript mb-6">
            যোগাযোগ
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon to-gold mx-auto mb-6"></div>
          <h3 className="font-playfair text-2xl md:text-3xl text-manuscript/80 mb-8">
            Contact & Collaborate
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="historical-card">
              <CardContent className="p-8">
                <h4 className="font-playfair text-2xl font-bold text-manuscript mb-6">
                  Send us a Message
                </h4>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-manuscript font-medium mb-2">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-parchment border-sepia focus:border-maroon"
                    />
                  </div>
                  <div>
                    <label className="block text-manuscript font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-parchment border-sepia focus:border-maroon"
                    />
                  </div>
                  <div>
                    <label className="block text-manuscript font-medium mb-2">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-parchment border-sepia focus:border-maroon"
                    />
                  </div>
                  <div>
                    <label className="block text-manuscript font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-parchment border-sepia focus:border-maroon resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-maroon hover:bg-manuscript text-parchment py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up">
            <div className="space-y-8">
              <Card className="historical-card">
                <CardContent className="p-8">
                  <h4 className="font-playfair text-2xl font-bold text-manuscript mb-6">
                    Get in Touch
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-manuscript mb-2">Email</h5>
                      <p className="text-manuscript/70">itihasergolpo@gmail.com</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-manuscript mb-2">YouTube Channel</h5>
                      <a 
                        href="https://www.youtube.com/@itihasergolpo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="story-link text-maroon hover:text-manuscript transition-colors"
                      >
                        @itihasergolpo
                      </a>
                    </div>
                    <div>
                      <h5 className="font-semibold text-manuscript mb-2">Response Time</h5>
                      <p className="text-manuscript/70">We typically respond within 24-48 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="historical-card">
                <CardContent className="p-8">
                  <h4 className="font-playfair text-2xl font-bold text-manuscript mb-6">
                    Collaboration Opportunities
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-maroon rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-manuscript/80">Historical research collaborations</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-maroon rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-manuscript/80">Sponsorship and brand partnerships</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-maroon rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-manuscript/80">Educational institution partnerships</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-maroon rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-manuscript/80">Content creation opportunities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="historical-card">
                <CardContent className="p-8 text-center">
                  <h4 className="font-playfair text-xl font-bold text-manuscript mb-4">
                    Stay Updated
                  </h4>
                  <p className="text-manuscript/70 mb-6">
                    Subscribe to our newsletter for the latest episodes and historical insights.
                  </p>
                  <div className="flex gap-3">
                    <Input 
                      placeholder="Enter your email"
                      className="bg-parchment border-sepia focus:border-maroon"
                    />
                    <Button className="bg-maroon hover:bg-manuscript text-parchment">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
