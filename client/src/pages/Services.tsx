import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Palette, Crown, Sparkles, Droplets, Wind, ArrowRight } from "lucide-react";
import bannerImage from "@assets/stock_images/hairdresser_styling__a5956d01.jpg";

const services = [
  {
    category: "Haircuts & Styling",
    icon: Scissors,
    items: [
      { name: "Women's Precision Cut", price: "$85+", description: "Tailored haircut with consultation, shampoo, and blowout styling." },
      { name: "Men's Cut", price: "$55+", description: "Classic or modern cuts with attention to detail and finish." },
      { name: "Children's Cut", price: "$45+", description: "Gentle care for our youngest clients (12 and under)." },
      { name: "Bang Trim", price: "$25", description: "Quick touch-up between appointments to keep your look fresh." },
    ],
  },
  {
    category: "Color Services",
    icon: Palette,
    items: [
      { name: "Single Process Color", price: "$120+", description: "Full coverage color or root touch-up with professional-grade products." },
      { name: "Balayage/Ombré", price: "$250+", description: "Hand-painted highlights for a natural, sun-kissed look." },
      { name: "Full Highlights", price: "$200+", description: "Classic foil highlights throughout for dimension and brightness." },
      { name: "Color Correction", price: "Consultation", description: "Expert correction services to achieve your desired shade." },
    ],
  },
  {
    category: "Special Occasion",
    icon: Crown,
    items: [
      { name: "Bridal Styling", price: "$300+", description: "Your perfect look for your special day, includes trial session." },
      { name: "Event Updo", price: "$125+", description: "Elegant updos for galas, proms, and special occasions." },
      { name: "Blowout & Style", price: "$75+", description: "Professional blowout with curling or straightening." },
      { name: "Bridal Party Package", price: "Custom", description: "Special pricing for bridal party groups of 4+." },
    ],
  },
  {
    category: "Treatments",
    icon: Droplets,
    items: [
      { name: "Deep Conditioning", price: "$45+", description: "Intensive moisture treatment for dry or damaged hair." },
      { name: "Keratin Treatment", price: "$350+", description: "Smooth, frizz-free hair for up to 3 months." },
      { name: "Scalp Treatment", price: "$65+", description: "Therapeutic treatment for scalp health and relaxation." },
      { name: "Olaplex Treatment", price: "$55+", description: "Bond-building treatment to strengthen and repair." },
    ],
  },
  {
    category: "Extensions",
    icon: Sparkles,
    items: [
      { name: "Tape-In Extensions", price: "$600+", description: "Natural-looking length and volume with premium hair." },
      { name: "Fusion Extensions", price: "$800+", description: "Seamless, long-lasting extensions for dramatic results." },
      { name: "Extension Maintenance", price: "$150+", description: "Move-up and care for existing extensions." },
      { name: "Extension Removal", price: "$100+", description: "Safe and gentle removal of all extension types." },
    ],
  },
  {
    category: "Texturing",
    icon: Wind,
    items: [
      { name: "Permanent Wave", price: "$175+", description: "Classic perms for lasting curls and volume." },
      { name: "Beach Wave Perm", price: "$200+", description: "Relaxed, effortless waves for everyday style." },
      { name: "Japanese Straightening", price: "$500+", description: "Permanent straightening for sleek, smooth hair." },
      { name: "Relaxer Treatment", price: "$150+", description: "Professional relaxing for manageable texture." },
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bannerImage}
            alt="Hairdresser styling hair"
            className="w-full h-full object-cover"
            data-testid="img-services-banner"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 
            className="font-serif text-4xl md:text-5xl font-bold text-white mb-4"
            data-testid="text-services-headline"
          >
            Our Services
          </h1>
          <p className="text-pink-100/90 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of luxury hair services, each delivered with expert care and attention.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((category, categoryIndex) => (
              <Card 
                key={category.category}
                className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card"
                data-testid={`card-category-${categoryIndex}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                      <category.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      {category.category}
                    </h2>
                  </div>
                  <div className="space-y-5">
                    {category.items.map((service, serviceIndex) => (
                      <div 
                        key={service.name} 
                        className="pb-5 border-b border-border/50 last:border-0 last:pb-0"
                        data-testid={`service-item-${categoryIndex}-${serviceIndex}`}
                      >
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <h3 className="font-medium text-foreground">{service.name}</h3>
                          <span className="text-primary font-semibold whitespace-nowrap">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-secondary/30 via-accent/20 to-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-muted-foreground mb-2 text-sm">
            * Prices may vary based on hair length, thickness, and complexity
          </p>
          <p className="text-muted-foreground mb-8 text-sm">
            Consultation available for color corrections and custom services
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-primary/90 to-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-10 h-10 text-white/80 mx-auto mb-6" />
          <h2 
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-6"
            data-testid="text-services-cta"
          >
            Ready to Book Your Service?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Our expert stylists are ready to help you achieve your hair goals. Schedule your appointment today!
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base px-10 py-6 rounded-xl shadow-lg"
              data-testid="button-services-book"
            >
              Book an Appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
