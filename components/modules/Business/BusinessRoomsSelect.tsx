"use client";

import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  ChevronDown,
  Square,
  Users,
  School,
  UsersRound,
  Grape,
  Briefcase,
  Wifi,
  MonitorPlay,
  Projector,
  Volume2,
  Mic2,
  ClipboardPen,
  Building,
  Phone,
  Mail,
  Star,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";

type EquipmentIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> &
    React.RefAttributes<SVGSVGElement>
>;

interface RoomEquipment {
  id: string;
  name: string;
  icon: EquipmentIcon;
}

interface ConferenceRoom {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  area: number;
  capacities: {
    theater: string | number;
    classroom: string | number;
    ushape: string | number;
    banquet: string | number;
    boardroom: string | number;
  };
  equipment: RoomEquipment[];
  featured?: boolean;
}

const standardEquipmentList: RoomEquipment[] = [
  { id: "wifi", name: "Bezpłatny Internet", icon: Wifi },
  { id: "screen", name: "Ekran", icon: MonitorPlay },
  { id: "projector", name: "Projektor multimedialny", icon: Projector },
  { id: "sound", name: "Nagłośnienie konferencyjne", icon: Volume2 },
  { id: "mic", name: "Mikrofon bezprzewodowy", icon: Mic2 },
  { id: "flipchart", name: "Flipchart magnetyczny", icon: ClipboardPen },
];

const additionalEquipmentNote =
  "Dostępne jest również wyposażenie dodatkowe takie jak laptop, przełącznik slajdów, oraz blok flipchart z mazakami na życzenie.";

const conferenceRoomsData: ConferenceRoom[] = [
  {
    id: "bankietowa-a",
    name: "Sala Bankietowa A",
    imageSrc: "/conference/conf-01.webp",
    description: `Idealna na średniej wielkości bankiety i konferencje. ${additionalEquipmentNote}`,
    area: 340,
    capacities: {
      theater: 260,
      classroom: 180,
      ushape: 45,
      banquet: 250,
      boardroom: "-",
    },
    equipment: standardEquipmentList,
    featured: true,
  },
  {
    id: "bankietowa-b",
    name: "Sala Bankietowa B",
    imageSrc: "/conference/conf-01.webp",
    description: `Podobna do Sali Bankietowej A, doskonała na eventy i spotkania. ${additionalEquipmentNote}`,
    area: 340,
    capacities: {
      theater: 260,
      classroom: 180,
      ushape: 45,
      banquet: 250,
      boardroom: "-",
    },
    equipment: standardEquipmentList,
  },
  {
    id: "bankietowa-ab",
    name: "Sala Bankietowa A+B",
    imageSrc: "/conference/conf-01.webp",
    description: `Połączenie sal A i B, tworzące przestronną powierzchnię na duże wydarzenia. ${additionalEquipmentNote}`,
    area: 680,
    capacities: {
      theater: 540,
      classroom: 400,
      ushape: "-",
      banquet: 500,
      boardroom: "-",
    },
    equipment: standardEquipmentList,
    featured: true,
  },
  {
    id: "kominkowa",
    name: "Sala Kominkowa",
    imageSrc: "/conference/conf-01.webp",
    description: `Kameralna sala z możliwością rozbudowy o dodatkowe moduły. ${additionalEquipmentNote}`,
    area: 45,
    capacities: {
      theater: 30,
      classroom: 20,
      ushape: "-",
      banquet: 20,
      boardroom: 20,
    },
    equipment: standardEquipmentList,
  },
  {
    id: "kominkowa-1m",
    name: "Sala Kominkowa + 1 moduł",
    imageSrc: "/conference/conf-01.webp",
    description: `Sala Kominkowa powiększona o jeden moduł. ${additionalEquipmentNote}`,
    area: 90,
    capacities: {
      theater: 60,
      classroom: 40,
      ushape: 30,
      banquet: 40,
      boardroom: 40,
    },
    equipment: standardEquipmentList,
  },
  {
    id: "sala-vip",
    name: "Sala VIP",
    imageSrc: "/conference/conf-01.webp",
    description: `Ekskluzywna, niewielka sala idealna na spotkania zarządu lub dyskretne rozmowy. ${additionalEquipmentNote}`,
    area: 20,
    capacities: {
      theater: "-",
      classroom: "-",
      ushape: "-",
      banquet: "-",
      boardroom: 12,
    },
    equipment: standardEquipmentList,
    featured: true,
  },
];

const capacityTypes = [
  {
    label: "Teatr",
    icon: Users,
    key: "theater",
    color: "bg-gray-300 text-black",
  },
  {
    label: "Szkolne",
    icon: School,
    key: "classroom",
    color: "bg-gray-300 text-black",
  },
  {
    label: "Podkowa",
    icon: UsersRound,
    key: "ushape",
    color: "bg-gray-400/70 text-black",
  },
  {
    label: "Bankiet",
    icon: Grape,
    key: "banquet",
    color: "bg-gray-400/80 text-black",
  },
  {
    label: "Boardroom",
    icon: Briefcase,
    key: "boardroom",
    color: "bg-gray-400/90 text-black",
  },
];

