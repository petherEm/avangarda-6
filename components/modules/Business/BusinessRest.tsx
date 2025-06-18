"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Wine,
  Clock,
  Music,
  Coffee,
  Users,
  Utensils,
  Flame,
  TreePine,
  Fish,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

interface BusinessEntertainmentProps {
  dict?: any;
  lang?: string;
}

export default function BusinessEntertainment({
  dict,
  lang = "pl",
}: BusinessEntertainmentProps) {
  const [selectedTab, setSelectedTab] = useState<string>("club");
  const phoneNumber = "+48 29 752 50 34";

  return (
    <div className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Introduction Section - Image on left, text on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 px-4 sm:px-0">
          {/* Image on the left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-auto"
          >
            <div className="relative aspect-square w-full h-[460px]  overflow-hidden">
              <Image
                src="/klub/klub-01.JPG"
                alt="Klub Coola"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text on the right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedDecorativeBar />
            <h1 className="text-4xl text-left font-alata md:text-5xl font-semibold uppercase tracking-wider mb-6">
              Team Building
            </h1>

            <p className="text-lg leading-relaxed mb-6">
              Po intensywnym dniu pełnym spotkań i prezentacji, zapraszamy do
              strefy relaksu Hotel Avangarda. Oferujemy szeroki wybór możliwości
              odpoczynku - od relaksujących zabiegów spa po rozrywkę w Klubie
              Coola.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Nasi goście biznesowi mogą korzystać ze specjalnych pakietów
              łączących konferencje z wellness, zapewniając idealną równowagę
              między pracą a odpoczynkiem.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Nasi goście biznesowi mogą korzystać ze specjalnych pakietów
              łączących konferencje z wellness, zapewniając idealną równowagę
              między pracą a odpoczynkiem.
            </p>
          </motion.div>
        </div>

        {/* Entertainment Options Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 px-4 sm:px-0"
        >
          <Tabs
            defaultValue="club"
            className="w-full"
            onValueChange={setSelectedTab}
          >
            <TabsList className="w-full max-w-2xl mx-auto mb-8 bg-white p-1 grid grid-cols-4 gap-2 rounded-none border-b-1 border-avangarda">
              <TabsTrigger
                value="club"
                className="data-[state=active]:bg-avangarda data-[state=active]:text-white rounded-none"
              >
                Klub Coola
              </TabsTrigger>
              <TabsTrigger
                value="outdoor"
                className="data-[state=active]:bg-avangarda data-[state=active]:text-white rounded-none"
              >
                Outdoor
              </TabsTrigger>
              <TabsTrigger
                value="fort"
                className="data-[state=active]:bg-avangarda data-[state=active]:text-white rounded-none"
              >
                Fort No. 4
              </TabsTrigger>
              <TabsTrigger
                value="przystan"
                className="data-[state=active]:bg-avangarda data-[state=active]:text-white rounded-none"
              >
                Bar Przystań
              </TabsTrigger>
            </TabsList>

            <TabsContent value="club" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">Klub Coola</h3>
                      <Badge className="bg-avangarda/10 text-avangarda rounded-md">
                        Rozrywka & Relaks
                      </Badge>
                    </div>
                    <p className="text-lg leading-relaxed">
                      Po dniu pełnym spotkań biznesowych zapraszamy do Klubu
                      Coola - miejsca, gdzie można się zrelaksować przy
                      kręglach, bilardzie czy dartsach. Idealne na nieformalne
                      spotkania zespołu czy networking w luźnej atmosferze.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/5 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Kręgle</p>
                      <p className="text-xs">4 profesjonalne tory</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <Wine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Bar</p>
                      <p className="text-xs">Szeroki wybór drinków</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <Music className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Muzyka</p>
                      <p className="text-xs">DJ w weekendy</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Godziny</p>
                      <p className="text-xs">16:00 - 22:00</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Bilard</p>
                      <p className="text-xs">Stoły profesjonalne</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <Coffee className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Przekąski</p>
                      <p className="text-xs">Menu barowe</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Atrakcje klubu:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Kręgle - 4 tory</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Bilard amerykański</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Darts elektroniczny</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Piłkarzyki i cymbergaj</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Strefa lounge z TV</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Bar z drinkami i przekąskami
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link href={`/${lang}/rozrywka`}>
                      <Button className="bg-avangarda hover:bg-avangarda/90 flex items-center gap-2">
                        Więcej o Klubie Coola
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative aspect-video w-full h-[500px] overflow-hidden ">
                    <Image
                      src="/klub/klub-04.JPG"
                      alt="Klub Coola"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="outdoor" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">
                        Aktywności na świeżym powietrzu
                      </h3>
                      <Badge className="bg-avangarda/10 text-avangarda rounded-md">
                        Rekreacja
                      </Badge>
                    </div>
                    <p className="text-lg leading-relaxed">
                      Uzupełnij swój pobyt biznesowy o aktywności na świeżym
                      powietrzu. Oferujemy szereg możliwości rekreacji, które
                      doskonale sprawdzą się jako przerwa od spotkań lub jako
                      element integracji zespołu. Bliskość natury i aktywność
                      fizyczna to doskonały sposób na odświeżenie umysłu.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/5 p-4 text-center rounded-lg">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Kajaki</p>
                      <p className="text-xs">Spływy grupowe</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center rounded-lg">
                      <Wine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Restauracja Fort</p>
                      <p className="text-xs">Kuchnia regionalna</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center rounded-lg">
                      <Music className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Beach Volley</p>
                      <p className="text-xs">Boisko profesjonalne</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center rounded-lg">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Dostępność</p>
                      <p className="text-xs">Maj - Wrzesień</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center rounded-lg">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Rowery</p>
                      <p className="text-xs">Wypożyczalnia</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center rounded-lg">
                      <Coffee className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Pikniki</p>
                      <p className="text-xs">Catering plenerowy</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      Popularne aktywności dla grup:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Spływ kajakowy (2-3h)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Turniej siatkówki plażowej
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Wycieczki rowerowe z przewodnikiem
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Kolacja w Restauracji Fort
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Piknik integracyjny</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Gry terenowe i team building
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Link href={`/${lang}/rozrywka`}>
                      <Button className="bg-avangarda hover:bg-avangarda/90 flex items-center gap-2">
                        Dowiedz się więcej
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Full-width image for outdoor tab */}
                  <div className="relative aspect-video w-full h-[500px] overflow-hidden ">
                    <Image
                      src="/outdoor/out-02.JPG"
                      alt="Aktywności plenerowe"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fort" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">Fort No. 4</h3>
                      <Badge className="bg-avangarda/10 text-avangarda rounded-md">
                        Integracja & BBQ
                      </Badge>
                    </div>
                    <p className="text-lg leading-relaxed">
                      Fort No. 4 to wyjątkowe miejsce na organizację wydarzeń
                      integracyjnych dla zespołów biznesowych. Historyczna
                      atmosfera fortu tworzy niepowtarzalne tło dla spotkań, a
                      profesjonalnie wyposażona strefa BBQ pozwala na
                      organizację niezapomnianych grilli i pikników firmowych.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/5 p-4 text-center">
                      <Flame className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Grill Zone</p>
                      <p className="text-xs">Profesjonalne grille</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Team Building</p>
                      <p className="text-xs">Gry integracyjne</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <TreePine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Natura</p>
                      <p className="text-xs">Otoczenie lasu</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Dostępność</p>
                      <p className="text-xs">Cały rok</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <Utensils className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Catering</p>
                      <p className="text-xs">Menu BBQ</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <Music className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Rozrywka</p>
                      <p className="text-xs">Muzyka na żywo</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      Oferta integracyjna Fort No. 4:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">BBQ party dla grup</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Gry zespołowe outdoor</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Warsztaty kulinarne</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Ognisko z gitarą</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Zwiedzanie historyczne</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Catering firmowy</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Link href={`/${lang}/rozrywka`}>
                      <Button className="bg-avangarda hover:bg-avangarda/90 flex items-center gap-2">
                        Więcej o Fort No. 4
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative aspect-video w-full h-[500px] overflow-hidden">
                    <Image
                      src="/fort/fort-02.jpg"
                      alt="Fort No. 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="przystan" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">Bar Przystań</h3>
                      <Badge className="bg-avangarda/10 text-avangarda rounded-md">
                        Fresh Food & River
                      </Badge>
                    </div>
                    <p className="text-lg leading-relaxed">
                      Bar Przystań to unikalne miejsce położone nad brzegiem
                      rzeki, gdzie świeże składniki spotykają się z malowniczym
                      widokiem na wodę. Idealne na biznesowe lunche, nieformalne
                      spotkania czy kolacje integracyjne. Nasza kuchnia
                      specjalizuje się w świeżych, sezonowych potrawach
                      przygotowywanych z lokalnych produktów.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/5 p-4 text-center">
                      <Fish className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Świeże ryby</p>
                      <p className="text-xs">Lokalne połowy</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <Utensils className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Kuchnia sezonowa</p>
                      <p className="text-xs">Lokalne produkty</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <Wine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Wina regionalne</p>
                      <p className="text-xs">Starannie dobrane</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Godziny</p>
                      <p className="text-xs">12:00 - 22:00</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <TreePine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Taras nad rzeką</p>
                      <p className="text-xs">Widok na wodę</p>
                    </div>

                    <div className="bg-avangarda/5 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">Grupy biznesowe</p>
                      <p className="text-xs">Rezerwacje</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">
                      Specjalności Bar Przystań:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Świeże ryby z grilla</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">
                          Sałatki z lokalnych warzyw
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Zupy sezonowe</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Dania wegetariańskie</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Lunch biznesowy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-avangarda"></div>
                        <span className="text-sm">Kolacje nad rzeką</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Link href={`/${lang}/restauracja`}>
                      <Button className="bg-avangarda hover:bg-avangarda/90 flex items-center gap-2">
                        Więcej o Bar Przystań
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="relative aspect-video w-full h-[500px] overflow-hidden">
                    <Image
                      src="/outdoor/out-03.jpg"
                      alt="Bar Przystań"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
