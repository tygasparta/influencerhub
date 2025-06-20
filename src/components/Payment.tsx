import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, CreditCard, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Payment = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const paymentMethods = [
    { id: 'visa', name: 'Visa', image: '/visa.png' },
    { id: 'ecocash', name: 'EcoCash', image: '/eco.png' },
    { id: 'onemoney', name: 'OneMoney', image: '/onemoney.jpg' },
  ];

  const products = [
    {
      id: 'influence-hub',
      title: 'Influence Hub: Women Empowerment',
      description: 'Access to exclusive women empowerment videos',
      price: 5.99,
      period: 'year',
      type: 'subscription'
    },
    {
      id: 'journalist',
      title: 'Journalist Section',
      description: 'Daily articles on current affairs and social issues',
      price: 0.10,
      period: 'article',
      type: 'pay-per-article'
    },
    {
      id: 'education-monthly',
      title: 'Educational Content - Monthly',
      description: 'English and Shona language resources',
      price: 4.99,
      period: 'month',
      type: 'subscription'
    },
    {
      id: 'education-semiannual',
      title: 'Educational Content - 6 Months',
      description: 'English and Shona language resources',
      price: 5.99,
      period: '6 months',
      type: 'subscription'
    },
    {
      id: 'education-annual',
      title: 'Educational Content - Annual',
      description: 'English and Shona language resources',
      price: 7.99,
      period: 'year',
      type: 'subscription'
    },
    {
      id: 'magazine',
      title: 'Influence Hub Women\'s Magazine',
      description: 'Downloadable magazine issues',
      price: 1.99,
      period: 'issue',
      type: 'pay-per-issue'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </div>
      <h1 className="text-3xl font-bold mb-8 text-center">Payment Options</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Payment Methods */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Select Payment Method</h2>
          <div className="grid grid-cols-1 gap-4">
            {paymentMethods.map((method) => (
              <Card key={method.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={method.image}
                      alt={method.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{method.name}</h3>
                      <p className="text-sm text-gray-500">Secure payment processing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Available Products</h2>
          <div className="grid grid-cols-1 gap-4">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {product.title}
                    <Badge variant="secondary">
                      ${product.price.toFixed(2)}/{product.period}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" onClick={() => setSelectedProduct(product)}>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>How to Access This Material</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-2">
                        <p>
                          To access <span className="font-semibold">{product.title}</span>, please pay via <span className="font-semibold">EcoCash</span> or <span className="font-semibold">OneMoney</span> and send your Proof of Payment (POP) to WhatsApp.
                        </p>
                        <a
                          href={`https://wa.me/263718340867?text=${encodeURIComponent(`Hi, I have paid for ${product.title}. Here is my POP.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                            Contact on WhatsApp
                          </Button>
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Cart Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span>Total</span>
                <span>$0.00</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg">
              <CreditCard className="mr-2 h-4 w-4" />
              Proceed to Payment
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Payment; 