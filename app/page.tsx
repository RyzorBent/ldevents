import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098"
        >
          <source
            src="https://player.vimeo.com/external/373824416.sd.mp4?s=147e19f0a20a241c40f5f6e02f0eff0f8a4f3663&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Events Into
            <span className="block mt-2">Unforgettable Experiences</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Premium event decor rentals for weddings, corporate events, and special occasions
          </p>
          <Link href="/catalogue">
            <Button size="lg" className="text-lg px-8">
              Browse Collection <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-200 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: "Luxury Furniture",
    description: "Elegant seating and tables for sophisticated events",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070",
  },
  {
    title: "Premium Lighting",
    description: "Create the perfect ambiance with our lighting solutions",
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=2070",
  },
  {
    title: "Table Settings",
    description: "Complete table settings with premium cutlery and linens",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?q=80&w=2070",
  },
];