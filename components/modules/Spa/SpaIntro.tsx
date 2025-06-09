"use client";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Download, Phone, Info, Sparkles, Dumbbell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SPA_TREATMENTS, SPA_FEATURED_SERVICES } from "@/constants";
import PoolSection from "@/components/pool-section";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface SpaIntroProps {
  dict: any;
  lang: string;
}

export default function SpaIntro({ dict, lang }: SpaIntroProps) {
  // Helper function for translations
  const t = (key: string) => getNestedValue(dict, key) || key;

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <AnimatedDecorativeBar />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-8"
            >
              {t("spa.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              {t("spa.description")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              {t("spa.description2")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[4/3] w-full overflow-hidden"
          >
            <Image
              src="/spa/spa-15.jpeg"
              alt={t("spa.title")}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Wellness Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">
            {t("spa.wellnessTitle")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-12">
            {/* Image now takes 4 columns instead of 6 */}
            <div className="lg:col-span-4 relative aspect-[4/5] w-full overflow-hidden rounded-none">
              <Image
                src="/spa/spa-02.jpeg"
                alt={t("spa.wellnessTitle")}
                fill
                className="object-cover"
              />
            </div>

            {/* Content now takes 8 columns instead of 6 */}
            <div className="lg:col-span-8">
              <h3 className="text-2xl font-medium mb-4">
                {t("spa.wellnessSubtitle")}
              </h3>
              <p className="mb-6 text-lg leading-relaxed">
                {t("spa.wellnessDescription")}
              </p>

              <Tabs defaultValue="massage" className="w-full mb-6">
                <TabsList className="w-full flex overflow-x-auto">
                  <TabsTrigger
                    value="massage"
                    className="flex-1 data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda/90 rounded-none whitespace-nowrap px-3"
                  >
                    {t("spa.treatments.massage.name")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="face"
                    className="flex-1 data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda/90 rounded-none whitespace-nowrap px-3"
                  >
                    {t("spa.treatments.face.name")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="body"
                    className="flex-1 data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda/90 rounded-none whitespace-nowrap px-3"
                  >
                    {t("spa.treatments.body.name")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="seasonal"
                    className="flex-1 data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda/90 rounded-none whitespace-nowrap px-3"
                  >
                    {t("spa.treatments.seasonal.name")}
                  </TabsTrigger>
                  <TabsTrigger
                    value="rituals"
                    className="flex-1 data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda/90 rounded-none whitespace-nowrap px-3"
                  >
                    {t("spa.treatments.rituals.name")}
                  </TabsTrigger>
                </TabsList>
                {SPA_TREATMENTS.map((category, index) => (
                  <TabsContent key={index} value={category.id}>
                    <div className="p-4 bg-pink-50">
                      <h4 className="text-xl font-medium mb-2">
                        {t(category.nameKey)}
                      </h4>
                      <p className="mb-4">{t(category.descriptionKey)}</p>
                      <div className="flex flex-wrap gap-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            {lang === "pl" ? "Zakres cenowy:" : "Price range:"}
                          </p>
                          <p className="font-medium text-avangarda">
                            {t(category.priceRangeKey)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            {lang === "pl" ? "Czas trwania:" : "Duration:"}
                          </p>
                          <p className="font-medium leading-relaxed">
                            {t(category.durationKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>

              <Button
                variant="outline"
                className="w-fit sm:w-auto flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                {t("spa.downloadCatalog")}
              </Button>
            </div>
          </div>

          {/* Added subtitle for bestsellers */}
          <h3 className="text-2xl font-medium mb-6 text-center">
            {lang === "pl" ? "Nasze bestsellery" : "Our bestsellers"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPA_FEATURED_SERVICES.map((service, index) => (
              <Card key={index} className="overflow-hidden rounded-none">
                <div className="relative h-64 w-full">
                  <Image
                    src={service.imageKey || "/placeholder.svg"}
                    alt={t(service.nameKey)}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <h4 className="font-medium mb-1 text-lg">
                    {t(service.nameKey)}
                  </h4>
                  <p className="text-md text-gray-600 mb-2">
                    {t(service.descriptionKey)}
                  </p>
                  <p className="text-avangarda font-medium leading-relaxed">
                    {t(service.priceKey)} / {t(service.durationKey)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Pool Section - Moved to be first in the correct order */}
        <PoolSection lang={lang} dict={dict} />
        {/* Salt Room Section (Grota) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">
            {t("spa.saltRoomTitle")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-medium mb-4">
                {t("spa.saltRoomSubtitle")}
              </h3>
              <p className="mb-4 text-lg leading-relaxed">
                {t("spa.saltRoomDescription")}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0">
                    <Info className="h-5 w-5 text-avangarda mt-1" />
                  </div>
                  <p className="text-md leading-relaxed">
                    <span className="font-medium">
                      {t("spa.saltRoomBenefits.respiratory.title")}
                    </span>{" "}
                    - {t("spa.saltRoomBenefits.respiratory.description")}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0">
                    <Info className="h-5 w-5 text-avangarda mt-1" />
                  </div>
                  <p className="text-md leading-relaxed">
                    <span className="font-medium">
                      {t("spa.saltRoomBenefits.immunity.title")}
                    </span>{" "}
                    - {t("spa.saltRoomBenefits.immunity.description")}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0">
                    <Info className="h-5 w-5 text-avangarda mt-1" />
                  </div>
                  <p className="text-md leading-relaxed">
                    <span className="font-medium">
                      {t("spa.saltRoomBenefits.stress.title")}
                    </span>{" "}
                    - {t("spa.saltRoomBenefits.stress.description")}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="bg-pink-50 p-4">
                  <p className="font-medium leading-relaxed">
                    {t("spa.saltRoomPrices.individual.title")}
                  </p>
                  <p className="text-secondary font-medium">
                    {t("spa.saltRoomPrices.individual.price")}
                  </p>
                </div>
                <div className="bg-pink-50 p-4">
                  <p className="font-medium leading-relaxed">
                    {t("spa.saltRoomPrices.family.title")}
                  </p>
                  <p className="text-secondary font-medium">
                    {t("spa.saltRoomPrices.family.price")}
                  </p>
                </div>
                <div className="bg-pink-50 p-4">
                  <p className="font-medium leading-relaxed">
                    {t("spa.saltRoomPrices.fivepack.title")}
                  </p>
                  <p className="text-secondary font-medium">
                    {t("spa.saltRoomPrices.fivepack.price")}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[3/4] md:h-[500px] w-full overflow-hidden order-2 lg:order-1">
              <Image
                src="/spa/spa-1.png"
                alt={t("spa.saltRoomTitle")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Gym Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Siłownia</h2>

          {/* Images at the top, side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative aspect-[5/3] w-full overflow-hidden">
              <Image
                src="/gym/gym-06.jpg"
                alt="Siłownia"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[5/3] w-full overflow-hidden">
              <Image
                src="/gym/gym-05.jpg"
                alt="Sprzęt fitness"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text content below in two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div>
              <h3 className="text-2xl font-medium mb-4">
                Nowoczesna siłownia Matrix
              </h3>
              <p className="mb-6 text-lg leading-relaxed">
                Zapraszamy do naszej nowoczesnej siłowni, wyposażonej w
                urządzenia firmy Matrix. Do Państwa dyspozycji są:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span>bieżnia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span>schody treningowe</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span>orbitrec</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span>rower poziomy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span>wiosła</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span>stacja – trener funkcjonalny</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                  <span>atlas</span>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0">
                    <Clock className="h-5 w-5 text-avangarda mt-1" />
                  </div>
                  <div>
                    <p className="font-medium">Siłownia czynna jest:</p>
                    <p>poniedziałek-sobota 7.00-22.00</p>
                    <p>niedziela 7.00-20.00</p>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-medium mb-4">Cennik</h4>
              <div className="flex flex-wrap gap-4">
                <div className="bg-pink-50 p-4">
                  <p className="font-medium">Dla gości hotelowych</p>
                  <p className="text-avangarda font-medium">BEZPŁATNY wstęp</p>
                </div>
                <div className="bg-pink-50 p-4">
                  <p className="font-medium">Wejście jednorazowe</p>
                  <p className="text-avangarda font-medium">15 zł/1h</p>
                </div>
                <div className="bg-pink-50 p-4">
                  <p className="font-medium">Karnet miesięczny</p>
                  <p className="text-avangarda font-medium">
                    50 zł (bez limitu czasu)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Opening Hours & Prices Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 bg-pink-50 p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="h-7 w-7 text-avangarda" />
            <h2 className="text-3xl font-semibold text-center">
              {t("spa.hoursTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="rounded-none">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-avangarda" />
                  {t("spa.hours.title.spa")}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">
                      {t("spa.hours.weekdaysLabel")}
                    </p>
                    <p>{t("spa.hours.spa.weekdays")}</p>
                  </div>
                  <div>
                    <p className="font-medium">
                      {t("spa.hours.weekendsLabel")}
                    </p>
                    <p>{t("spa.hours.spa.weekends")}</p>
                  </div>
                  <div className="pt-2">
                    <Badge className="bg-pink-100 text-avangarda hover:bg-pink-200 rounded-none">
                      {t("spa.hours.prices.spa")}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-none">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-avangarda" />
                  {t("spa.hours.title.saltRoom")}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">
                      {t("spa.hours.weekdaysLabel")}
                    </p>
                    <p>{t("spa.hours.saltRoom.weekdays")}</p>
                  </div>
                  <div>
                    <p className="font-medium">
                      {t("spa.hours.weekendsLabel")}
                    </p>
                    <p>{t("spa.hours.saltRoom.weekends")}</p>
                  </div>
                  <div className="pt-2">
                    <Badge className="bg-pink-100 text-avangarda hover:bg-pink-200 rounded-none">
                      {t("spa.hours.prices.saltRoom")}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-none">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Sparkles className="h-5 w-5 mr-2 text-avangarda" />
                  {t("spa.hours.title.manicure")}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">
                      {t("spa.hours.weekdaysLabel")}
                    </p>
                    <p>{t("spa.hours.manicure.weekdays")}</p>
                  </div>
                  <div>
                    <p className="font-medium">
                      {t("spa.hours.weekendsLabel")}
                    </p>
                    <p>{t("spa.hours.manicure.weekends")}</p>
                  </div>
                  <div className="pt-2">
                    <Badge className="bg-pink-100 text-avangarda hover:bg-pink-200 rounded-none">
                      {t("spa.hours.prices.manicure")}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-none">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Dumbbell className="h-5 w-5 mr-2 text-avangarda" />
                  Siłownia
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Poniedziałek - Sobota</p>
                    <p>7:00 - 22:00</p>
                  </div>
                  <div>
                    <p className="font-medium">Niedziela</p>
                    <p>7:00 - 20:00</p>
                  </div>
                  <div className="pt-2">
                    <Badge className="bg-pink-100 text-avangarda hover:bg-pink-200 rounded-none">
                      Goście hotelowi: BEZPŁATNIE
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">{t("spa.priceNote")}</p>
            <div className="mt-4 flex justify-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                asChild
              >
                <Link
                  href="tel:+48505158200"
                  className="flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  {t("spa.phoneReservation")}
                </Link>
              </Button>
              {/* <Button size="sm" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {t("spa.onlineReservation")}
              </Button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
