import React, { useEffect, useRef, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const images = [
  'mv1.jpg', 'mv2.jpg', 'mv3.jpg', 'mv4.jpg', 'mv5.jpg',
  'mv6.jpg', 'mv7.jpg', 'mv8.jpg', 'mv9.jpg', 'mv10.jpg'
];

const quotes = [
  "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
  "The roots of education are bitter, but the fruit is sweet. – Aristotle",
  "An investment in knowledge pays the best interest. – Benjamin Franklin",
  "Education is not preparation for life; education is life itself. – John Dewey",
  "The beautiful thing about learning is that no one can take it away from you. – B.B. King",
  "Learning never exhausts the mind. – Leonardo da Vinci",
  "The mind is not a vessel to be filled, but a fire to be kindled. – Plutarch",
  "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. – Malcolm X",
  "Develop a passion for learning. If you do, you will never cease to grow. – Anthony J. D'Angelo",
  "Education breeds confidence. Confidence breeds hope. Hope breeds peace. – Confucius"
];

const MovingGallery = () => {
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const intervalRef = useRef<any>(null);
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const slideNext = () => {
      if (carouselApi && carouselApi.scrollNext) {
        if (carouselApi.selectedScrollSnap() === images.length - 1) {
          carouselApi.scrollTo(0);
        } else {
          carouselApi.scrollNext();
        }
      }
    };
    intervalRef.current = setInterval(slideNext, 3000);
    return () => clearInterval(intervalRef.current);
  }, [carouselApi]);

  // Listen to carousel change to update quote
  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => {
      setCurrent(carouselApi.selectedScrollSnap() ?? 0);
    };
    carouselApi.on('select', onSelect);
    return () => carouselApi.off('select', onSelect);
  }, [carouselApi]);

  return (
    <section className="py-8 md:py-16 bg-transparent relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-10">Gallery</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-7xl mx-auto">
          <div className="w-full md:w-2/3 flex-shrink-0">
            <Carousel className="w-full" setApi={setCarouselApi}>
              <CarouselContent>
                {images.map((img, idx) => (
                  <CarouselItem key={img} className="flex items-center justify-center">
                    <div className="w-full h-[40rem] md:h-[48rem] rounded-2xl overflow-hidden shadow-2xl bg-white/80 flex items-center justify-center">
                      <img
                        src={`/${img}`}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
            <blockquote className="text-lg md:text-2xl italic text-gray-700 bg-white/80 rounded-2xl shadow-lg p-8 text-center md:text-left">
              {quotes[current % quotes.length]}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingGallery; 