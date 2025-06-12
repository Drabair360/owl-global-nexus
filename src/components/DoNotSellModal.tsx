
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface DoNotSellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DoNotSellModal = ({ isOpen, onClose }: DoNotSellModalProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Opt-out Request Submitted",
        description: "We'll process your request within 30 days and send confirmation to your email.",
      });
      setEmail('');
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Do Not Sell My Personal Information</DialogTitle>
          <DialogDescription className="font-body text-base">
            Exercise your privacy rights under applicable data protection laws.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-subtitle font-semibold mb-2">Your Rights</h4>
            <p className="text-sm text-muted-foreground font-body mb-3">
              You have the right to opt out of the sale or sharing of your personal information for advertising purposes.
            </p>
            <ul className="text-sm text-muted-foreground font-body space-y-1">
              <li>• We'll stop selling your data to third parties</li>
              <li>• Your request will be processed within 30 days</li>
              <li>• You'll receive email confirmation</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="opt-out-email" className="block text-sm font-subtitle font-medium mb-2">
                Email Address
              </label>
              <Input
                id="opt-out-email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1 font-body">
                We'll use this email to confirm your opt-out request
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
              <h4 className="font-subtitle font-semibold mb-2">Contact Information</h4>
              <div className="space-y-1 text-sm font-body">
                <p><strong>Email:</strong> privacy@owlinternational.com</p>
                <p><strong>Phone:</strong> +33 7 44 98 87 89</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                type="submit" 
                disabled={!email || isSubmitting}
                className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 font-subtitle"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Opt-Out Request'}
              </Button>
              <Button type="button" variant="outline" onClick={onClose} className="font-subtitle">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DoNotSellModal;
