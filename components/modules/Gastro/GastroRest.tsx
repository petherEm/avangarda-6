"use client";

import { Container } from "@/components/container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, ChefHat, Utensils, Star, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

// Helper function to get nested dictionary values using dot notation
const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

interface RestauracjaDzikaRozaProps {
  dict?: any;
  lang?: string;
}

// Mock specialties data - replace with your SPECIALTIES_DATA import
const SPECIALTIES_DATA = [
  {
    id: "polish",
    nameKey: "Tradycyjna kuchnia polska",
    descriptionKey:
      "Autentyczne polskie smaki przygotowywane według tradycyjnych receptur z najświeższych, lokalnych składników.",
    image: "/restaurant/rest-07.jpg",
    tags: ["Tradycyjne", "Lokalne składniki", "Sezonowe"],
    priceKey: "45-85 zł",
  },
  {
    id: "seasonal",
    nameKey: "Menu sezonowe",
    descriptionKey:
      "Dania przygotowywane z sezonowych składników, które zmieniają się wraz z porami roku, gwarantując świeżość i wyjątkowy smak.",
    image: "/restaurant/rest-08.jpg",
    tags: ["Sezonowe", "Świeże", "Limitowane"],
    priceKey: "55-95 zł",
  },
  {
    id: "kids",
    nameKey: "Menu dla dzieci",
    descriptionKey:
      "Specjalnie przygotowane dania dla najmłodszych gości, zdrowe i smaczne, dostosowane do dziecięcych preferencji.",
    image: "/restaurant/rest-12.jpg",
    tags: ["Dla dzieci", "Zdrowe", "Kolorowe"],
    priceKey: "25-35 zł",
  },
  {
    id: "desserts",
    nameKey: "Desery domowe",
    descriptionKey:
      "Wyjątkowe desery przygotowywane przez naszych cukierników, od klasycznych po nowoczesne interpretacje.",
    image: "/restaurant/rest-11.jpg",
    tags: ["Domowe", "Słodkie", "Artystyczne"],
    priceKey: "18-28 zł",
  },
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Anna Kowalska",
    location: "Warszawa",
    rating: 5,
    text: "Restauracja Dzika Róża to prawdziwa perła! Kotlet schabowy był idealnie przygotowany, a obsługa niezwykle profesjonalna. Atmosfera restauracji jest elegancka, ale jednocześnie przytulna. Zdecydowanie wrócimy na kolejną kolację.",
    date: "Listopad 2024",
  },
  {
    id: 2,
    name: "Marek Nowak",
    location: "Kraków",
    rating: 5,
    text: "Byliśmy tu na uroczystości rodzinnej i wszystko było perfekcyjne. Menu sezonowe zachwyciło nas smakami, a desery domowe to prawdziwe dzieła sztuki. Polecam każdemu, kto szuka wyjątkowych doznań kulinarnych.",
    date: "Październik 2024",
  },
];

