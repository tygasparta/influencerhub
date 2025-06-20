import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

interface PaymentSystemProps {
  amount: number;
  onPaymentComplete: (success: boolean) => void;
}

export const PaymentSystem: React.FC<PaymentSystemProps> = ({ amount, onPaymentComplete }) => {
  const [ecocashNumber, setEcocashNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleEcocashPayment = async () => {
    try {
      setIsProcessing(true);
      // TODO: Implement actual EcoCash API integration
      // This is where you would make the API call to the EcoCash payment gateway
      console.log('Processing EcoCash payment for:', ecocashNumber);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      onPaymentComplete(true);
    } catch (error) {
      console.error('Payment failed:', error);
      onPaymentComplete(false);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleOneMoneyPayment = async () => {
    try {
      setIsProcessing(true);
      // TODO: Implement actual OneMoney API integration
      // This is where you would make the API call to the OneMoney payment gateway
      console.log('Processing OneMoney payment');
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      onPaymentComplete(true);
    } catch (error) {
      console.error('Payment failed:', error);
      onPaymentComplete(false);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* EcoCash Payment */}
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="w-full h-24 flex flex-col items-center justify-center"
              variant="outline"
            >
              <span className="text-lg font-semibold">Pay with EcoCash</span>
              <span className="text-sm text-gray-500">0718340867</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>EcoCash Payment</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="ecocash">Your EcoCash Number</Label>
                <Input
                  id="ecocash"
                  placeholder="Enter your EcoCash number"
                  value={ecocashNumber}
                  onChange={(e) => setEcocashNumber(e.target.value)}
                />
              </div>
              <Button 
                className="w-full" 
                onClick={handleEcocashPayment}
                disabled={isProcessing || !ecocashNumber}
              >
                {isProcessing ? 'Processing...' : `Pay $${amount}`}
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* OneMoney Payment */}
        <Dialog>
          <DialogTrigger asChild>
            <Button 
              className="w-full h-24 flex flex-col items-center justify-center"
              variant="outline"
            >
              <span className="text-lg font-semibold">Pay with OneMoney</span>
              <span className="text-sm text-gray-500">0789148212</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>OneMoney Payment</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <p className="text-sm text-gray-500">
                Please use the OneMoney number: 0789148212 to make your payment.
              </p>
              <Button 
                className="w-full" 
                onClick={handleOneMoneyPayment}
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Confirm Payment'}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}; 