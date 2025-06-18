"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

interface TrustedCompaniesProps {
  dict?: any;
  lang?: string;
}

export default function TrustedCompanies({
  dict,
  lang = "pl",
}: TrustedCompaniesProps) {
  const companies = [
    {
      name: "eTravel",
      logo: "/firm-testimonials/eTravel-1.png",
      alt: "eTravel logo",
    },
    {
      name: "GladioGroup",
      logo: "/firm-testimonials/gladiogroup.png",
      alt: "GladioGroup logo",
    },
    {
      name: "InterRisk Vienna Insurance Group",
      logo: "/firm-testimonials/interrisk.png",
      alt: "InterRisk Vienna Insurance Group logo",
    },
    {
      name: "Emolium",
      logo: "/firm-testimonials/emolium.png",
      alt: "Emolium logo",
    },
    {
      name: "DeveloperGO",
      logo: "/firm-testimonials/developergo.png",
      alt: "DeveloperGO logo",
    },
    {
      name: "Iwostin Clinical Skin Care",
      logo: "/firm-testimonials/iwostin.png",
      alt: "Iwostin Clinical Skin Care logo",
    },
    {
      name: "Krüger Group",
      logo: "/firm-testimonials/kruger-1.png",
      alt: "Krüger Group logo",
    },
    {
      name: "Kaufland",
      logo: "/firm-testimonials/kaufland.jpg",
      alt: "Kaufland logo",
    },
    {
      name: "PKO Bank Polski",
      logo: "/firm-testimonials/pkobp-2.png",
      alt: "Kaufland logo",
    },
    {
      name: "Wszechnica",
      logo: "/firm-testimonials/wszechnica.png",
      alt: "Wszechnica logo",
    },
    {
      name: "FRBS",
      logo: "/firm-testimonials/frbs.png",
      alt: "Wszechnica logo",
    },
    {
      name: "AWF",
      logo: "/firm-testimonials/awf.png",
      alt: "Wszechnica logo",
    },
  ];

  return (
    <div className="bg-white w-full text-primary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex flex-col items-center">
            <AnimatedDecorativeBar />
            <h2 className="text-4xl font-alata md:text-5xl font-semibold uppercase tracking-wider mb-6 mt-4">
              Zaufali Nam
            </h2>
          </div>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-muted-foreground">
            Jesteśmy dumni z zaufania, jakim obdarzają nas renomowane firmy.
            Nasze doświadczenie w organizacji wydarzeń biznesowych sprawia, że
            jesteśmy pierwszym wyborem dla wymagających klientów.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative w-full h-24 flex items-center justify-center p-4 transition-all duration-300 rounded-lg"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.alt}
                width={220}
                height={100}
                className="max-w-full max-h-full object-contain hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Dołącz do grona zadowolonych klientów, którzy wybrali Hotel
            Avangarda jako miejsce swoich najważniejszych wydarzeń biznesowych.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