export default function ConferenceRoomsComponent({
  lang = "pl",
}: {
  lang?: string;
}) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white w-full text-slate-800 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <AnimatedDecorativeBar />
          <h1 className="text-4xl text-left font-alata md:text-5xl font-semibold uppercase tracking-wider mb-6">
            Przestrzenie Konferencyjne
          </h1>
          <p className="text-left text-lg text-slate-600 max-w-3xl leading-relaxed">
            Hotel Avangarda*** oferuje wszechstronne sale konferencyjne, idealne
            na każde wydarzenie. Wszystkie sale wyposażone są standardowo w
            bezprzewodowy internet, ekran, projektor, nagłośnienie, mikrofon
            oraz flipchart.
          </p>
        </motion.div>

        {/* Capacity Legend - Always Visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        ></motion.div>

        {/* Rooms Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {conferenceRoomsData.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={room.id} className="border-none">
                  <AccordionTrigger className="p-0 hover:no-underline">
                    <div className="w-full p-4 md:p-6">
                      {/* Mobile Layout */}
                      <div className="block md:hidden">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Camera className="h-5 w-5 text-avangarda" />
                              <h3 className="font-semibold text-slate-800 text-left">
                                {room.name}
                              </h3>
                              {room.featured && (
                                <Badge className="bg-avangarda text-white text-xs">
                                  <Star className="h-3 w-3 mr-1" />
                                  Popularna
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-600">
                              <div className="flex items-center gap-1">
                                <Square className="h-4 w-4" />
                                <span>{room.area} m²</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                <span>
                                  do{" "}
                                  {Math.max(
                                    ...Object.values(room.capacities).filter(
                                      (v) => typeof v === "number"
                                    )
                                  )}{" "}
                                  osób
                                </span>
                              </div>
                            </div>
                          </div>
                          <ChevronDown className="h-5 w-5 text-slate-500 transition-transform duration-200 group-data-[state=open]:rotate-180 shrink-0 ml-2" />
                        </div>

                        {/* Mobile Capacity Grid */}
                        <div className="grid grid-cols-2 gap-2">
                          {capacityTypes.map((type) => {
                            const capacity =
                              room.capacities[
                                type.key as keyof typeof room.capacities
                              ];
                            return (
                              <div
                                key={type.key}
                                className={cn(
                                  "flex items-center justify-between p-2 text-xs",
                                  type.color
                                )}
                              >
                                <div className="flex items-center gap-1">
                                  <type.icon className="h-3 w-3" />
                                  <span className="font-medium">
                                    {type.label}
                                  </span>
                                </div>
                                <span className="font-semibold">
                                  {capacity}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden md:block">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 flex-1">
                            <Camera className="h-6 w-6 text-avangarda" />
                            <div>
                              <div className="flex items-center gap-3">
                                <h3 className="font-semibold text-lg text-slate-800">
                                  {room.name}
                                </h3>
                                {room.featured && (
                                  <Badge className="bg-avangarda text-white text-xs">
                                    <Star className="h-3 w-3 mr-1" />
                                    Popularna
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-6 mt-1 text-sm text-slate-600">
                                <div className="flex items-center gap-1">
                                  <Square className="h-4 w-4" />
                                  <span>{room.area} m²</span>
                                </div>
                                {capacityTypes.map((type) => {
                                  const capacity =
                                    room.capacities[
                                      type.key as keyof typeof room.capacities
                                    ];
                                  return (
                                    <div
                                      key={type.key}
                                      className="flex items-center gap-1"
                                    >
                                      <type.icon className="h-4 w-4" />
                                      <span>
                                        {type.label}: {capacity}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          <ChevronDown className="h-5 w-5 text-slate-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="p-0">
                    <div className="border-t border-gray-100 bg-gray-50/50 p-4 md:p-6">
                      <div className="grid md:grid-cols-3 gap-6 items-start">
                        {/* Image */}
                        <div className="relative aspect-[4/3] w-full overflow-hidden ">
                          <Image
                            src={room.imageSrc || "/placeholder.svg"}
                            alt={`Widok sali ${room.name}`}
                            fill
                            className="object-cover "
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>

                        {/* Description */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-slate-800 mb-2">
                              Opis sali
                            </h4>
                            <p className="text-slate-600 leading-relaxed text-sm">
                              {room.description}
                            </p>
                          </div>
                          <Button className="bg-avangarda hover:bg-avangarda/90 text-white px-6 py-3 text-sm font-medium   transition-all duration-200">
                            ZAPYTAJ O SALĘ
                          </Button>
                        </div>

                        {/* Equipment */}
                        <div>
                          <h4 className="text-lg font-semibold text-slate-800 mb-3">
                            Wyposażenie standardowe
                          </h4>
                          <div className="space-y-2">
                            {room.equipment.map((equip) => (
                              <div
                                key={equip.id}
                                className="flex items-center gap-3 text-sm text-slate-700 bg-white p-2 rounded-lg"
                              >
                                <equip.icon className="h-4 w-4 text-avangarda shrink-0" />
                                <span>{equip.name}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                            <p className="text-xs text-blue-700 leading-relaxed">
                              <strong>Dodatkowe wyposażenie:</strong> laptop,
                              przełącznik slajdów, blok flipchart + mazaki
                              dostępne na życzenie.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
