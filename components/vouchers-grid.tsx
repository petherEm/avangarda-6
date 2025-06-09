"use client";

import { motion } from "framer-motion";
import type { Voucher } from "../sanity.types";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Tag } from "lucide-react";
import { imageUrl } from "@/lib/imageUrl";

interface VouchersGridProps {
  vouchers: Voucher[];
  lang?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function VouchersGrid({ vouchers, lang = "en" }: VouchersGridProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Listen for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

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

  // If on mobile or tablet, show the carousel view
  if (isMobile) {
    return (
      <div className="relative">
        {/* Navigation Controls - Only shown on larger screens */}
        <div className="hidden sm:flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Previous voucher"
            disabled={scrollPosition <= 10}
          >
            <ChevronLeft
              className={`h-5 w-5 ${scrollPosition <= 10 ? "text-gray-300" : "text-gray-700"}`}
            />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
            aria-label="Next voucher"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Vouchers Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {vouchers?.map((voucher, index) => {
            return (
              <motion.div
                key={voucher._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-none w-[85%] sm:w-[75%] md:w-[48%] snap-start group"
              >
                <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="relative w-full aspect-[3/4] overflow-hidden">
                    <Image
                      src={
                        voucher.voucherImage
                          ? imageUrl(voucher.voucherImage).url()
                          : "/placeholder.svg"
                      }
                      alt={
                        lang === "pl"
                          ? voucher.plname || ""
                          : voucher.enname || ""
                      }
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 48vw, 32vw"
                    />

                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300">
                      <Link
                        href={`/${lang}/vouchery/${voucher.slug?.current}`}
                        className="block"
                      >
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-white transition-colors">
                          {lang === "pl" ? voucher.plname : voucher.enname}
                        </h3>
                      </Link>

                      {/* Description - Hidden by default, visible on hover */}
                      <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-24">
                        <p className="text-white/90 text-sm md:text-base mb-6">
                          {lang === "pl"
                            ? voucher.pldescription?.substring(0, 150) +
                                "..." || ""
                            : voucher.endescription?.substring(0, 150) +
                                "..." || ""}
                        </p>
                      </div>

                      {/* Button - Hidden by default, visible on hover */}
                      <div className="transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                        <Link
                          href={`/${lang}/vouchery/${voucher.slug?.current}`}
                          className="block w-full"
                        >
                          <Button
                            size="default"
                            className="mt-3 w-full bg-avangarda hover:bg-avangarda/90 text-white shadow-md transition-all"
                          >
                            {lang === "pl" ? "Szczegóły" : "Details"}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Value badge */}
                    {voucher.voucherValue && (
                      <div className="absolute top-4 right-4 bg-white text-pink-600 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 font-medium">
                        <Tag className="h-4 w-4" />
                        <span>
                          {new Intl.NumberFormat(
                            lang === "pl" ? "pl-PL" : "en-US",
                            {
                              style: "currency",
                              currency: "PLN",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }
                          ).format(voucher.voucherValue)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {vouchers?.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-avangarda" : "w-2 bg-gray-300"
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
              aria-label={`Go to voucher ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop grid view
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
    >
      {vouchers?.map((voucher) => {
        return (
          <motion.div
            key={voucher._id}
            variants={item}
            layout
            className="group"
          >
            <div className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src={
                    voucher.voucherImage
                      ? imageUrl(voucher.voucherImage).url()
                      : "/placeholder.svg"
                  }
                  alt={
                    lang === "pl" ? voucher.plname || "" : voucher.enname || ""
                  }
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300">
                  <Link
                    href={`/${lang}/vouchery/${voucher.slug?.current}`}
                    className="block"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-white transition-colors">
                      {lang === "pl" ? voucher.plname : voucher.enname}
                    </h3>
                  </Link>

                  {/* Description - Hidden by default, visible on hover */}
                  <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-24">
                    <p className="text-white/90 text-sm md:text-base mb-6">
                      {lang === "pl"
                        ? voucher.pldescription?.substring(0, 150) + "..." || ""
                        : voucher.endescription?.substring(0, 150) + "..." ||
                          ""}
                    </p>
                  </div>

                  {/* Button - Hidden by default, visible on hover */}
                  <div className="transform transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    <Link
                      href={`/${lang}/vouchery/${voucher.slug?.current}`}
                      className="block w-full"
                    >
                      <Button
                        size="default"
                        className="mt-3 w-full bg-avangarda hover:bg-avangarda/90 text-white shadow-md transition-all"
                      >
                        {lang === "pl" ? "Szczegóły" : "Details"}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Value badge */}
                {voucher.voucherValue && (
                  <div className="absolute top-4 right-4 bg-white text-pink-600 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 font-medium">
                    <Tag className="h-4 w-4" />
                    <span>
                      {new Intl.NumberFormat(
                        lang === "pl" ? "pl-PL" : "en-US",
                        {
                          style: "currency",
                          currency: "PLN",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }
                      ).format(voucher.voucherValue)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default VouchersGrid;
