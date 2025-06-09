"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Gift, GiftIcon, Instagram, Menu, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-swticher";

// Add this to your tailwind.config.js if you haven't already
// screens: { 'xs': '480px', ...defaultTheme.screens }

interface MenuItemType {
  nameKey: string;
  href: string;
}

const MenuListing: MenuItemType[] = [
  { nameKey: "hotel", href: "/hotel" },
  { nameKey: "offers", href: "/pakiety" },
  { nameKey: "business", href: "/biznes" },
  { nameKey: "events", href: "/przyjecia" },
  { nameKey: "dining", href: "/restauracja" },
  { nameKey: "spa", href: "/spa" },
  { nameKey: "entertainment", href: "/rozrywka" },
  { nameKey: "kids", href: "/dzieci" },
];

interface NavbarProps {
  lang: string;
  dict: {
    nav: {
      [key: string]: string;
    };
  };
}

export function Navbar({ lang, dict }: NavbarProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const navRef = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (event: React.MouseEvent) => {
    if (navRef.current?.contains(event.target as Node)) {
      setIsHovered(true);
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };
  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  const isActive = (href: string) => {
    const localizedHref = `/${lang}${href}`;
    return (
      pathname === localizedHref || pathname.startsWith(`${localizedHref}/`)
    );
  };

  const getLocalizedHref = (path: string) => `/${lang}${path}`;

  const MobileMenuContent = () => (
    <div className="flex flex-col h-full">
      <SheetHeader className="mb-4">
        <SheetTitle className="flex justify-center">
          <Image
            src="/avangarda-logo-sm-3.png"
            alt="Hotel Avangarda"
            width={100}
            height={80}
            className="h-auto w-[100px]"
            quality={100}
            priority
          />
        </SheetTitle>
      </SheetHeader>

      <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
        <nav className="flex flex-col space-y-2 text-white">
          {MenuListing.map((item) => (
            <Link
              key={item.nameKey}
              href={getLocalizedHref(item.href)}
              className={`text-base font-alata font-medium transition-colors py-2 px-3 rounded-md ${
                isActive(item.href)
                  ? "text-avangarda bg-avangarda/10"
                  : "hover:text-avangarda hover:bg-white/5"
              }`}
              onClick={() => setIsSheetOpen(false)}
            >
              {dict.nav[item.nameKey]}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 pt-3 border-t border-white/20">
          <Button
            variant="ghost"
            size="sm"
            className="w-full font-alata justify-start gap-2 text-white hover:bg-white/10 py-2 text-sm"
            onClick={() => setIsSheetOpen(false)}
          >
            <Phone className="h-4 w-4 text-white" />
            {dict.nav.phone}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="w-full font-alata justify-start gap-2 text-white hover:bg-white/10 py-2 text-sm"
            onClick={() => setIsSheetOpen(false)}
          >
            <Gift className="h-4 w-4 text-white" />
            <Link href={getLocalizedHref("/pakiety")}>Kup Voucher</Link>
          </Button>

          <Button
            size="sm"
            className="bg-avangarda text-white hover:bg-avangarda/90 py-2 text-sm font-alata"
            onClick={() => setIsSheetOpen(false)}
          >
            {dict.nav.book}
          </Button>

          <div className="flex justify-center pt-2">
            <LanguageSwitcher />
          </div>

          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="https://facebook.com"
              className="text-white hover:text-avangarda transition-colors p-1"
              aria-label="Visit our Facebook page"
              onClick={() => setIsSheetOpen(false)}
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://facebook.com"
              className="text-white hover:text-avangarda transition-colors p-1"
              aria-label="Visit our Instagram page"
              onClick={() => setIsSheetOpen(false)}
            >
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Container
      ref={navRef}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled || isHovered ? "bg-primary" : "bg-transparent pt-2 sm:pt-4"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top bar */}
      <div
        className={`transition-all duration-500 ${
          isScrolled
            ? "pb-2" // Add padding bottom when scrolled to separate the two rows
            : "flex items-center justify-end gap-4 py-2"
        }`}
      >
        {isScrolled ? (
          // Two-row layout when scrolled on desktop (xl+), single row when mobile menu is visible
          <>
            {/* First row: Social media icons (left) + LOGO (center) + call button & language switcher (right) - DESKTOP ONLY (xl+) */}
            <div className="hidden xl:flex items-center justify-between">
              {/* Social media icons on the left */}
              <div className="flex items-center gap-4">
                <Link
                  href="https://facebook.com"
                  className="text-white hover:text-avangarda"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
                <Link
                  href="https://facebook.com"
                  className="text-white hover:text-avangarda"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>

              {/* Call button and language switcher on the right */}
              <div className="flex items-center gap-2 sm:gap-4">
                <Button
                  size="sm"
                  className="bg-transparent font-alata px-2 text-xs text-white hover:text-avangarda sm:px-4 sm:text-sm"
                >
                  <Phone className="h-2 w-2 sm:h-3 sm:w-3" />
                  <span className="ml-1 text-[14px]">{dict.nav.phone}</span>
                </Button>
                <LanguageSwitcher />
              </div>
            </div>

            {/* Second row: Navigation (center) and Kup Voucher button (right) - DESKTOP (xl+) */}
            {/* Single row: Logo (left), phone, Kup Voucher, mobile menu - MOBILE/TABLET (below xl) */}
            <div
              className={`flex items-center justify-between ${isScrolled && "xl:py-2 py-2"}`}
            >
              {/* Logo on the left for both mobile and desktop when scrolled */}
              <Link href={getLocalizedHref("/")} className="flex-shrink-0">
                <Image
                  src="/avangarda-logo-sm-3.png"
                  alt="Hotel Avangarda"
                  width={110}
                  height={88}
                  className="h-auto w-[90px] transition-opacity duration-500 sm:w-[100px]"
                  quality={100}
                  priority
                />
              </Link>

              {/* Center navigation for desktop */}
              <nav className="hidden xl:flex items-center justify-center gap-3 xl:gap-6 flex-1">
                {MenuListing.map((item) => (
                  <Link
                    key={item.nameKey}
                    href={getLocalizedHref(item.href)}
                    className={`whitespace-nowrap text-sm font-alata font-medium transition-colors tracking-wide ${
                      isActive(item.href)
                        ? "text-avangarda"
                        : "text-white hover:text-avangarda"
                    }`}
                  >
                    {dict.nav[item.nameKey]}
                  </Link>
                ))}
              </nav>

              {/* Right side buttons */}
              <div className="flex items-center gap-1 xl:gap-4">
                {/* Phone button - show when mobile menu is visible (below xl) */}
                <Button
                  size="sm"
                  className="xl:hidden bg-avangarda font-alata px-3 py-2 text-xs text-white hover:bg-avangarda/90 sm:px-4 sm:text-sm"
                >
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="ml-1 sm:ml-2">{dict.nav.phone}</span>
                </Button>

                {/* Kup Voucher button */}
                <Link href={getLocalizedHref("/pakiety")}>
                  <Button
                    size="sm"
                    className="bg-avangarda font-alata px-2 py-1 text-xs text-white hover:bg-avangarda/90 xl:px-4 xl:text-sm flex"
                  >
                    <GiftIcon className="h-3 w-3 xl:h-4 xl:w-4 " />
                    <span className="hidden sm:inline xl:inline">
                      Kup Voucher
                    </span>
                  </Button>
                </Link>

                {/* Mobile menu button */}
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="link"
                      size="icon"
                      className="xl:hidden text-white p-1"
                      asChild
                    >
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="bg-[#404042] border-l border-avangarda/20 p-4 w-[280px] sm:w-[320px]"
                  >
                    <MobileMenuContent />
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </>
        ) : (
          // Original single row layout when not scrolled
          <>
            {/* Social media icons */}
            <Link
              href="https://facebook.com"
              className="hidden xl:flex text-white hover:text-avangarda"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="https://facebook.com"
              className="hidden xl:flex text-white hover:text-avangarda"
              aria-label="Visit our Instagram page"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>

            <div className="hidden xl:block">
              <LanguageSwitcher />
            </div>

            <Button
              size="sm"
              className="bg-avangarda font-alata px-2 text-xs text-white hover:bg-avangarda/90 sm:px-4 sm:text-sm"
            >
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="ml-1 sm:ml-2">{dict.nav.phone}</span>
            </Button>

            <Link href={getLocalizedHref("/pakiety")}>
              <Button
                size="sm"
                className="bg-avangarda font-alata px-2 text-xs text-white hover:bg-avangarda/90 sm:px-4 sm:text-sm flex"
              >
                <GiftIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Kup Voucher
              </Button>
            </Link>

            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="link"
                  size="icon"
                  className="xl:hidden text-white p-1"
                  asChild
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#404042] border-l border-avangarda/20 p-4 w-[280px] sm:w-[320px]"
              >
                <MobileMenuContent />
              </SheetContent>
            </Sheet>
          </>
        )}
      </div>

      {/* Main navbar - only shown when not scrolled */}
      {!isScrolled && (
        <div className="relative">
          <div className="h-[120px] flex-col items-center justify-center sm:h-40">
            {/* Logo */}
            <Link
              href={getLocalizedHref("/")}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src="/avangarda-logo-lg-2.png"
                alt="Hotel Avangarda"
                width={200}
                height={160}
                className="h-auto w-[150px] transition-opacity duration-500 sm:w-[200px] md:w-[250px]"
                priority
              />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden w-full xl:flex absolute -bottom-10 left-0 flex-row justify-center gap-2 xl:gap-6 overflow-x-auto">
              {MenuListing.map((item) => (
                <Link
                  key={item.nameKey}
                  href={getLocalizedHref(item.href)}
                  className={`whitespace-nowrap text-sm font-alata font-medium transition-colors tracking-wide ${
                    isActive(item.href)
                      ? "text-avangarda"
                      : "text-white hover:text-avangarda"
                  }`}
                >
                  {dict.nav[item.nameKey]}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </Container>
  );
}
