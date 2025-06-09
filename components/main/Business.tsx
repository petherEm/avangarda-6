"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import BackgroundLogosDark from "../background-logos-random-dark";
import BackgroundLogoBottomDark from "../background-logo-bottom-dark";
import { AnimatedDecorativeBar } from "../animated-decorative-bar";

interface BusinessProps {
  lang?: string;
  dict?: any;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
};

const Business = ({ lang = "pl", dict }: BusinessProps) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const businessUrl = lang === "en" ? "/en/biznes" : "/pl/biznes";

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <BackgroundLogoBottomDark />
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content Section */}
            <motion.div
              ref={contentRef}
              className="order-2 lg:order-1 space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <AnimatedDecorativeBar />
              <motion.h2
                variants={fadeInUp}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="!text-white text-4xl font-alata md:text-5xl font-semibold uppercase tracking-wider mb-6"
              >
                Spotkania firmowe, Integracje & Business Spa
              </motion.h2>

              <div className="space-y-6">
                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-base md:text-lg max-w-2xl leading-relaxed text-white"
                >
                  Hotel Avangarda oferuje nowoczesne sale konferencyjne idealne
                  na spotkania biznesowe, szkolenia i eventy firmowe. Zapewniamy
                  pełne zaplecze techniczne, w tym projektory, nagłośnienie i
                  szybki internet.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-base md:text-lg max-w-2xl leading-relaxed text-white"
                >
                  Po intensywnym dniu pracy zapraszamy do naszej strefy SPA,
                  gdzie Goście mogą zrelaksować się w saunie, jacuzzi lub
                  podczas profesjonalnych masaży.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-base md:text-lg max-w-2xl leading-relaxed text-white"
                >
                  Organizujemy również wieczory integracyjne i programy team
                  buildingowe – które sprzyjają budowaniu relacji i wspólnej
                  motywacji zespołu.
                </motion.p>
              </div>

              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="pt-4"
              >
                <Link href={businessUrl}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-fit transition-all hover:scale-105 active:scale-95"
                  >
                    Dowiedz się więcej
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Images Grid with More Space Between Images */}
            <motion.div
              className="order-1 lg:order-2 relative"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Desktop and Tablet Layout */}
              <div className="hidden sm:block relative h-[500px] md:h-[600px] lg:h-[650px]">
                {/* Large Main Image - Positioned Higher */}
                <motion.div
                  variants={fadeInRight}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute top-0 right-0 w-4/5 h-[45%] z-10"
                >
                  <div className="relative h-full w-full overflow-hidden shadow-2xl">
                    <Image
                      src="/conference/theater-03.jpg"
                      alt="Sala konferencyjna"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 40vw"
                      quality={100}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </motion.div>

                {/* Secondary Image - Positioned Lower with More Space */}
                <motion.div
                  variants={fadeInLeft}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute bottom-0 left-0 w-3/5 h-[45%] z-20"
                >
                  <div className="relative h-full w-full overflow-hidden shadow-2xl">
                    <Image
                      src="/conference/cozy-01.jpg"
                      alt="Kameralna sala konferencyjna"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 60vw, (max-width: 1200px) 35vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  variants={fadeInScale}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-[#E31C79]/15 to-[#E31C79]/8 rounded-full blur-lg"
                ></motion.div>
                <motion.div
                  variants={fadeInScale}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-[#E31C79]/12 to-transparent rounded-full blur-lg"
                ></motion.div>
              </div>

              {/* Mobile Layout with More Space Between Images */}
              <div className="sm:hidden space-y-8">
                <motion.div
                  variants={fadeInScale}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full aspect-[4/3] relative"
                >
                  <div className="relative h-full w-full overflow-hidden shadow-xl">
                    <Image
                      src="/conference/theater-03.jpg"
                      alt="Sala konferencyjna"
                      fill
                      priority
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInScale}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="w-full aspect-[4/3] relative"
                >
                  <div className="relative h-full w-full overflow-hidden shadow-xl">
                    <Image
                      src="/conference/cozy-01.jpg"
                      alt="Kameralna sala konferencyjna"
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Business;
