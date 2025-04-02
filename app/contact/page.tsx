'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Phone, Instagram } from 'lucide-react';

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: 'Message sent!',
        description: "We'll get back to you as soon as possible.",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen'>
      <section className='relative h-[40vh] flex items-center justify-center'>
        <img
          src='https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069'
          alt='Contact us'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/60' />
        <h1 className='relative z-10 text-4xl md:text-5xl font-bold text-white text-center'>
          Get in Touch
        </h1>
      </section>

      <section className='py-16 md:py-24'>
        <div className='container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-3xl font-bold mb-8'>Contact Information</h2>
              <div className='space-y-6'>
                {contactInfo.map((item) => (
                  <div key={item.label} className='flex items-start gap-4'>
                    <div className='p-3 rounded-lg bg-primary/10'>
                      <item.icon className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h3 className='font-medium mb-1'>{item.label}</h3>
                      <p className='text-muted-foreground'>{item.value}</p>
                    </div>
                  </div>
                ))}

                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-lg bg-primary/10'>
                    <Instagram className='h-6 w-6 text-primary' />
                  </div>
                  <div>
                    <h3 className='font-medium mb-1'>Instagram</h3>
                    <p className='text-muted-foreground'>@lde_events_and_hire</p>
                    <a
                      href='https://instagram.com/lde_events_and_hire'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-2 inline-block'
                    >
                      <Button variant='outline' size='sm' className='flex items-center gap-2'>
                        <Instagram className='h-4 w-4' />
                        DM us on Instagram
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <div className='mt-12'>
                <h3 className='text-xl font-semibold mb-4'>Business Hours</h3>
                <div className='space-y-2 text-muted-foreground'>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: Closed</p>
                  <p>Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className='text-3xl font-bold mb-8'>Send us a Message</h2>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <label htmlFor='name' className='text-sm font-medium'>
                      Name
                    </label>
                    <Input id='name' required />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='email' className='text-sm font-medium'>
                      Email
                    </label>
                    <Input id='email' type='email' required />
                  </div>
                </div>
                <div className='space-y-2'>
                  <label htmlFor='subject' className='text-sm font-medium'>
                    Subject
                  </label>
                  <Input id='subject' required />
                </div>
                <div className='space-y-2'>
                  <label htmlFor='message' className='text-sm font-medium'>
                    Message
                  </label>
                  <Textarea id='message' required className='min-h-[150px] resize-none' />
                </div>
                <Button type='submit' className='w-full' disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Furrow Rd, Pretoria',
  },
];
