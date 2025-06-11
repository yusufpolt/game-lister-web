import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router";

interface ImageCarouselProps {
  images: {
    id: number;
    url: string;
    text?: string;
    description?: string;
    link: string;
  }[];
}

export function ImageCarousel({ images }: ImageCarouselProps) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          dragFree: false,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem className="cursor-pointer" key={image.id}>
              <Link to={image.link}>
                <div className="w-full">
                  <img
                    src={image.url}
                    alt={`Slide ${image.id}`}
                    className="w-full h-full object-cover"
                  />
                  {image.text && (
                    <div className=" w-full bg-gradient-to-t from-white/5 to-transparent rounded-b-lg px-4 sm:px-6 md:px-8 py-6 select-none">
                      <h2 className="text-2xl text-bold leading-tight text-white">
                        {image.text}
                      </h2>
                      <p className="text-[#979797] text-base">
                        {image.description}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
