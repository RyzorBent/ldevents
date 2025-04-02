'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useCart } from '@/hooks/use-cart';

export default function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const { toast } = useToast();
  const router = useRouter();
  const cart = useCart();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cart.items,
          customerName: formData.name,
          customerEmail: formData.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to process order');
      }

      // Confirmation email sending logic should be in the /api/orders endpoint

      toast({
        title: 'Order placed successfully!',
        description: 'You will receive a confirmation email shortly.',
      });

      cart.clearCart();
      router.push('/');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to process your order. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='space-y-2'>
        <label htmlFor='name' className='text-sm font-medium'>
          Full Name
        </label>
        <Input
          id='name'
          required
          value={formData.name}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
        />
      </div>
      <div className='space-y-2'>
        <label htmlFor='email' className='text-sm font-medium'>
          Email
        </label>
        <Input
          id='email'
          type='email'
          required
          value={formData.email}
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
        />
      </div>
      <Button type='submit' className='w-full' disabled={isSubmitting}>
        {isSubmitting ? 'Processing...' : 'Complete Order'}
      </Button>
    </form>
  );
}
