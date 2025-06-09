"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Calendar,
  MessageCircle,
  ArrowRight,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ConferenceCtaProps {
  className?: string;
}

export default function CTABusiness({ className = "" }: ConferenceCtaProps) {
  return (
    <section className={`w-full ${className}`}>
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black text-white">
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            {/* Header */}
            <div className="mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              >
                Skontaktuj się z nami
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
              >
                Nasz doświadczony zespół pomoże Ci wybrać idealną salę i
                dopasować wyposażenie do Twoich potrzeb. Zapewniamy
                profesjonalną obsługę i kompleksowe wsparcie przy organizacji
                wydarzeń.
              </motion.p>
            </div>

            {/* Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            >
              <Link href="tel:+48123456789">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-fit transition-all hover:scale-105 active:scale-95"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Zadzwoń do nas
                </Button>
              </Link>
              <Link href="mailto:kontakt@avangarda.pl">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-fit transition-all hover:scale-105 active:scale-95"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Napisz do nas
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
