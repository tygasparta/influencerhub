import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Play, BookOpen, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const FeaturedContent = () => {
  const [selectedProduct, setSelectedProduct] = React.useState<any>(null);

  const featuredItems = [
    {
      id: 1,
      slug: 'influence-hub',
      title: "Influence Hub: Women Empowerment Series",
      description: "Access premium video content focused on women's empowerment and leadership development.",
      price: 5.99,
      priceLabel: "$5.99/year",
      type: "Video Series",
      rating: 4.9,
      icon: <Play className="h-6 w-6" />,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      slug: 'education-resources',
      title: "Educational Resources",
      description: "Comprehensive English and Shona language learning materials and courses.",
      price: 4.99,
      priceLabel: "$4.99/month",
      type: "Course",
      rating: 4.8,
      icon: <BookOpen className="h-6 w-6" />,
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: 3,
      slug: 'magazine',
      title: "Women's Magazine Collection",
      description: "Download the latest issues of our empowerment magazine featuring inspiring stories.",
      price: 1.99,
      priceLabel: "$1.99/issue",
      type: "Magazine",
      rating: 4.7,
      icon: <Download className="h-6 w-6" />,
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  // Helper: load PayPal SDK script once
  const loadPayPalSdk = (clientId: string) => {
    const id = 'paypal-sdk';
    if (document.getElementById(id)) return Promise.resolve(true);
    return new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.id = id;
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&components=buttons&currency=USD`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('PayPal SDK failed to load'));
      document.body.appendChild(script);
    });
  };

  // When dialog opens (selectedProduct set), render PayPal button inside the dialog container
  React.useEffect(() => {
    if (!selectedProduct) return;

    const clientId = (import.meta.env && (import.meta.env.VITE_PAYPAL_CLIENT_ID as string)) || '';
    const containerId = `paypal-featured-${selectedProduct.slug}`;

    if (!clientId) {
      // nothing to render without client id
      return;
    }

    let mounted = true;

    loadPayPalSdk(clientId)
      .then(() => {
        if (!mounted) return;
        // @ts-ignore
        const paypal = (window as any).paypal;
        if (!paypal || !paypal.Buttons) return;

        try {
          // clear any previous render
          const el = document.getElementById(containerId);
          if (el) el.innerHTML = '';

          paypal.Buttons({
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [{ amount: { value: selectedProduct.price.toFixed(2) }, description: selectedProduct.title }]
              });
            },
            onApprove: (data: any, actions: any) => {
              return actions.order.capture().then((details: any) => {
                alert(`Payment complete. Thank you, ${details.payer?.name?.given_name || 'friend'}! Please send POP to WhatsApp if required.`);
              });
            },
            onError: (err: any) => {
              console.error('PayPal error', err);
              alert('Payment failed. Please try again.');
            }
          }).render(`#${containerId}`);
        } catch (err) {
          console.error('Failed to render PayPal button for featured item', err);
        }
      })
      .catch((err) => {
        console.warn('Could not load PayPal SDK for featured content', err);
      });

    return () => { mounted = false; };
  }, [selectedProduct]);

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
                  <div className="text-2xl font-bold text-primary">{item.priceLabel}</div>
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
                          To access <span className="font-semibold">{item.title}</span>, you can pay securely with PayPal using the button below. Cards (Visa/Mastercard) are supported through PayPal.
                        </p>

                        { (import.meta.env && (import.meta.env.VITE_PAYPAL_CLIENT_ID as string)) ? (
                          <div id={`paypal-featured-${item.slug}`} />
                        ) : (
                          <div className="p-3 bg-yellow-50 border-l-4 border-amber-400 rounded">
                            <p className="text-sm">PayPal is not configured. Add <code className="font-mono">VITE_PAYPAL_CLIENT_ID</code> to a <code className="font-mono">.env</code> file at the project root to enable payments.</p>
                          </div>
                        )}

                        <p>
                          After payment, if required, please send your Proof of Payment (POP) to WhatsApp:
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
