import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Palette, Sparkles, Crown, Star, ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/hair_salon_interior__b3aec619.jpg";
import galleryImage1 from "@assets/stock_images/beautiful_woman_hair_bb714cb1.jpg";
import galleryImage2 from "@assets/stock_images/blonde_balayage_hair_682f4164.jpg";
import galleryImage3 from "@assets/stock_images/elegant_updo_hairsty_1cce98cb.jpg";
import galleryImage4 from "@assets/stock_images/hairdresser_styling__f2aa0d38.jpg";

const featuredServices = [
  {
    icon: Scissors,
    title: "Precision Cuts",
    description: "Expert haircuts tailored to your face shape and personal style.",
  },
  {
    icon: Palette,
    title: "Color Artistry",
    description: "From subtle highlights to bold transformations, we bring your vision to life.",
  },
  {
    icon: Crown,
    title: "Special Styling",
    description: "Elegant updos and styling for weddings, events, and special occasions.",
  },
];

const testimonials = [
  {
    name: "Sophie Laurent",
    text: "Éclat Salon transformed my hair! The attention to detail and luxurious experience was beyond my expectations.",
    rating: 5,
  },
  {
    name: "Emma Richardson",
    text: "Finally found my forever salon. The stylists here truly understand what modern elegance means.",
    rating: 5,
  },
  {
    name: "Olivia Chen",
    text: "The best balayage I've ever had. The color is absolutely stunning and so natural-looking!",
    rating: 5,
  },
];

const galleryPreview = [
  { src: galleryImage1, alt: "Beautiful hairstyle" },
  { src: galleryImage2, alt: "Blonde balayage" },
  { src: galleryImage3, alt: "Elegant updo" },
  { src: galleryImage4, alt: "Professional styling" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Éclat Salon luxury interior"
            className="w-full h-full object-cover"
            data-testid="img-hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-pink-300" />
            <span className="text-pink-200 text-sm font-medium tracking-widest uppercase">
              Beverly Hills
            </span>
            <Sparkles className="w-6 h-6 text-pink-300" />
          </div>
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            data-testid="text-hero-headline"
          >
            Welcome to<br />
            <span className="text-pink-300">Éclat Salon</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-pink-100/90 mb-10 max-w-2xl mx-auto font-light italic"
            data-testid="text-hero-subheadline"
          >
            Where Beauty Meets Artistry
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/30"
                data-testid="button-book-appointment"
              >
                Book an Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-6 rounded-xl bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                data-testid="button-view-services"
              >
                View Services
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              What We Offer
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
              Our Signature Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the finest hair care services delivered by our team of expert stylists in an atmosphere of pure luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card 
                key={service.title} 
                className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-card"
                data-testid={`card-service-${index}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`text-service-desc-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg" data-testid="button-all-services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-br from-secondary/30 via-accent/20 to-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-gallery-title">
              Style Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection of stunning transformations and elegant styles created by our talented team.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPreview.map((image, index) => (
              <div 
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group"
                data-testid={`img-gallery-preview-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button variant="outline" size="lg" data-testid="button-full-gallery">
                View Full Gallery
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
              Client Love
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from the wonderful clients who trust us with their hair and beauty needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="border-0 shadow-md bg-card"
                data-testid={`card-testimonial-${index}`}
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4" data-testid={`rating-testimonial-${index}`}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic" data-testid={`text-testimonial-${index}`}>
                    "{testimonial.text}"
                  </p>
                  <p className="font-serif font-semibold text-foreground" data-testid={`text-testimonial-author-${index}`}>
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gradient-to-r from-primary via-primary/90 to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white" />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border-2 border-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-white" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Sparkles className="w-10 h-10 text-white/80 mx-auto mb-6" />
          <h2 
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-6"
            data-testid="text-cta-title"
          >
            Ready for Your Transformation?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Book your appointment today and discover why Éclat Salon is Beverly Hills' premier destination for luxury hair care.
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base px-10 py-6 rounded-xl shadow-lg"
              data-testid="button-cta-book"
            >
              Book Your Appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
