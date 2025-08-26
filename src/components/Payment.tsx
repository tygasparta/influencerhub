import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, CreditCard, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Payment = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [donationAmount, setDonationAmount] = useState<string>('5.00');
  const [unlockedProducts, setUnlockedProducts] = useState<string[]>([]);
  const renderedButtons = useRef<Record<string, boolean>>({});

  const products = [
    {
      id: 'influence-hub',
      title: 'Influence Hub: Women Empowerment',
      description: 'Access to exclusive women empowerment videos',
      price: 5.99,
      period: 'year',
      type: 'subscription',
      accessUrl: '/influence' // route or URL where user can access content
    },
    {
      id: 'journalist',
      title: 'Journalist Section',
      description: 'Daily articles on current affairs and social issues',
      price: 0.10,
      period: 'article',
      type: 'pay-per-article',
      accessUrl: '/article/1'
    },
    {
      id: 'education-monthly',
      title: 'Educational Content - Monthly',
      description: 'English and Shona language resources',
      price: 4.99,
      period: 'month',
      type: 'subscription',
      accessUrl: '/lessons'
    },
    {
      id: 'education-semiannual',
      title: 'Educational Content - 6 Months',
      description: 'English and Shona language resources',
      price: 5.99,
      period: '6 months',
      type: 'subscription',
      accessUrl: '/lessons'
    },
    {
      id: 'education-annual',
      title: 'Educational Content - Annual',
      description: 'English and Shona language resources',
      price: 7.99,
      period: 'year',
      type: 'subscription',
      accessUrl: '/lessons'
    },
    {
      id: 'magazine',
      title: 'Influence Hub Women\'s Magazine',
      description: 'Downloadable magazine issues',
      price: 1.99,
      period: 'issue',
      type: 'pay-per-issue',
      accessUrl: '/mv1.jpg'
    }
  ];

  // PayPal client ID should be provided via environment variable: VITE_PAYPAL_CLIENT_ID
  const PAYPAL_CLIENT_ID = (import.meta.env && (import.meta.env.VITE_PAYPAL_CLIENT_ID as string)) || '';

  // Load existing unlocked products from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('unlockedProducts');
      if (stored) setUnlockedProducts(JSON.parse(stored));
    } catch (e) {
      // ignore
    }
  }, []);

  useEffect(() => {
    // If no client id, don't try to load SDK
    if (!PAYPAL_CLIENT_ID) {
      setPaypalLoaded(false);
      return;
    }

    const id = 'paypal-sdk';
    if (document.getElementById(id)) {
      setPaypalLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = id;
    script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&components=buttons&currency=USD`;
    script.async = true;
    script.onload = () => setPaypalLoaded(true);
    script.onerror = () => setPaypalLoaded(false);
    document.body.appendChild(script);
  }, [PAYPAL_CLIENT_ID]);

  useEffect(() => {
    if (!paypalLoaded) return;

    // @ts-ignore
    const paypal = (window as any).paypal;
    if (!paypal || !paypal.Buttons) return;

    // Render donation button (re-renders when donationAmount changes because effect depends on donationAmount)
    const donateContainer = 'paypal-donate-button';
    if (!renderedButtons.current[donateContainer]) {
      try {
        paypal.Buttons({
          style: { layout: 'vertical', label: 'donate', color: 'gold' },
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{ amount: { value: parseFloat(donationAmount || '0').toFixed(2) }, description: 'Donation' }]
            });
          },
          onApprove: (data: any, actions: any) => actions.order.capture().then((details: any) => {
            // save donation record
            savePurchaseRecord('donation', details);
            alert(`Thanks for your donation, ${details.payer?.name?.given_name || 'friend'}!`);
          }),
          onError: (err: any) => {
            console.error('PayPal donation error', err);
            alert('Donation failed. Please try again.');
          }
        }).render(`#${donateContainer}`);

        renderedButtons.current[donateContainer] = true;
      } catch (err) {
        console.error('Failed to render PayPal donation button', err);
      }
    }

    // Render product buttons
    products.forEach((product) => {
      const containerId = `paypal-button-container-${product.id}`;
      if (renderedButtons.current[containerId]) return;
      const el = document.getElementById(containerId);
      if (!el) return;

      try {
        paypal.Buttons({
          style: { layout: 'vertical', color: 'gold', shape: 'rect', label: 'pay' },
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{ amount: { value: product.price.toFixed(2) }, description: product.title }]
            });
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              // persist purchase details and unlock product
              savePurchaseRecord(product.id, details);
              unlockProduct(product.id);
              // show confirmation with a direct access link if available
              const url = product.accessUrl || '/';
              if (url) {
                if (product.id === 'magazine') {
                  // open magazine in new tab
                  window.open(url, '_blank');
                } else {
                  // navigate user to access route
                  const go = window.confirm(`${product.title} unlocked. Open content now?`);
                  if (go) window.location.href = url;
                }
              } else {
                alert(`Payment completed. ${product.title} unlocked.`);
              }
            });
          },
          onError: (err: any) => {
            console.error('PayPal button error', err);
            alert('Payment failed. Please try again.');
          }
        }).render(`#${containerId}`);

        renderedButtons.current[containerId] = true;
      } catch (err) {
        console.error('Failed to render PayPal Buttons for', product.id, err);
      }
    });
  }, [paypalLoaded, donationAmount]);

  const unlockProduct = (productId: string) => {
    setUnlockedProducts((prev) => {
      if (prev.includes(productId)) return prev;
      const next = [...prev, productId];
      try { localStorage.setItem('unlockedProducts', JSON.stringify(next)); } catch (e) { }
      return next;
    });
  };

  // Save purchase records (id -> details) to localStorage. In production verify on server.
  const savePurchaseRecord = (key: string, details: any) => {
    try {
      const stored = localStorage.getItem('purchaseRecords');
      const records = stored ? JSON.parse(stored) : {};
      records[key] = { details, time: new Date().toISOString() };
      localStorage.setItem('purchaseRecords', JSON.stringify(records));
    } catch (e) {
      console.warn('Could not save purchase record', e);
    }
  };

  const isUnlocked = (productId: string) => unlockedProducts.includes(productId);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to="/" className="text-blue-600 hover:underline">&larr; Back to Home</Link>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center">Payment & Donations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Donation */}
        <div className="space-y-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Support the Project (Donation)</CardTitle>
              <CardDescription>Make a one-time donation using PayPal (cards accepted including Visa).</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <input
                  type="number"
                  step="0.01"
                  min="0.5"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  aria-label="Donation amount"
                />
                <p className="text-sm text-gray-500">Tip: You can pay via Visa by selecting card at checkout.</p>

                {!PAYPAL_CLIENT_ID ? (
                  <div className="p-4 bg-yellow-50 border-l-4 border-amber-400 rounded">
                    <p className="text-sm">PayPal is not configured. Add your PayPal Client ID to <code className="font-mono">VITE_PAYPAL_CLIENT_ID</code> in a <code className="font-mono">.env</code> file at the project root and restart the dev server. Use a Sandbox Client ID for testing.</p>
                  </div>
                ) : (
                  <div id="paypal-donate-button" />
                )}

              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => {
                if (!PAYPAL_CLIENT_ID) {
                  alert('PayPal is not configured. Please add VITE_PAYPAL_CLIENT_ID to .env');
                } else {
                  const el = document.getElementById('paypal-donate-button');
                  if (!el) {
                    alert('Payment system not ready. Please wait a moment and try again.');
                  }
                }
              }}>
                Donate
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Right: Products */}
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
                <CardFooter className="flex flex-col space-y-2">
                  {isUnlocked(product.id) ? (
                    <div className="flex items-center justify-between w-full">
                      <a href={product.accessUrl || '/'} className="flex items-center space-x-2 text-green-600 hover:underline" target={product.id === 'magazine' ? '_blank' : '_self'} rel="noreferrer">
                        <Download className="h-4 w-4" />
                        <span>Download / Access</span>
                      </a>
                      <span className="text-sm font-medium">Unlocked</span>
                    </div>
                  ) : (
                    <>
                      {!PAYPAL_CLIENT_ID ? (
                        <div className="p-4 bg-yellow-50 border-l-4 border-amber-400 rounded">
                          <p className="text-sm">PayPal not configured. Add <code className="font-mono">VITE_PAYPAL_CLIENT_ID</code> to .env to enable purchases.</p>
                        </div>
                      ) : (
                        <>
                          <div id={`paypal-button-container-${product.id}`} />
                          <div className="w-full">
                            <Button className="w-full mt-2" onClick={() => setSelectedProduct(product)}>
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Buy with PayPal (Cards incl. Visa)
                            </Button>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">Tip: Choose Visa/card option during PayPal checkout to pay by Visa directly.</p>
                        </>
                      )}
                    </>
                  )}
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