
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface DoNotSellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DoNotSellModal = ({ isOpen, onClose }: DoNotSellModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-heading font-semibold">
              Do Not Sell My Personal Information
            </DialogTitle>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 font-body">
          <div>
            <h3 className="text-lg font-heading font-semibold mb-3">Your Rights Under CCPA</h3>
            <p className="text-muted-foreground mb-4">
              Under the California Consumer Privacy Act (CCPA), California residents have the right to opt-out 
              of the sale of their personal information. This right applies to the sharing of personal information 
              with third parties for monetary or other valuable consideration.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-3">What Information May Be Shared</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Contact information (email, phone, address)</li>
              <li>Professional information and investment interests</li>
              <li>Website usage and interaction data</li>
              <li>Newsletter and communication preferences</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-3">How to Submit Your Request</h3>
            <p className="text-muted-foreground mb-4">
              To opt-out of the sale of your personal information, you can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Submit a request through this form</li>
              <li>Email us directly at privacy@internationalowl.com</li>
              <li>Call us at +33 7 44 98 87 89</li>
            </ul>
          </div>

          <div className="bg-accent p-4 rounded-lg">
            <h4 className="font-heading font-semibold mb-2">Request Form</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Additional Details (Optional)</label>
                <textarea 
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Any additional information about your request"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-3">What Happens Next</h3>
            <p className="text-muted-foreground mb-4">
              Once we receive your request, we will:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Verify your identity to protect your privacy</li>
              <li>Process your opt-out request</li>
              <li>Update our systems to prevent future sales of your information</li>
              <li>Send you a confirmation of the completed request</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Important:</strong> For questions about this process or our privacy practices, 
              contact us at privacy@internationalowl.com. We will process your request within 10 business days.
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button 
              className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
            >
              Submit Request
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DoNotSellModal;
