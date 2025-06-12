
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Check } from 'lucide-react';

interface DoNotSellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DoNotSellModal = ({ isOpen, onClose }: DoNotSellModalProps) => {
  const [isOptedOut, setIsOptedOut] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptOut = () => {
    if (email.trim()) {
      setIsOptedOut(true);
      setIsSubmitted(true);
      // Here you would typically send the opt-out request to your backend
      console.log('Opt-out request submitted for:', email);
    }
  };

  const handleClose = () => {
    setIsOptedOut(false);
    setEmail('');
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
          <CardTitle className="text-xl font-heading font-semibold">
            Do Not Sell or Share My Personal Information
          </CardTitle>
          <CardDescription className="font-body">
            Exercise your privacy rights under applicable data protection laws
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {!isSubmitted ? (
            <>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground font-body">
                  Under various privacy laws, you have the right to opt out of the sale or sharing 
                  of your personal information. This includes:
                </p>
                
                <ul className="space-y-2 text-sm text-muted-foreground font-body">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>Marketing and advertising data sharing with third parties</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>Data analytics and profiling for commercial purposes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span>Cross-context behavioral advertising</span>
                  </li>
                </ul>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-heading font-semibold mb-2">What We Collect</h4>
                  <p className="text-sm text-muted-foreground font-body">
                    We may collect identifiers, commercial information, internet activity, 
                    and professional information for business purposes, investor relations, 
                    and improving our services.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <label htmlFor="email" className="block text-sm font-heading font-semibold">
                  Email Address (required for verification)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm font-body focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="confirm-opt-out"
                  checked={isOptedOut}
                  onChange={(e) => setIsOptedOut(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="confirm-opt-out" className="text-sm font-body cursor-pointer">
                  I confirm that I want to opt out of the sale or sharing of my personal information. 
                  I understand this may affect my experience with personalized content and services.
                </label>
              </div>

              <div className="flex space-x-3">
                <Button 
                  onClick={handleOptOut}
                  disabled={!isOptedOut || !email.trim()}
                  className="flex-1 font-body"
                >
                  Submit Opt-Out Request
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleClose}
                  className="font-body"
                >
                  Cancel
                </Button>
              </div>

              <p className="text-xs text-muted-foreground font-body">
                For questions about this process or our privacy practices, contact us at 
                privacy@owl-international.com. We will process your request within 15 business days.
              </p>
            </>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              
              <div>
                <h3 className="text-lg font-heading font-semibold mb-2">Request Submitted Successfully</h3>
                <p className="text-muted-foreground font-body">
                  Your opt-out request has been received and will be processed within 15 business days. 
                  You will receive a confirmation email at <strong>{email}</strong>.
                </p>
              </div>
              
              <Button onClick={handleClose} className="w-full font-body">
                Close
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DoNotSellModal;
