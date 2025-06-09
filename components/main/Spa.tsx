"use client";

import type React from "react";

import Image from "next/image";
import { motion } from "framer-motion";
// Assuming Container is a custom component providing max-width and padding
// import { Container } from "../container";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui button
import Link from "next/link";
import { cn } from "@/lib/utils"; // For conditional class names
import BackgroundLogoBottomDark from "../background-logo-bottom-dark";
import { Container } from "../container";
import { AnimatedDecorativeBar } from "../animated-decorative-bar";

const attractions = ["Basen", "Jacuzzi", "Masaże", "Grota Solna"];

interface SpaProps {
  lang?: string;
  dict?: any; // Assuming dict is for internationalization, not used in this snippet directly for styling
  className?: string;
}

const Spa = ({ lang = "pl", dict, className }: SpaProps) => {
  const spaUrl = lang === "en" ? "/en/spa" : "/pl/spa";

  return (
    <Container
      className={cn("relative mt-10 py-10 md:py-14 text-white", className)}
    >
      {/* Background Image - Add z-index to push it behind content */}
      <div className="absolute inset-0 -z-10">
        <BackgroundLogoBottomDark position="right" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* The z-10 ensures content is above background */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Images Container - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/2] w-full overflow-hidden shadow-xl -mt-[20%] z-10"
          >
            <Image
              src="/spa/spa-08.jpg"
              alt="Luxurious spa interior"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={100}
            />
          </motion.div>

          {/* Text Content - Right Side */}
          <div className="w-full space-y-6 lg:pl-8 flex flex-col justify-center">
            <AnimatedDecorativeBar />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              // Assuming font-alata is defined in your tailwind.config.js or globals.css
              className="text-4xl font-alata md:text-5xl font-semibold uppercase tracking-wider text-neutral-50"
            >
              Wellness & SPA
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-lg leading-relaxed text-neutral-300"
            >
              Odkryj oazę spokoju w naszym SPA, gdzie ciało i umysł znajdują
              pełne odprężenie. Hotel Avangarda oferuje wyjątkowe atrakcje:
            </motion.p>

            {/* Attractions List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-3 pt-2"
            >
              {attractions.map((attraction, index) => (
                <motion.div
                  key={attraction}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  className="flex items-center space-x-3"
                >
                  {/* Assuming bg-avangarda is a custom color in your tailwind config */}
                  <div className="w-2.5 h-2.5 bg-avangarda rounded-full flex-shrink-0 shadow-sm"></div>
                  <span className="text-lg md:text-xl font-medium text-neutral-200">
                    {attraction}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="pt-6"
            >
              <Link href={spaUrl}>
                <Button
                  size="lg"
                  variant="secondary" // Changed to default for better contrast on light gradient
                  className="w-fit transition-all hover:scale-105 active:scale-95"
                >
                  Dowiedz się więcej
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Spa;
