"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Utensils,
  Calendar,
  Clock,
  Users,
  ChefHat,
  Wine,
  MapPin,
  Star,
  Quote,
  Phone,
} from "lucide-react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

// Testimonials data for Bar Przystań
const testimonials = [
  {
    id: 1,
    name: "Michał Kowalczyk",
    location: "Augustów",
    rating: 5,
    text: "Bar Przystań to magiczne miejsce! Świeże ryby prosto z Narwi, piękny widok na rzekę i niezapomniana atmosfera. Szczególnie polecam grillowane sandacze - to prawdziwa uczta dla podniebienia. Idealne miejsce na romantyczną kolację.",
    date: "Sierpień 2024",
  },
  {
    id: 2,
    name: "Agnieszka Nowak",
    location: "Suwałki",
    rating: 5,
    text: "Spędziliśmy tu cudowny wieczór z rodziną. Taras nad rzeką, świeże powietrze i pyszne dania z grilla sprawiły, że poczuliśmy się jak na wakacjach. Obsługa bardzo miła, a dzieci uwielbiały obserwować łódki na rzece.",
    date: "Lipiec 2024",
  },
];

export default function GastroBarPrzystan() {
  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white text-primary w-full lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 px-4 sm:px-0">
          {/* Main Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[4/3] w-full overflow-hidden "
          >
            <Image
              src="/outdoor/out-01.jpg"
              alt="Bar Przystań - widok na rzekę"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
          </motion.div>
          <div>
            <AnimatedDecorativeBar />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-8 text-primary"
            >
              Bar Przystań Avangarda
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed mb-6 text-slate-600"
            >
              Zapraszamy do Bar Przystań Avangarda, gdzie świeże ryby z Narwi
              spotykają się z tradycyjną kuchnią grillową. Nasza przystań
              oferuje wyjątkowe dania przygotowywane z najświeższych, lokalnych
              składników. Ciesz się autentycznymi smakami w malowniczej scenerii
              nad rzeką.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button className="bg-avangarda hover:bg-avangarda/90 flex items-center gap-2">
                <Utensils className="h-4 w-4" />
                Zobacz Menu
              </Button>
              <Button
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Zarezerwuj stolik
              </Button>
            </motion.div>

            {/* Quick Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="bg-pink-50 p-4 ">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Godziny otwarcia</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Maj - Wrzesień: 11:00 – 22:00
                </p>
                <p className="text-sm text-slate-600">Sezon letni</p>
              </div>
              <div className="bg-pink-50 p-4 ">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-primary">Rezerwacje</h3>
                </div>
                <p className="text-sm text-slate-600">
                  Tel: 29 752 50 34 (recepcja hotelu)
                </p>
                <p className="text-sm text-slate-600">
                  przystan@hotelavangarda.pl
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Image Gallery Section - 4 images in 2 rows, full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16 px-4 sm:px-0"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-avangarda"></div>
            <h2 className="text-2xl font-semibold text-center text-primary">
              Galeria Przystani
            </h2>
            <div className="h-px flex-1 bg-avangarda"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Row 1 */}
            <div className="relative aspect-[16/10] overflow-hidden ">
              <Image
                src="/outdoor/out-03.jpg"
                alt="Taras nad rzeką"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[16/10] overflow-hidden ">
              <Image
                src="/outdoor/out-04.jpg"
                alt="Grill i świeże ryby"
                fill
                className="object-cover"
              />
            </div>

            {/* Row 2 */}
            <div className="relative aspect-[16/10] overflow-hidden ">
              <Image
                src="/outdoor/out-02.jpg"
                alt="Widok na Narew"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[16/10] overflow-hidden ">
              <Image
                src="/outdoor/out-01.jpg"
                alt="Przystań wieczorem"
                fill
                className="object-cover"
              />
            </div>
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
            Poznaj opinie naszych gości o niezapomnianych chwilach spędzonych w
            Bar Przystań Avangarda
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
              Dołącz do grona zadowolonych gości i zarezerwuj stolik nad Narwią!
            </p>
            <Button
              size="lg"
              className="bg-avangarda hover:bg-avangarda/90 transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="mr-2 h-4 w-4" />
              Zarezerwuj stolik
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
}
