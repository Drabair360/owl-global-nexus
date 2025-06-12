
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface DoNotSellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DoNotSellModal = ({ isOpen, onClose }: DoNotSellModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading">Do Not Sell My Personal Information</DialogTitle>
          <DialogDescription className="font-body">
            We respect your privacy choices. You can opt out of the sale of your personal information.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground font-body">
            To exercise your right to opt out, please contact us at:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm font-subtitle">
              Email: privacy@owlinternational.com
            </p>
            <p className="text-sm font-subtitle">
              Phone: +33 7 44 98 87 89
            </p>
          </div>
          <div className="flex justify-end space-x-2">
            <Button onClick={onClose} className="font-subtitle">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DoNotSellModal;