const RestauracjaDzikaRoza = ({
  dict,
  lang = "pl",
}: RestauracjaDzikaRozaProps) => {
  const [activeImage, setActiveImage] = useState(0);

  // Helper function for translations
  const t = (key: string) => (dict ? getNestedValue(dict, key) || key : key);

  const restaurantImages = [
    {
      src: "/restaurant/rest-01.jpg",
      alt: "Eleganckie wnętrze restauracji",
    },
    {
      src: "/restaurant/rest-10.jpg",
      alt: "Eleganckie wnętrze restauracji 2",
    },
    {
      src: "/restaurant/rest-03.jpg",
      alt: "Bar restauracyjny",
    },
    {
      src: "/restaurant/rest-09.jpg",
      alt: "Prywatna sala restauracyjna",
    },
  ];

  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16 px-4 sm:px-0">
          <div>
            <AnimatedDecorativeBar />
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="uppercase text-4xl md:text-5xl font-semibold tracking-wider"
              >
                Restauracja Dzika Róża
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Image
                  src="/rest-logos/dzika.png"
                  alt="Logo Restauracji Dzika Róża"
                  width={220}
                  height={45}
                  className="hidden sm:block flex-shrink-1"
                />
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed"
            >
              Zapraszamy do eleganckiej Restauracji Dzika Róża, gdzie tradycyjna
              kuchnia polska spotyka się z nowoczesnymi technikami kulinarnymi.
              Nasze menu łączy autentyczne smaki z artystyczną prezentacją,
              tworząc niezapomniane doświadczenia kulinarne w stylowym wnętrzu.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-8 bg-pink-50 p-2 sm:p-6"
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium mb-2">Poniedziałek - Piątek</h3>
                <p>12:00 - 22:00</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Sobota - Niedziela</h3>
                <p>11:00 - 23:00</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <Link href={`/${lang}/menu`}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-fit transition-all hover:scale-105 active:scale-95"
                >
                  Zobacz Menu
                </Button>
              </Link>

              <div className="flex items-center gap-2 text-lg">
                <Phone className="w-5 h-5 text-avangarda" />
                <Link href="#">29 752 50 34</Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specialties Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 px-4 sm:px-0"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <ChefHat className="h-8 w-8 text-avangarda" />
            <h2 className="text-3xl font-semibold text-center">
              Nasze Specjalności
            </h2>
          </div>

          <p className="text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            Odkryj bogactwo smaków w naszej restauracji. Od tradycyjnych
            polskich dań po nowoczesne interpretacje klasycznych przepisów -
            każde danie to kulinarna podróż przez najlepsze smaki regionu.
          </p>

          <Tabs defaultValue="polish" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8 bg-white p-1">
              <TabsTrigger
                value="polish"
                className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda rounded-none"
              >
                Tradycyjne
              </TabsTrigger>

              <TabsTrigger
                value="seasonal"
                className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda rounded-none"
              >
                Sezonowe
              </TabsTrigger>
              <TabsTrigger
                value="kids"
                className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda rounded-none"
              >
                Dla dzieci
              </TabsTrigger>
              <TabsTrigger
                value="desserts"
                className="data-[state=active]:bg-transparent data-[state=active]:text-avangarda data-[state=active]:border-b-2 data-[state=active]:border-b-avangarda rounded-none"
              >
                Desery
              </TabsTrigger>
            </TabsList>

            {SPECIALTIES_DATA.map((specialty) => (
              <TabsContent
                key={specialty.id}
                value={specialty.id}
                className="mt-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={specialty.image || "/placeholder.svg"}
                      alt={specialty.nameKey}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">
                      {specialty.nameKey}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {specialty.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="bg-pink-50 border-none"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-lg leading-relaxed">
                      {specialty.descriptionKey}
                    </p>

                    <div className="pt-4">
                      <Link href={`/${lang}/menu#${specialty.id}`}>
                        <Button
                          className="mt-2 w-fit transition-all hover:scale-105 active:scale-95 bg-avangarda hover:bg-avangarda/90"
                          size="lg"
                        >
                          <Utensils className="mr-2 h-4 w-4" />
                          Zobacz w menu
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Restaurant Gallery Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 px-4 sm:px-0"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Wnętrza Restauracji
          </h2>

          <div className="relative aspect-[16/9] w-full overflow-hidden mb-4">
            <Image
              src={restaurantImages[activeImage].src || "/placeholder.svg"}
              alt={restaurantImages[activeImage].alt}
              fill
              className="object-cover transition-all duration-500"
            />
          </div>

          <div className="grid grid-cols-4 gap-2">
            {restaurantImages.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-[4/3] cursor-pointer overflow-hidden border-2 ${
                  activeImage === index
                    ? "border-avangarda"
                    : "border-transparent"
                }`}
                onClick={() => setActiveImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 px-4 sm:px-0"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Quote className="h-8 w-8 text-avangarda" />
            <h2 className="text-3xl font-semibold text-center">Opinie Gości</h2>
          </div>

          <p className="text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-slate-600">
            Poznaj opinie naszych gości o doświadczeniach kulinarnych w
            Restauracji Dzika Róża
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-pink-50 p-6  relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="h-6 w-6 text-avangarda" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-avangarda text-avangarda"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-600">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-500">{testimonial.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-slate-600 mb-6">
              Dołącz do grona zadowolonych gości i zarezerwuj stolik już dziś!
            </p>
            <Link href={`/${lang}/rezerwacja`}>
              <Button
                size="lg"
                className="bg-avangarda hover:bg-avangarda/90 transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="mr-2 h-4 w-4" />
                Zarezerwuj stolik
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
};

export default RestauracjaDzikaRoza;
