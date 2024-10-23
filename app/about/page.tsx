import { Award, Clock, Heart, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[40vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070"
          alt="Elegant event setup"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white text-center">
          Our Story
        </h1>
      </section>

      <section className="py-16 md:py-24 container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Since 2010, Elegance Events has been transforming ordinary spaces into
            extraordinary experiences. What started as a small collection of
            carefully curated pieces has grown into one of the most comprehensive
            and prestigious event decor rental services.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 mb-2 mx-auto text-primary" />
                <div className="font-bold text-2xl md:text-3xl">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-muted-foreground mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const stats = [
  {
    label: "Years Experience",
    value: "13+",
    icon: Clock,
  },
  {
    label: "Events Decorated",
    value: "2000+",
    icon: Heart,
  },
  {
    label: "Rental Items",
    value: "500+",
    icon: Award,
  },
  {
    label: "Team Members",
    value: "25+",
    icon: Users,
  },
];

const team = [
  {
    name: "Sarah Anderson",
    role: "Creative Director",
    bio: "With 15 years in event design, Sarah brings creative vision and attention to detail to every project.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    bio: "Michael ensures smooth logistics and timely delivery for all our rental services.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070",
  },
  {
    name: "Emma Thompson",
    role: "Client Relations",
    bio: "Emma works closely with clients to bring their vision to life and exceed expectations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061",
  },
];