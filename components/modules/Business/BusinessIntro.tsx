"use client";
import { useState, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { Download, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { addMonths, format } from "date-fns";
import { pl, enUS } from "date-fns/locale";
import { CONFERENCE_ROOMS, BUSINESS_PACKAGES, ROOM_RENTALS } from "@/constants"; // Assuming constants are in @/constants
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface BusinessIntroProps {
  dict: any;
  lang: string;
}

export default function BusinessIntro({ dict, lang }: BusinessIntroProps) {
  const phoneNumber = "+48 574 383 282";

  const t = (key: string) => getNestedValue(dict, key) || key;

  const eventShowcaseItems = [
    {
      imageSrc: "/conference/banquet-01.jpg",
      imageAlt: "Elegant Gala Dinner",
      titleKey: "business.showcase.item1.title",
      defaultTitle: "Unforgettable Galas",
      descriptionKey: "business.showcase.item1.description",
      defaultDescription:
        "We specialize in creating memorable gala dinners and award ceremonies, paying meticulous attention to every detail, from decor to catering, ensuring a sophisticated and seamless experience for all your guests.",
      imageOrderClass: "md:order-1", // Image on the left
      textOrderClass: "md:order-2", // Text on the right
      imageContainerClass: "md:w-3/5",
      textContainerClass: "md:w-2/5",
      imageAspectRatio: "aspect-[16/10]",
    },
    {
      imageSrc: "/fort/fort-05.png",
      imageAlt: "Productive Workshop Session",
      titleKey: "business.showcase.item3.title",
      defaultTitle: "Engaging Workshops",
      descriptionKey: "business.showcase.item3.description",
      defaultDescription:
        "From intimate workshops to large-scale training sessions, we offer versatile spaces and tailored services. Our goal is to create an environment conducive to learning, collaboration, and innovation.",
      imageOrderClass: "md:order-2", // Image on the left
      textOrderClass: "md:order-1", // Text on the right
      imageContainerClass: "md:w-1/2", // Slightly different weighting
      textContainerClass: "md:w-1/2",
      imageAspectRatio: "aspect-video",
    },
  ];

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <AnimatedDecorativeBar />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl max-w-2xl font-alata md:text-5xl font-semibold uppercase tracking-wider mb-6"
            >
              {t("business.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              {t("business.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                className="flex items-center gap-2"
              >
                <Button
                  size="lg"
                  className="w-fit transition-all hover:scale-105 active:scale-95"
                  variant="secondary"
                >
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                  DOWIEDZ SIĘ WIĘCEJ
                </Button>
              </Link>
              <Link
                href="/business/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Button
                  size="lg"
                  className="w-fit transition-all hover:scale-105 active:scale-95"
                  variant="secondary"
                >
                  <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                  POBIERZ OFERTĘ
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-video w-full overflow-hidden"
          >
            <Image
              src="/conference/theater-03.jpg"
              alt={t("business.title")}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Event Showcase Section - REVISED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16 lg:mb-24"
        >
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wider mb-4">
              {"Nasze Realizacje"}
            </h2>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
              {
                "Zobacz przykładowe zdjęcia z konferencji i gali, które zorganizowaliśmy. Dbamy o każdy detal, aby Twoje wydarzenie było niezapomniane."
              }
            </p>
          </div>

          <div className="space-y-12 md:space-y-20">
            {eventShowcaseItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index + 0.3 }}
                className="flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:gap-12"
              >
                <div
                  className={`w-full ${item.imageContainerClass} ${item.imageOrderClass}`}
                >
                  <div
                    className={`relative w-full overflow-hidden group ${item.imageAspectRatio}`}
                  >
                    <Image
                      src={item.imageSrc || "/placeholder.svg"}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div
                  className={`w-full ${item.textContainerClass} ${item.textOrderClass} text-center md:text-left`}
                >
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-3 lg:mb-4">
                    Gale i bankiety
                  </h3>
                  <p className="text-base lg:text-lg leading-relaxed text-gray-600">
                    Oferujemy nowoczesne i w pełni wyposażone przestrzenie
                    konferencyjne, które spełnią oczekiwania nawet najbardziej
                    wymagających klientów biznesowych. Nasze sale konferencyjne
                    są idealne na szkolenia, konferencje, spotkania zarządu i
                    wydarzenia firmowe. Zapewniamy najwyższej jakości obsługę,
                    nowoczesny sprzęt audiowizualny oraz elastyczne możliwości
                    aranżacji przestrzeni.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
