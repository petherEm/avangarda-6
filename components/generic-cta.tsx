"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Phone } from "lucide-react";

interface GenericCTAProps {
  header: string;
  leadText: string;
  phoneNumber: string;
  downloadOffer?: string;
}

const GenericCTA = ({
  header,
  leadText,
  phoneNumber,
  downloadOffer,
}: GenericCTAProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className="text-center px-4 sm:px-0 py-0 lg:py-16"
    >
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="h-px flex-1 bg-avangarda"></div>
        <h2 className="text-4xl font-semibold text-center">{header}</h2>
        <div className="h-px flex-1 bg-avangarda"></div>
      </div>

      <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
        {leadText}
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Button variant="outline" className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          {phoneNumber}
        </Button>

        {downloadOffer && (
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            {downloadOffer}
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default GenericCTA;
