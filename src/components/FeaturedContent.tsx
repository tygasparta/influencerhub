import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Play, BookOpen, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const FeaturedContent = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [ecocashNumber, setEcocashNumber] = React.useState('');

  const featuredItems = [
    {
      id: 1,
      title: "Influence Hub: Women Empowerment Series",
      description: "Access premium video content focused on women's empowerment and leadership development.",
      price: "$5.99/year",
      type: "Video Series",
      rating: 4.9,
      icon: <Play className="h-6 w-6" />,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "Educational Resources",
      description: "Comprehensive English and Shona language learning materials and courses.",
      price: "$4.99/month",
      type: "Course",
      rating: 4.8,
      icon: <BookOpen className="h-6 w-6" />,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: 3,
      title: "Women's Magazine Collection",
      description: "Download the latest issues of our empowerment magazine featuring inspiring stories.",
      price: "$1.99/issue",
      type: "Magazine",
      rating: 4.7,
      icon: <Download className="h-6 w-6" />,
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full floating-animation" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full floating-animation" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Featured Content</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our premium educational content designed to inspire and empower your journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="card-hover border-0 shadow-lg bg-card/80 backdrop-blur-sm fade-in-up" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white mb-4 floating-animation`}>
                  {item.icon}
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bounce-gentle">{item.type}</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 pulse-glow" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">{item.price}</div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="btn-primary hover:scale-105 transition-transform duration-300" onClick={() => setSelectedProduct(item)}>
                        Get Access
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>How to Access This Material</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-2">
                        <p>
                          To access <span className="font-semibold">{item.title}</span>, please pay using <span className="font-semibold">EcoCash</span> to <span className="font-semibold">0789148212</span> or <span className="font-semibold">OneMoney</span> to <span className="font-semibold">0718340867</span>.
                        </p>
                        <p>
                          After payment, please send your Proof of Payment (POP) to WhatsApp:
                        </p>
                        <a
                          href={`https://wa.me/263718340867?text=${encodeURIComponent(`Hi, I have paid for ${item.title}. Here is my POP.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-green-500 hover:bg-green-600 text-white mt-2">
                            Contact on WhatsApp
                          </Button>
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
