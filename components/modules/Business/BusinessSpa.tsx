"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Clock,
  Heart,
  Dumbbell,
  Bath,
  Coffee,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";

interface BusinessSpaProps {
  dict?: any;
  lang?: string;
}

export default function BusinessSpa({ dict, lang = "pl" }: BusinessSpaProps) {
  const services = [
    {
      icon: Bath,
      title: "Sauna & Jacuzzi",
      subtitle: "Strefa relaksu",
    },
    {
      icon: Heart,
      title: "Masaże",
      subtitle: "Różne techniki",
    },
    {
      icon: Sparkles,
      title: "Zabiegi na twarz",
      subtitle: "Pielęgnacja premium",
    },
    {
      icon: Dumbbell,
      title: "Siłownia",
      subtitle: "24/7 dla gości",
    },
    {
      icon: Clock,
      title: "Godziny otwarcia",
      subtitle: "10:00 - 22:00",
    },
    {
      icon: Coffee,
      title: "Herbaciarnia",
      subtitle: "Zdrowe napoje",
    },
  ];

  const treatments = [
    "Masaż antystresowy (50 min)",
    "Ekspresowy zabieg na twarz (30 min)",
    "Relaks w strefie saun (bez limitu)",
    "Aromaterapia i relaksacja (45 min)",
  ];

  return (
    <div className=" text-white w-full py-16 md:py-24 relative">
      {/* Background Image - Add z-index to push it behind content */}
      <div className="absolute inset-0 -z-10">
        <BackgroundLogoBottomDark position="right" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <AnimatedDecorativeBar />
            <h1 className="uppercase text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider text-white leading-tight">
              Biznes Spa
            </h1>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Nasza strefa Spa to oaza spokoju w sercu hotelu. Po męczącym
                dniu konferencyjnym zapraszamy na relaksujące zabiegi, które
                przywrócą równowagę i energię.
              </p>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Profesjonalni terapeuci zadbają o Twoje samopoczucie, oferując
                szeroki wybór zabiegów dostosowanych do potrzeb gości
                biznesowych.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-6 relative aspect-[4/3] w-full overflow-hidden"
          >
            <Image
              src="/spa/spa-01.jpeg"
              alt="Spa & Wellness"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Images - moved from right side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Large Image */}
            <div className="relative aspect-[4/3] h-[300px] w-full overflow-hidden">
              <Image
                src="/spa/spa-06.jpg"
                alt="Strefa relaksu"
                fill
                className="object-cover"
              />
            </div>

            {/* Small Image */}
            <div className="relative aspect-[4/3] h-[300px] w-full overflow-hidden">
              <Image
                src="/spa/pool-01.jpg"
                alt="Zabiegi spa"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content - moved from left side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  Wellness & Spa
                </h2>
                <Badge className="bg-avangarda/20 text-avangarda border-avangarda/30">
                  Relaks
                </Badge>
              </div>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Nasza strefa Spa to oaza spokoju w sercu hotelu. Po męczącym
                dniu konferencyjnym zapraszamy na relaksujące zabiegi, które
                przywrócą równowagę i energię.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-sm p-4 text-center hover:bg-white/15 transition-colors"
                >
                  <service.icon className="h-6 w-6 mx-auto mb-2 text-avangarda" />
                  <p className="text-sm font-medium text-white mb-1">
                    {service.title}
                  </p>
                  <p className="text-xs text-white/70">{service.subtitle}</p>
                </motion.div>
              ))}
            </div>

            {/* Popular Treatments */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Popularne zabiegi dla gości biznesowych:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-avangarda flex-shrink-0"></div>
                    <span className="text-sm text-white/90">{treatment}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Link href={`/${lang}/rozrywka`}>
                <Button className="bg-avangarda hover:bg-avangarda/90 text-white group transition-all hover:scale-105">
                  Więcej o Wellness & Spa
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
