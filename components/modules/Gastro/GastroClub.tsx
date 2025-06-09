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
import BackgroundLogoBottomDark from "@/components/background-logo-bottom-dark";

// Testimonials data for Club Coola
const testimonials = [
  {
    id: 1,
    name: "Tomasz Wiśniewski",
    location: "Gdańsk",
    rating: 5,
    text: "Klub Coola to fantastyczne miejsce na wieczór z przyjaciółmi! Kręgle były w doskonałym stanie, a jedzenie zaskoczyło nas jakością. Atmosfera jest niepowtarzalna - połączenie dobrej zabawy z wyśmienitą kuchnią.",
    date: "Grudzień 2024",
  },
  {
    id: 2,
    name: "Katarzyna Zielińska",
    location: "Wrocław",
    rating: 5,
    text: "Organizowaliśmy tu imprezę firmową i wszystko przebiegło perfekcyjnie. Obsługa była bardzo profesjonalna, a różnorodność atrakcji sprawiła, że każdy znalazł coś dla siebie. Zdecydowanie polecamy!",
    date: "Listopad 2024",
  },
];

export default function RestaurantFort() {
  return (
    <Container className="relative mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 text-white w-full lg:py-20">
      {/* Background Image - Add z-index to push it behind content */}
      <div className="absolute inset-0 -z-10">
        <BackgroundLogoBottomDark position="right" />
      </div>
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 px-4 sm:px-0">
          <div>
            <AnimatedDecorativeBar />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-8 text-white"
            >
              Klub Coola
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed mb-6 text-white/90"
            >
              Zapraszamy do Club Coola, gdzie tradycyjna kuchnia polska spotyka
              się z nowoczesnymi smakami. Nasza restauracja oferuje wyjątkowe
              dania przygotowywane z najświeższych, lokalnych składników. Ciesz
              się autentycznymi smakami w przytulnej atmosferze z widokiem na
              malownicze otoczenie.
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
                className="border-white/30 text-white hover:bg-white/10 flex items-center gap-2"
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
              <div className="bg-white/10 backdrop-blur-sm p-4 ">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-white">Godziny otwarcia</h3>
                </div>
                <p className="text-sm text-white/80">
                  Poniedziałek – Piątek: 12:00 – 22:00
                </p>
                <p className="text-sm text-white/80">
                  Sobota - Niedziela: 11:00 – 23:00
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 ">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium text-white">Rezerwacje</h3>
                </div>
                <p className="text-sm text-white/80">
                  Tel: 29 752 50 34 (recepcja hotelu)
                </p>
                <p className="text-sm text-white/80">
                  klubcoola@hotelavangarda.pl
                </p>
              </div>
            </motion.div>
          </div>

          {/* Main Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[4/3] w-full overflow-hidden "
          >
            <Image
              src="/klub/klub-01.JPG"
              alt="Klub Coola - wnętrze"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
            />
          </motion.div>
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
            <h2 className="text-2xl font-semibold text-center text-white">
              Galeria Smaków
            </h2>
            <div className="h-px flex-1 bg-avangarda"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Row 1 */}
            <div className="relative aspect-[16/10] overflow-hidden ">
              <Image
                src="/klub/klub-02.JPG"
                alt="Wnętrze klubu"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[16/10] overflow-hidden ">
              <Image
                src="/klub/klub-03.JPG"
                alt="Strefa gier"
                fill
                className="object-cover"
              />
            </div>

            {/* Row 2 */}
            <div className="relative aspect-[16/10] overflow-hidden ">
              <Image
                src="/klub/klub-04.JPG"
                alt="Bar i restauracja"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative aspect-[16/10] overflow-hidden ">
              <Image
                src="/klub/klub-01.JPG"
                alt="Kręgielnia"
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
            <div className="h-px flex-1 bg-avangarda"></div>
            <Quote className="h-8 w-8 text-avangarda" />
            <h2 className="text-2xl font-semibold text-center text-white">
              Opinie Gości
            </h2>
            <div className="h-px flex-1 bg-avangarda"></div>
          </div>

          <p className="text-center max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-white/80">
            Poznaj opinie naszych gości o niezapomnianych wieczorach w Klubie
            Coola
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm  p-6  relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="h-6 w-6 text-avangarda/40" />
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
                <blockquote className="text-white/90 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-white/70">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-white/60">{testimonial.date}</p>
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
            <p className="text-lg text-white/80 mb-6">
              Dołącz do grona zadowolonych gości i zarezerwuj stolik w Klubie
              Coola!
            </p>
            <Button
              size="lg"
              className="bg-avangarda hover:bg-avangarda/90 text-white transition-all hover:scale-105 active:scale-95"
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
