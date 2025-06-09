"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { AnimatedDecorativeBar } from "../animated-decorative-bar";

interface RestaurantProps {
  dict: {
    restaurants: {
      title: string;
      description: string;
      details: string;
    };
  };
  lang?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

const RestaurantNew = ({ dict, lang }: RestaurantProps) => {
  // Determine the correct URL based on language
  const restaurantUrl = lang === "en" ? "/en/restauracja" : "/pl/restauracja";

  return (
    <Container className="bg-white w-full text-primary py-8 md:py-16 mb-28 md:mb-32">
      <div className="max-w-7xl mx-auto">
        {/* Content Section - Two halves */}
        <div className="mb-6 md:mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left half - Two images (hidden on mobile) */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full h-[230px] md:h-[330px]"
            >
              <Image
                src="/restaurant/rest-10.jpg"
                alt="Restaurant Food"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-full h-[230px] md:h-[330px]"
            >
              <Image
                src="/restaurant/coola-gastro.jpg"
                alt="Fort View"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right half - Text content with button below */}
          <div className="flex flex-col justify-center">
            <AnimatedDecorativeBar />
            <motion.h2
              {...fadeInUp}
              transition={{ delay: 0.4 }}
              className="text-4xl max-w-2xl font-alata md:text-5xl font-semibold uppercase tracking-wider mb-6"
            >
              {dict.restaurants.title}
            </motion.h2>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg max-w-2xl leading-relaxed text-primary mb-6"
            >
              {dict.restaurants.description}
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.8 }}>
              <Link href={restaurantUrl}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-fit transition-all hover:scale-105 active:scale-95"
                >
                  Dowiedz się więcej
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Images Grid - Two images on left, one large on right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Left side - two more images stacked */}
          <div className="col-span-1 md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full h-[230px] md:h-[330px]"
            >
              <Image
                src="/fort/fort-05.png"
                alt="Restaurant Food"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-full h-[230px] md:h-[330px]"
            >
              <Image
                src="/restaurant/przystan-01.jpg"
                alt="Fort View"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right side - large image */}
          <motion.div
            {...fadeInScale}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-1 md:col-span-6 relative w-full h-[230px] md:h-[330px]"
          >
            <Image
              src="/restaurant/rest-03.jpg"
              alt="Restaurant Interior"
              fill
              priority
              className="object-cover"
              quality={100}
            />
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default RestaurantNew;
