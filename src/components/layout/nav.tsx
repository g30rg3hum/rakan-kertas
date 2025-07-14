"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button, buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HoverScale from "../custom-ui/hover-scale";
import * as motion from "framer-motion/client";
import { useLanguage } from "../language/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { navItemsChinese, navItemsEnglish, navItemsMalay } from "./nav-items";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const navItems =
    language === "en"
      ? navItemsEnglish
      : language === "ch"
      ? navItemsChinese
      : navItemsMalay;

  return (
    <>
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-4">
            {navItems.slice(0, -1).map((item) => {
              if (
                item.name === "Services" ||
                item.name === "Perkhidmatan" ||
                item.name === "服务"
              ) {
                return (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="text-md font-semibold">
                      {language === "en"
                        ? "Services"
                        : language === "ch"
                        ? "服务"
                        : "Perkhidmatan"}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white p-5 flex flex-col gap-3 text-center font-semibold">
                      <NavigationMenuLink
                        href="/services/disposable-waste-collection"
                        className="w-[150px] hover:scale-[1.05] transition"
                      >
                        {language === "en"
                          ? "Disposable Waste"
                          : language === "ch"
                          ? "一次性废物"
                          : "Sisa Buangan Sekali Pakai"}
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/services/recycling-material-collection"
                        className="w-[150px] hover:scale-[1.05] transition"
                      >
                        {language === "en"
                          ? "Recycling Materials"
                          : language === "ch"
                          ? "回收材料"
                          : "Bahan Kitar Semula"}
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink href={item.href}>
                    <span className="inline-block hover:scale-[1.05] transition text-md font-semibold">
                      {item.name}
                    </span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
            <NavigationMenuItem>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <NavigationMenuLink
                  href={navItems[navItems.length - 1].href}
                  className={buttonVariants({ variant: "default" })}
                >
                  {navItems[navItems.length - 1].name}
                </NavigationMenuLink>
              </motion.button>
            </NavigationMenuItem>
            <NavigationMenuItem className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon">
                    {language === "en" && "🇬🇧"}
                    {language === "ch" && "🇨🇳"}
                    {language === "my" && "🇲🇾"}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="bg-white font-semibold p-5"
                  align="end"
                >
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => setLanguage("en")}>
                      {language === "en"
                        ? "English"
                        : language === "ch"
                        ? "英语"
                        : "Inggeris"}{" "}
                      🇬🇧
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage("ch")}>
                      {language === "en"
                        ? "Chinese"
                        : language === "ch"
                        ? "中国"
                        : "Cina"}{" "}
                      🇨🇳
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage("my")}>
                      {language === "en"
                        ? "Malay"
                        : language === "ch"
                        ? "马来"
                        : "Melayu"}{" "}
                      🇲🇾
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[160px] sm:w-[240px] background-texture"
          >
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col gap-4">
                {navItems.map((item) => {
                  if (item.name === "Services") {
                    return (
                      <div key="services">
                        <NavigationMenuItem className="mb-4">
                          <NavigationMenuLink href="/services/disposable-waste-collection">
                            <HoverScale>Disposable Waste Collection</HoverScale>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink href="/services/recycling-material-collection">
                            <HoverScale>
                              Recycling Material Collection
                            </HoverScale>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </div>
                    );
                  }
                  return (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuLink href={item.href}>
                        <HoverScale>{item.name}</HoverScale>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
