"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Waves,
  Utensils,
  CalendarHeart,
  TreePine,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

interface AboutProps {
  dict: {
    about: {
      title: string;
      description: string;
      address: string;
      phone: string;
      email: string;
      directions: {
        car: string;
        public: string;
      };
      hours: string;
    };
  };
  lang: string;
}

const About = ({ dict, lang }: AboutProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="mt-20 max-w-7xl mx-auto px-4">
        {/* Header Section with Images */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Text Content */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatedDecorativeBar />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="uppercase text-4xl md:text-5xl font-semibold tracking-wider"
              >
                {dict.about.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg leading-relaxed"
              >
                {dict.about.description}
              </motion.p>
            </div>

            {/* Images Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative aspect-[4/3] w-full overflow-hidden shadow-sm group"
                >
                  <Image
                    src="/hotel/hotel-04.jpg"
                    alt={dict.about.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                  />
                </motion.div>

                {/* Second Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="relative aspect-[4/3] w-full overflow-hidden shadow-sm group"
                >
                  <Image
                    src="/diver/narew-03.jpeg"
                    alt="Scenic view"
                    fill
                    priority
                    className="object-cover transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - What Makes Us Different and Map */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - What Makes Us Different and Ratings Combined */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-6"
          >
            <div className="mt-0 h-full flex flex-col">
              {/* What Makes Us Different Section */}
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-5">
                  <Badge className="bg-pink-100 text-avangarda hover:bg-pink-100">
                    Co nas wyróżnia
                  </Badge>
                  <div className="h-px flex-1 bg-gray-100"></div>
                </div>

                <ul className="space-y-4">
                  {/* Green Location */}
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full text-avangarda flex-shrink-0 mt-0.5">
                      <TreePine className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-0.5">
                        Wyjątkowa lokalizacja
                      </h3>
                      <p className="text-gray-600 text-md">
                        Położenie w zielonej okolicy tuż przy rzece, oferujące
                        spokój i kontakt z naturą.
                      </p>
                    </div>
                  </li>

                  {/* Wellness & Spa */}
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full text-avangarda flex-shrink-0 mt-0.5">
                      <Waves className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-0.5">
                        Wellness i SPA
                      </h3>
                      <p className="text-gray-600 text-md">
                        Fantastyczna strefa relaksu z basenem, sauną i
                        profesjonalnymi zabiegami.
                      </p>
                    </div>
                  </li>

                  {/* Restaurant */}
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full text-avangarda flex-shrink-0 mt-0.5">
                      <Utensils className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-0.5">
                        Wyjątkowa restauracja
                      </h3>
                      <p className="text-gray-600 text-md">
                        Prawdziwie niesamowita kuchnia z lokalnymi specjałami i
                        sezonowym menu.
                      </p>
                    </div>
                  </li>

                  {/* Events & Meetings */}
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full text-avangarda flex-shrink-0 mt-0.5">
                      <CalendarHeart className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-0.5">
                        Przestrzeń eventowa
                      </h3>
                      <p className="text-gray-600 text-md">
                        Idealne miejsce na wesela i spotkania biznesowe z
                        profesjonalną obsługą.
                      </p>
                    </div>
                  </li>

                  {/* Green Location */}
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full text-avangarda flex-shrink-0 mt-0.5">
                      <TreePine className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-0.5">
                        Wyjątkowa lokalizacja
                      </h3>
                      <p className="text-gray-600 text-md">
                        Położenie w zielonej okolicy tuż przy rzece, oferujące
                        spokój i kontakt z naturą.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Map with Better Button Placement */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-6"
          >
            <div className="space-y-4">
              {/* Map Header with Button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge className="bg-pink-100 text-avangarda hover:bg-pink-100">
                    Lokalizacja
                  </Badge>
                  <div className="h-px flex-1 bg-gray-100"></div>
                </div>
                <Button
                  size="sm"
                  className="bg-avangarda hover:bg-avangarda/90 text-white transition-all"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/6eFZW5kQxosNaUR38",
                      "_blank"
                    )
                  }
                >
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Google Maps
                </Button>
              </div>

              {/* Map Image */}
              <div className="relative overflow-hidden h-full min-h-[400px] lg:min-h-[500px]">
                <div className="h-full w-full">
                  <Image
                    src="/mapa-ava.png"
                    alt="Map"
                    fill
                    className="object-contain w-full h-full"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
