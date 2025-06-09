"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Download, Users, Camera, MapPin, Heart, Phone } from "lucide-react";
import { pl, enUS } from "date-fns/locale";
import { VENUES_DATA, WEDDING_GALLERY } from "@/constants";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface EventsIntroProps {
  dict: any;
  lang: string;
}

export default function EventsIntro({ dict, lang }: EventsIntroProps) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [isHoveringContact, setIsHoveringContact] = useState(false);
  const phoneNumber = "+48 574 383 282";

  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

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
              {t("events.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              {t("events.description")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                {t("events.downloadOffer")}
              </Button>
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
              src="/wedding/wed-room-04.jpg"
              alt={t("events.title")}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Venue Capacity Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            {/* <Users className="h-7 w-7 text-avangarda" /> */}
            <h2 className="text-3xl font-semibold text-center">
              {t("events.venuesTitle")}
            </h2>
          </div>

          <p className="text-center leading-relaxed max-w-3xl mx-auto mb-12 text-lg">
            {t("events.venuesDescription")}
          </p>

          <Tabs defaultValue="ballroom" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-white rounded-lg p-1">
              {Object.keys(VENUES_DATA).map((venueKey) => (
                <TabsTrigger
                  key={venueKey}
                  value={venueKey}
                  className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda rounded-none"
                >
                  {t(VENUES_DATA[venueKey].nameKey)}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(VENUES_DATA).map(([key, venue]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="relative aspect-[4/3] md:h-[400px] w-full overflow-hidden">
                    <Image
                      // Placeholder image for the venue
                      // In a real application, you would replace this with the actual image source
                      src="/wedding/wed-room-03.jpg"
                      alt={t(venue.nameKey)}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        {t(venue.nameKey)}
                      </h3>
                      <p className="text-lg leading-relaxed">
                        {t(`events.venues.${key}.description`)}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-pink-50 p-4 rounded-none text-center">
                        <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                        <p className="text-sm text-avangarda">
                          {t("events.venueInfo.maxGuests")}
                        </p>
                        <p className="text-xl font-semibold">
                          {venue.capacity} {t("events.venueInfo.people")}
                        </p>
                      </div>

                      <div className="bg-pink-50 p-4 rounded-none text-center">
                        <MapPin className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                        <p className="text-sm text-avangarda">
                          {t("events.venueInfo.area")}
                        </p>
                        <p className="text-xl font-semibold">
                          {t(venue.sizeKey)}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">
                        {t("events.venueInfo.amenities")}:
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {venue.featuresKeys.map((featureKey, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-pink-500"></div>
                            <span>{t(featureKey)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-3xl font-semibold text-center">
              {t("events.galleryTitle")}
            </h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="mb-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden mb-4">
              <Image
                src={WEDDING_GALLERY[selectedImage].src || "/placeholder.svg"}
                alt={t(WEDDING_GALLERY[selectedImage].altKey)}
                fill
                className="object-cover transition-all duration-500"
              />
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <h3 className="text-xl font-medium">
                  {t(WEDDING_GALLERY[selectedImage].titleKey)}
                </h3>
              </div> */}
            </div>

            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {WEDDING_GALLERY.map((image, index) => (
                <div
                  key={index}
                  className={`relative aspect-square cursor-pointer overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-avangarda"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={t(image.altKey)}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center flex flex-col items-center justify-center">
            <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
              {t("events.downloadOfferText")}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                {t("events.downloadOffer")}
              </Button>

              <Link
                href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="secondary"
                  className="flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                  onMouseEnter={() => setIsHoveringContact(true)}
                  onMouseLeave={() => setIsHoveringContact(false)}
                >
                  <Phone className="h-4 w-4" />
                  {isHoveringContact ? phoneNumber : t("events.contactUs")}
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
