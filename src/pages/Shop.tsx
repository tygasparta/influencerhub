import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Download, BookOpen, Video, Users } from 'lucide-react';
import Payment from '@/components/Payment';

const Shop = () => {
  const [showPayment, setShowPayment] = React.useState(false);

  const products = [
    {
      id: 'influence-hub',
      title: 'Influence Hub: Women Empowerment',
      description: 'Access to exclusive women empowerment videos',
      price: 5.99,
      period: 'year',
      type: 'subscription',
      icon: <Video className="h-6 w-6" />
    },
    {
      id: 'journalist',
      title: 'Journalist Section',
      description: 'Daily articles on current affairs and social issues',
      price: 0.10,
      period: 'article',
      type: 'pay-per-article',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 'education-monthly',
      title: 'Educational Content - Monthly',
      description: 'English and Shona language resources',
      price: 4.99,
      period: 'month',
      type: 'subscription',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 'education-semiannual',
      title: 'Educational Content - 6 Months',
      description: 'English and Shona language resources',
      price: 5.99,
      period: '6 months',
      type: 'subscription',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 'education-annual',
      title: 'Educational Content - Annual',
      description: 'English and Shona language resources',
      price: 7.99,
      period: 'year',
      type: 'subscription',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 'magazine',
      title: 'Influence Hub Women\'s Magazine',
      description: 'Downloadable magazine issues',
      price: 1.99,
      period: 'issue',
      type: 'pay-per-issue',
      icon: <Download className="h-6 w-6" />
    }
  ];

  if (showPayment) {
    return <Payment />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shop</h1>
        <Button onClick={() => setShowPayment(true)}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          View Cart
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Products</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="pay-per">Pay Per Item</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    {product.icon}
                    <CardTitle>{product.title}</CardTitle>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">
                      ${product.price.toFixed(2)}/{product.period}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="subscriptions" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter(p => p.type === 'subscription').map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    {product.icon}
                    <CardTitle>{product.title}</CardTitle>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">
                      ${product.price.toFixed(2)}/{product.period}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pay-per" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter(p => p.type.includes('pay-per')).map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    {product.icon}
                    <CardTitle>{product.title}</CardTitle>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">
                      ${product.price.toFixed(2)}/{product.period}
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Shop; 