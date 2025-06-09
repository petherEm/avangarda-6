import Image from "next/image";
import { Container } from "@/components/container";
import { getVoucherBySlug } from "@/sanity/lib/offers/getVoucherBySlug";
import { getDictionary } from "@/lib/dictionary";
import { imageUrl } from "@/lib/imageUrl";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import OffersCTA from "@/components/modules/Offers/OffersCTA";
import { Tag, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import VoucherFeaturesBanner from "@/components/voucher-features-banner";

interface Params {
  lang: string;
  slug: string;
}

interface Voucher {
  _id: string;
  enname: string;
  plname: string;
  endescription: any[];
  pldescription: any[];
  voucherImage: any;
  voucherValue?: number;
  slug?: {
    current: string;
  };
}

// Mock data for voucher terms
const voucherDetails = {
  terms: [
    "Voucher ważny przez 12 miesięcy od daty zakupu",
    "Możliwość wykorzystania w dowolnym terminie po wcześniejszej rezerwacji",
    "Wymaga potwierdzenia dostępności",
    "Nie podlega zwrotowi ani wymianie na gotówkę",
    "Możliwość personalizacji wiadomości przy zakupie",
    "W przypadku usług o wartości niższej niż voucher, różnica nie jest zwracana",
  ],
};

const VoucherPageId = async ({ params }: { params: Params }) => {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang as "en" | "pl");

  // Fetch the voucher data using the slug
  const voucher = await getVoucherBySlug(slug);

  // Function to get localized content
  const getLocalizedContent = (voucher: Voucher) => {
    const name = lang === "pl" ? voucher.plname : voucher.enname;
    const description =
      lang === "pl" ? voucher.pldescription : voucher.endescription;

    return {
      name: name || "No title available",
      description: description,
      value: voucher.voucherValue || 0,
    };
  };

  // Get the localized content for the current voucher
  const localizedContent = voucher
    ? getLocalizedContent(voucher)
    : {
        name: "Gift Voucher",
        description:
          voucher?.pldescription ||
          voucher?.endescription ||
          "No description available",
        value: 0,
      };

  // Format value with currency
  const formattedValue = new Intl.NumberFormat(
    lang === "pl" ? "pl-PL" : "en-US",
    {
      style: "currency",
      currency: "PLN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  ).format(localizedContent.value);

  // Convert description array to string
  const descriptionText = Array.isArray(localizedContent.description)
    ? localizedContent.description
        ?.map((block) =>
          block._type === "block"
            ? block.children?.map((child) => child.text).join("")
            : ""
        )
        .join("")
    : localizedContent.description || "";

  return (
    <main className="bg-gray-50 min-h-screen font-raleway">
      {/* Hero Section with space for navbar */}
      <section className="relative md:min-h-screen bg-[#404042] text-white">
        {/* Solid background color for the content area */}
        <div className="absolute top-0 left-0 bottom-0 md:w-1/2 w-full bg-[#404042] z-0"></div>

        {/* Top gradient for menu visibility */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/60 to-transparent z-20"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-avangarda z-10"></div>

        {/* Mobile image - shown first on mobile, completely full width */}
        <div className="md:hidden">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={
                voucher?.voucherImage
                  ? imageUrl(voucher.voucherImage)
                      .width(800)
                      .height(500)
                      .quality(90)
                      .url()
                  : "/placeholder.svg?height=500&width=800&query=gift+voucher"
              }
              alt={localizedContent.name}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            {/* Enhanced gradient overlay for better visibility at top and bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/70"></div>
          </div>
        </div>

        <div className="relative z-10 md:min-h-screen flex flex-col md:block">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:h-screen">
              {/* Left content - positioned at bottom on desktop, normal flow on mobile */}
              <div className="md:col-span-5 flex flex-col md:justify-end pb-8 md:pb-16 pt-6 md:pt-0">
                <div className="space-y-4 md:space-y-6">
                  {/* Header */}
                  <div>
                    <Badge className="mb-3 bg-avangarda hover:bg-avangarda/90 border-0 text-white px-3 py-1">
                      {lang === "pl" ? "Voucher Podarunkowy" : "Gift Voucher"}
                    </Badge>
                    <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
                      {localizedContent.name}
                    </h1>
                    {voucher?.voucherValue && (
                      <div className="flex items-center mb-4">
                        <Tag className="mr-2 h-6 w-6 text-avangarda" />
                        <span className="text-2xl md:text-3xl font-bold text-white/95">
                          {formattedValue}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-white/90 text-md leading-relaxed">
                    {descriptionText}
                  </p>

                  {/* Single Action Button */}
                  <div className="pt-1 md:pt-2">
                    <Button
                      size="lg"
                      className="bg-avangarda hover:bg-avangarda/90 text-white border-0 shadow-lg shadow-[#E31C79]/20"
                    >
                      {lang === "pl" ? "Kup voucher" : "Purchase Voucher"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Empty columns to maintain grid spacing */}
              <div className="hidden md:block md:col-span-7"></div>
            </div>
          </div>
        </div>

        {/* Full height, full width image positioned absolutely - hidden on mobile */}
        <div className="absolute top-0 right-0 bottom-0 md:w-1/2 w-full h-screen md:h-auto hidden md:block">
          {/* Gradient overlay for darkening the image from top to middle */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10"></div>

          <Image
            src={
              voucher?.voucherImage
                ? imageUrl(voucher.voucherImage)
                    .width(800)
                    .height(1200)
                    .quality(90)
                    .url()
                : "/placeholder.svg?height=1200&width=800&query=gift+voucher"
            }
            alt={localizedContent.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* Voucher Features Banner */}
      <VoucherFeaturesBanner lang={lang} />

      {/* Detailed Content Section */}
      <Container className="py-12 lg:py-16">
        {voucher ? (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Voucher Overview */}
              <div className="bg-white shadow-sm rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-1 bg-avangarda mr-3"></span>
                  {lang === "pl" ? "Jak wykorzystać" : "How to Use"}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-avangarda text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <p className="text-gray-700">
                      {lang === "pl"
                        ? "Przy rezerwacji podaj numer vouchera"
                        : "Provide the voucher number when making a reservation"}
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-avangarda text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <p className="text-gray-700">
                      {lang === "pl"
                        ? "Voucher można wykorzystać na dowolne usługi hotelowe"
                        : "The voucher can be used for any hotel services"}
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-avangarda text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <p className="text-gray-700">
                      {lang === "pl"
                        ? "Zadzwoń do recepcji, aby sprawdzić dostępność"
                        : "Call reception to check availability"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-white shadow-sm rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-8 h-1 bg-avangarda mr-3"></span>
                  {lang === "pl" ? "Warunki" : "Terms"}
                </h2>

                <ul className="space-y-3">
                  {voucherDetails.terms.slice(0, 4).map((term, index) => (
                    <li key={index} className="flex items-start">
                      <Info className="h-4 w-4 text-gray-400 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{term}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="link" className="mt-4 p-0 text-avangarda">
                  {lang === "pl"
                    ? "Zobacz wszystkie warunki"
                    : "View all terms"}
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              {lang === "pl"
                ? "Nie znaleziono vouchera."
                : "Voucher not found."}
            </p>
          </div>
        )}
      </Container>

      {/* Call to action */}
      <OffersCTA dict={dict} lang={lang} />
    </main>
  );
};

export default VoucherPageId;
