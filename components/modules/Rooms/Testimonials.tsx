"use client";

import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

interface TestimonialsProps {
  lang?: string;
  dict?: any;
}

const Testimonials = ({ lang = "pl", dict }: TestimonialsProps) => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Anna Kowalska",
      location: "Warszawa",
      rating: 5,
      text: "Niesamowite miejsce! Personel bardzo pomocny, pokoje czyste i wygodne. SPA to prawdziwa oaza spokoju. Na pewno wrócimy!",
      platform: "TripAdvisor",
    },
    {
      id: 2,
      name: "Michał Nowak",
      location: "Kraków",
      rating: 5,
      text: "Hotel przekroczył nasze oczekiwania. Restauracja serwuje wyśmienite posiłki, a lokalizacja jest idealna na relaks z dala od miejskiego zgiełku.",
      platform: "Booking.com",
    },
    {
      id: 3,
      name: "Katarzyna Wiśniewska",
      location: "Gdańsk",
      rating: 5,
      text: "Organizowaliśmy tu wesele i wszystko było perfekcyjne. Obsługa na najwyższym poziomie, jedzenie wyśmienite, goście zachwyceni!",
      platform: "Google",
    },
  ];

  return (
    <section className="w-full py-16 md:py-28 relative">
      <BackgroundLogoBottomDark />
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header Section with Ratings */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <AnimatedDecorativeBar className="w-20 h-2 bg-avangarda mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Co mówią nasi goście?
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Poznaj opinie naszych gości i przekonaj się, dlaczego wybierają
              Hotel Avangarda
            </p>
          </div>

          {/* Right side - Ratings logos */}
          <div className="lg:w-1/2">
            {/* Mobile layout - 2 rows */}
            <div className="lg:hidden space-y-4">
              {/* First row - TripAdvisor and Booking.com */}
              <div className="flex gap-4">
                {/* TripAdvisor */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full w-22 h-22 flex-shrink-0 flex items-center justify-center relative">
                      <Image
                        src="/tripadvisor-new-2.png"
                        alt="TripAdvisor Reviews"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <div className="text-xl font-bold text-white">4.8/5</div>
                      <div className="text-gray-300 text-xs">TripAdvisor</div>
                    </div>
                  </div>
                </div>

                {/* Booking.com */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full w-22 h-22 flex-shrink-0 flex items-center justify-center relative">
                      <Image
                        src="/booking-new-2.png"
                        alt="Booking.com"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-blue-400 text-blue-400"
                          />
                        ))}
                      </div>
                      <div className="text-xl font-bold text-white">9.2/10</div>
                      <div className="text-gray-300 text-xs">Booking.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second row - Google (centered) */}
              <div className="flex justify-start">
                <div className="w-1/2">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full w-22 h-22 flex-shrink-0 flex items-center justify-center relative">
                      <Image
                        src="/google-new-2.png"
                        alt="Google Reviews"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <div className="text-xl font-bold text-white">4.7/5</div>
                      <div className="text-gray-300 text-xs">Google</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop layout - grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {/* TripAdvisor */}
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-3 relative">
                  <Image
                    src="/tripadvisor-new-2.png"
                    alt="TripAdvisor Reviews"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400 mx-0.5"
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-white mb-1">4.8/5</div>
                <div className="text-gray-300 text-sm">TripAdvisor</div>
              </div>

              {/* Booking.com */}
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-3 relative">
                  <Image
                    src="/booking-new-2.png"
                    alt="Booking.com"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-blue-400 text-blue-400 mx-0.5"
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-white mb-1">9.2/10</div>
                <div className="text-gray-300 text-sm">Booking.com</div>
              </div>

              {/* Google */}
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-3 relative">
                  <Image
                    src="/google-new-2.png"
                    alt="Google Reviews"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-amber-400 text-amber-400 mx-0.5"
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-white mb-1">4.7/5</div>
                <div className="text-gray-300 text-sm">Google</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-avangarda p-3 rounded-full shadow-lg">
                  <Quote className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400 mx-0.5"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-center mb-8 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="text-center border-t border-white/20 pt-6">
                <p className="font-semibold text-white text-lg">
                  {testimonial.name}
                </p>
                <p className="text-gray-300 mb-3">{testimonial.location}</p>
                <Badge
                  variant="outline"
                  className="border-avangarda/50 text-avangarda bg-avangarda/10"
                >
                  {testimonial.platform}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
