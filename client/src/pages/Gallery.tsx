import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import image1 from "@assets/stock_images/beautiful_woman_hair_bb714cb1.jpg";
import image2 from "@assets/stock_images/beautiful_woman_hair_8185dff2.jpg";
import image3 from "@assets/stock_images/beautiful_woman_hair_90ab5d31.jpg";
import image4 from "@assets/stock_images/blonde_balayage_hair_682f4164.jpg";
import image5 from "@assets/stock_images/elegant_updo_hairsty_1cce98cb.jpg";
import image6 from "@assets/stock_images/hairdresser_styling__f2aa0d38.jpg";
import image7 from "@assets/stock_images/hairdresser_styling__a5956d01.jpg";
import image8 from "@assets/stock_images/hair_salon_interior__b3aec619.jpg";
import image9 from "@assets/stock_images/hair_salon_interior__7c8090de.jpg";

const galleryImages = [
  { src: image1, alt: "Beautiful styled hair", category: "Styling" },
  { src: image4, alt: "Blonde balayage transformation", category: "Color" },
  { src: image8, alt: "Éclat Salon interior", category: "Salon" },
  { src: image2, alt: "Elegant hairstyle", category: "Styling" },
  { src: image5, alt: "Elegant updo for special occasion", category: "Updo" },
  { src: image6, alt: "Professional hair styling", category: "Styling" },
  { src: image9, alt: "Modern salon space", category: "Salon" },
  { src: image3, alt: "Beautiful hair color", category: "Color" },
  { src: image7, alt: "Hairdresser at work", category: "Process" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="py-16 md:py-20 bg-gradient-to-br from-secondary/30 via-background to-accent/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Our Portfolio
          </span>
          <h1 
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6"
            data-testid="text-gallery-headline"
          >
            Style Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our collection of stunning transformations, elegant styles, and glimpses of our luxurious salon space.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg aspect-[4/5] bg-muted"
                data-testid={`img-gallery-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-primary/90 to-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Sparkles className="w-10 h-10 text-white/80 mx-auto mb-6" />
          <h2 
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-6"
            data-testid="text-gallery-cta"
          >
            Love What You See?
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Let our talented stylists create your perfect look. Book your appointment and become part of our gallery!
          </p>
          <Link href="/contact">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-base px-10 py-6 rounded-xl shadow-lg"
              data-testid="button-gallery-book"
            >
              Book Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
