"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Calendar,
  Camera,
  Phone,
  Download,
  Star,
  TreePine,
} from "lucide-react";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

interface EventTypesProps {
  dict?: any;
  lang?: string;
}

export default function EventTypes({ dict, lang = "pl" }: EventTypesProps) {
  const phoneNumber = "+48 574 383 282";

  const eventTypes = [
    {
      id: "wesela",
      title: "Wesela",
      subtitle: "Niezapomniane chwile w wyjątkowej scenerii",
      description:
        "Hotel Avangarda to idealne miejsce na Twoje wymarzone wesele. Oferujemy eleganckie sale bankietowe, profesjonalną obsługę i niezapomnianą atmosferę. Nasze doświadczenie w organizacji wesel gwarantuje, że Twój dzień będzie wyjątkowy.",
      features: [
        "Sale bankietowe do 500 osób",
        "Profesjonalna obsługa kelnerska",
        "Menu weselne dopasowane do gustu",
        "Dekoracje i aranżacja sali",
        "Parkiet taneczny i nagłośnienie",
        "Pokoje dla Młodej Pary",
        "Parking dla gości",
        "Koordynator wesela",
      ],
      packages: [
        {
          name: "Pakiet Klasyczny",
          price: "od 180 zł/os",
          description: "Menu 3-daniowe + napoje + obsługa",
        },
        {
          name: "Pakiet Premium",
          price: "od 250 zł/os",
          description: "Menu 4-daniowe + bar otwarty + dekoracje",
        },
        {
          name: "Pakiet Exclusive",
          price: "od 350 zł/os",
          description: "Menu degustacyjne + premium bar + full service",
        },
      ],
      icon: Heart,
      color: "bg-pink-50",
      accentColor: "text-pink-600",
      image: "/wedding/wed-room-04.jpg",
      galleryImages: ["/wedding/wed-room-03.jpg", "/wedding/wed-room-04.jpg"],
      imagePosition: "left",
    },
    {
      id: "komunie",
      title: "Komunie",
      subtitle: "Świętowanie ważnych momentów w życiu",
      description:
        "Pierwsza Komunia Święta to wyjątkowy dzień w życiu dziecka i całej rodziny. W Hotel Avangarda zapewnimy uroczystą oprawę tego wydarzenia. Nasze sale i menu są dostosowane do potrzeb rodzinnych uroczystości.",
      features: [
        "Sale na 50-200 osób",
        "Menu dostosowane do dzieci i dorosłych",
        "Specjalne atrakcje dla najmłodszych",
        "Dekoracje tematyczne",
        "Strefa zabaw dla dzieci",
        "Fotograf na życzenie",
        "Tort komunijny",
        "Animacje dla dzieci",
      ],
      packages: [
        {
          name: "Pakiet Rodzinny",
          price: "od 120 zł/os",
          description: "Menu 2-daniowe + napoje + animacje",
        },
        {
          name: "Pakiet Uroczysty",
          price: "od 160 zł/os",
          description: "Menu 3-daniowe + tort + dekoracje",
        },
        {
          name: "Pakiet Kompletny",
          price: "od 220 zł/os",
          description: "Menu premium + animacje + fotograf",
        },
      ],
      icon: Star,
      color: "bg-blue-50",
      accentColor: "text-blue-600",
      image: "/wedding/wed-room-07.jpg",
      galleryImages: ["/wedding/wed-room-04.jpg", "/wedding/wed-room-03.jpg"],
      imagePosition: "right",
    },
    {
      id: "plenerowe",
      title: "Przyjęcia Plenerowe",
      subtitle: "Celebracja pod gwiazdami",
      description:
        "Wykorzystaj piękne otoczenie Hotel Avangarda do organizacji niezapomnianego przyjęcia plenerowego. Nasze ogrody i tereny zewnętrzne tworzą idealną scenografię dla Twojego wydarzenia pod gołym niebem.",
      features: [
        "Przestronne ogrody i tarasy",
        "Namioty eventowe na każdą pogodę",
        "Grille i kuchnia plenerowa",
        "Oświetlenie dekoracyjne",
        "Scena i nagłośnienie",
        "Strefy lounge i chill-out",
        "Bar mobilny",
        "Catering plenerowy",
      ],
      packages: [
        {
          name: "Pakiet Ogrodowy",
          price: "od 100 zł/os",
          description: "Grill + napoje + podstawowa obsługa",
        },
        {
          name: "Pakiet Plenerowy",
          price: "od 150 zł/os",
          description: "Catering + namiot + dekoracje",
        },
        {
          name: "Pakiet Exclusive Outdoor",
          price: "od 200 zł/os",
          description: "Premium catering + full service + animacje",
        },
      ],
      icon: TreePine,
      color: "bg-green-50",
      accentColor: "text-green-600",
      image: "/outdoor/out-02.jpg",
      galleryImages: ["/outdoor/out-01.jpg", "/outdoor/out-04.jpg"],
      imagePosition: "left",
    },
  ];

  return (
    <div className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Event Types Sections */}
        <div className="space-y-20 px-4 sm:px-0">
          {eventTypes.map((event, index) => {
            const IconComponent = event.icon;
            const isImageLeft = event.imagePosition === "left";

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-20"
              >
                {/* Main Content */}
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12`}
                >
                  {/* Image - Left or Right based on imagePosition */}
                  <div
                    className={`${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Text Content - Right or Left based on imagePosition */}
                  <div
                    className={`space-y-6 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div>
                      <AnimatedDecorativeBar />
                      <div className="flex items-center gap-2 mb-2">
                        <h1 className="uppercase text-4xl md:text-5xl font-semibold tracking-wider mb-8">
                          {event.title}
                        </h1>
                      </div>
                      <p className="text-lg text-gray-600 mb-4">
                        {event.subtitle}
                      </p>
                      <p className="text-lg leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3">Co oferujemy:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {event.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Packages Section */}
                {/* <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h4 className="font-medium mb-4 text-center">
                    Pakiety {event.title}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {event.packages.map((pkg, i) => (
                      <div
                        key={i}
                        className="bg-white p-4 rounded-lg shadow-sm"
                      >
                        <h5 className="font-medium mb-2">{pkg.name}</h5>
                        <p className="text-sm text-gray-600 mb-3">
                          {pkg.description}
                        </p>
                        <p className="font-semibold text-avangarda">
                          {pkg.price}
                        </p>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Gallery Preview */}
                <div>
                  <h4 className="font-medium mb-4">Galeria {event.title}</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {event.galleryImages.map((img, i) => (
                      <div
                        key={i}
                        className="relative aspect-video w-full overflow-hidden"
                      >
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`${event.title} ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center px-4 sm:px-0"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-avangarda"></div>
            <h2 className="text-3xl font-semibold text-center">
              Skontaktuj się z nami
            </h2>
            <div className="h-px flex-1 bg-avangarda"></div>
          </div>

          <p className="text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
            Gotowy na organizację swojego wymarzonego wydarzenia? Skontaktuj się
            z nami, aby omówić szczegóły i zarezerwować termin.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {phoneNumber}
            </Button>

            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Pobierz ofertę
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
