"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Offers as OffersType } from "../../sanity.types";
import { imageUrl } from "@/lib/imageUrl";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Tag,
  Calendar,
  Clock,
  Users,
} from "lucide-react";
import { useRef, useState } from "react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

interface OfferType {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface OffersProps {
  dict: {
    offers: {
      title: string;
      description: string;
      details: string;
      items: OfferType[];
      from: string; // Added for price label
    };
  };
  lang: string;
  offers: OffersType[];
}

const Offers = ({ dict, lang, offers }: OffersProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to scroll the container
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Update active index
      setTimeout(() => {
        const newPosition = container.scrollLeft;
        const newIndex = Math.round(newPosition / cardWidth);
        setScrollPosition(newPosition);
        setActiveIndex(newIndex);
      }, 300);
    }
  };

  // Handle scroll event to update indicators
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      const newPosition = container.scrollLeft;
      const newIndex = Math.round(newPosition / cardWidth);

      setScrollPosition(newPosition);
      setActiveIndex(newIndex);
    }
  };

  // Function to get localized content
  const getLocalizedContent = (offer: OffersType) => {
    const name = lang === "pl" ? offer.plname : offer.enname;
    const description =
      lang === "pl" ? offer.pldescription : offer.endescription;
    const currency = "PLN";

    // Format price with currency
    const formattedPrice = offer.price
      ? new Intl.NumberFormat(lang === "pl" ? "pl-PL" : "en-US", {
          style: "currency",
          currency: currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 2,
        }).format(offer.price)
      : null;

    return {
      name: name || "No title available",
      description:
        description
          ?.map((block) =>
            block._type === "block"
              ? block.children?.map((child) => child.text).join("")
              : ""
          )
          .join("") || "No description available",
      price: formattedPrice,
    };
  };

  // Generate random offer features for visual appeal
  const getRandomFeatures = (index: number) => {
    const featureSets = [
      { icon: Calendar, text: "3 dni / 2 noce" },
      { icon: Users, text: "Dla 2 osób" },
      { icon: Clock, text: "Dostępne cały rok" },
      { icon: Calendar, text: "5 dni / 4 noce" },
      { icon: Users, text: "Dla rodziny" },
      { icon: Clock, text: "Sezon letni" },
    ];

    // Return 2 features based on index
    return [featureSets[index % 3], featureSets[(index + 3) % 6]];
  };

  return (
    <Container className="mt-6 w-full text-primary bg-gradient-to-b from-white to-gray-50">
      <div className="relative max-w-7xl mx-auto sm:px-4 py-8">
        <div className="mb-10 md:mb-10">
          {/* Header with title and "See All" button */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <AnimatedDecorativeBar />
              <h2 className="text-4xl font-alata md:text-5xl font-semibold uppercase tracking-wider mb-6 md:mb-0 relative">
                {dict.offers.title}
              </h2>
            </motion.div>

            {/* "See All" button moved to top right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="self-start md:self-end md:mb-6"
            >
              <Link href={`/${lang}/pakiety`}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-fit transition-all hover:scale-105 active:scale-95 bg-gradient-to-r from-avangarda to-avangarda/90 text-white hover:from-avangarda/90 hover:to-avangarda shadow-lg hover:shadow-xl px-6 py-2 md:px-8 md:py-3"
                >
                  Zobacz wszystkie
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Offers Carousel */}
        <div className="relative">
          {/* Left Navigation Arrow - Positioned to overlap image */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-2 z-20 p-4 rounded-full bg-white/90 backdrop-blur-sm border-2 border-avangarda shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 hidden md:flex items-center justify-center group"
            style={{ top: "calc(40% - 2rem)" }}
            aria-label="Previous offer"
            disabled={scrollPosition <= 10}
          >
            <ChevronLeft
              className={`h-6 w-6 transition-all duration-300 ${
                scrollPosition <= 10
                  ? "text-gray-300"
                  : "text-avangarda group-hover:text-avangarda group-hover:-translate-x-0.5"
              }`}
            />
          </button>

          {/* Right Navigation Arrow - Positioned to overlap image */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 z-20 p-4 rounded-full bg-white/90 backdrop-blur-sm border-2 border-avangarda shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 hidden md:flex items-center justify-center group"
            style={{ top: "calc(40% - 2rem)" }}
            aria-label="Next offer"
          >
            <ChevronRight className="h-6 w-6 text-avangarda transition-all duration-300 group-hover:translate-x-0.5" />
          </button>

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide px-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {offers.map((offer, index) => {
              const localizedContent = getLocalizedContent(offer);
              const features = getRandomFeatures(index);

              return (
                <motion.div
                  key={offer._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-none w-[85%] md:w-[48%] lg:w-[32%] snap-start group"
                >
                  <div className="bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-2">
                    {/* Image container with all content overlaid */}
                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                      <Image
                        src={imageUrl(offer.image!).url() || "/placeholder.svg"}
                        alt={localizedContent.name}
                        fill
                        className="object-cover transition-transform duration-700"
                        priority
                      />

                      {/* Enhanced gradient overlay - stronger at bottom for text visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>

                      {/* Content overlay - positioned at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300">
                        <Link
                          href={`/${lang}/pakiety/${offer.slug?.current}`}
                          className="block"
                        >
                          <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-white transition-colors">
                            {localizedContent.name}
                          </h3>
                        </Link>

                        {/* Features */}
                        <div className="flex gap-4 mb-4">
                          {features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-1.5 text-sm text-white/90 font-bold"
                            >
                              <feature.icon className="h-4 w-4 text-avangarda" />
                              <span>{feature.text}</span>
                            </div>
                          ))}
                        </div>

                        {/* Description - Hidden by default, visible on hover */}
                        <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-24">
                          <p className="text-white/90 text-sm md:text-base mb-6">
                            {localizedContent.description.length > 150
                              ? `${localizedContent.description.substring(0, 150)}...`
                              : localizedContent.description}
                          </p>
                        </div>

                        {/* Button - Hidden by default, visible on hover */}
                        <div className="transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link
                            href={`/${lang}/pakiety/${offer.slug?.current}`}
                            className="block w-full"
                          >
                            <Button
                              size="default"
                              className="mt-3 w-full bg-avangarda hover:bg-avangarda/90 text-white shadow-md transition-all hover:shadow-lg"
                            >
                              {dict.offers.details}
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>

                      {/* Price badge */}
                      {localizedContent.price && (
                        <div className="absolute top-4 right-4 bg-white text-pink-600 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 font-medium">
                          <Tag className="h-4 w-4" />
                          <span>
                            {dict.offers.from || "From"}:{" "}
                            {localizedContent.price}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Enhanced Scroll Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {offers.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === activeIndex
                    ? "w-8 bg-avangarda shadow-md"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const cardWidth =
                      container.querySelector("div")?.offsetWidth || 0;
                    container.scrollTo({
                      left: cardWidth * index,
                      behavior: "smooth",
                    });
                    setActiveIndex(index);
                  }
                }}
                aria-label={`Go to offer ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Offers;
