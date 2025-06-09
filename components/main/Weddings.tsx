"use client";

import Image from "next/image";
import { AnimatedDecorativeBar } from "../animated-decorative-bar";
import { motion } from "framer-motion";
import { Container } from "../container";
import { Button } from "../ui/button";

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

const Weddings = () => {
  return (
    <Container className="bg-white w-full text-primary py-16 md:py-24 md:mb-10">
      <div className="max-w-7xl mx-auto">
        {/* Content Section */}
        <div className="mb-8 md:mb-12">
          <AnimatedDecorativeBar />
          <motion.h2
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="text-4xl max-w-2xl font-alata md:text-5xl font-semibold uppercase tracking-wider mb-6"
          >
            Uroczystości na każdą okazję
          </motion.h2>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8">
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg max-w-2xl leading-relaxed text-primary"
            >
              Zorganizuj niezapomniane chwile w wyjątkowej atmosferze! Oferujemy
              profesjonalną obsługę i przestrzenie idealne na wesela, komunie,
              chrzciny oraz inne uroczystości okolicznościowe. Twój wyjątkowy
              dzień w najlepszym stylu!
            </motion.p>
            <motion.div {...fadeInUp} transition={{ delay: 0.8 }}>
              <Button
                size="lg"
                variant="secondary"
                className="w-fit transition-all hover:scale-105 active:scale-95"
              >
                Dowiedz się więcej
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Redesigned Images Grid - One large image on left, two horizontal on right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Left side - large image */}
          <motion.div
            {...fadeInScale}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 md:col-span-6 relative w-full h-[250px] md:h-[350px]"
          >
            <Image
              src="/wedding/wed-room-04.jpg"
              alt="Słodki stół weselny"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right side - two horizontal images stacked */}
          <div className="col-span-1 md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative w-full h-[250px] md:h-[350px]"
            >
              <Image
                src="/wedding/table-02.jpg"
                alt="Nakrycie stołu weselnego"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </motion.div>
            <motion.div
              {...fadeInScale}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-full h-[250px] md:h-[350px]"
            >
              <Image
                src="/wedding/wed-room-06.jpg"
                alt="Żyrandol i dekoracje"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Weddings;
