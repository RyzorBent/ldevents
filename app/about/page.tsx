import { Award, Clock, Heart, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className='min-h-screen'>
      <section className='relative h-[40vh] flex items-center justify-center'>
        <img
          src='https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070'
          alt='Elegant event setup'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/60' />
        <h1 className='relative z-10 text-4xl md:text-5xl font-bold text-white text-center'>
          About Us
        </h1>
      </section>

      <section className='py-16 md:py-24 container'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <p className='text-lg text-muted-foreground mb-8'>
            LDE Events is a premier event management company specializing in{' '}
            <strong class='text-foreground'>corporate events</strong>. With over{' '}
            <strong class='text-foreground'>13 years of experience</strong>, we have successfully
            executed high-profile events for top organizations, ensuring seamless planning,
            exceptional execution, and memorable experiences. Whether it's{' '}
            <strong class='text-foreground'>
              awards galas, executive retreats, conferences, or wellness events
            </strong>
            , we bring innovation, professionalism, and attention to detail to every occasion.
          </p>

          <h2 className='text-3xl font-bold my-8'>Our Mission</h2>
          <p className='text-lg text-muted-foreground'>
            Our mission is to deliver{' '}
            <strong class='text-foreground'>excellence in corporate event planning</strong> by
            combining creativity, precision, and passion. We are committed to transforming every
            corporate gathering into an{' '}
            <strong class='text-foreground'>unforgettable experience</strong>, exceeding
            expectations through meticulous planning and exceptional service.
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 my-16'>
          {stats.map((stat) => (
            <div key={stat.label} className='text-center'>
              <stat.icon className='h-6 w-6 mb-2 mx-auto text-primary' />
              <div className='font-bold text-2xl md:text-3xl'>{stat.value}</div>
              <div className='text-sm text-muted-foreground'>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const stats = [
  {
    label: 'Years Experience',
    value: '13+',
    icon: Clock,
  },
  {
    label: 'Events Decorated',
    value: '60+',
    icon: Heart,
  },
  {
    label: 'Rental Items',
    value: '500+',
    icon: Award,
  },
  {
    label: 'Team Members',
    value: '8+',
    icon: Users,
  },
];

const team = [
  {
    name: 'Sarah Anderson',
    role: 'Creative Director',
    bio: 'With 15 years in event design, Sarah brings creative vision and attention to detail to every project.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070',
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager',
    bio: 'Michael ensures smooth logistics and timely delivery for all our rental services.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
  },
  {
    name: 'Emma Thompson',
    role: 'Client Relations',
    bio: 'Emma works closely with clients to bring their vision to life and exceed expectations.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061',
  },
];
