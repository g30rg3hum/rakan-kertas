"use client";

import {
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../ui/navigation-menu";
import { Button, buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import HoverScale from "../custom-ui/hover-scale";
import * as motion from "framer-motion/client";
import navItems from "./nav-items";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-4">
            {navItems.slice(0, -1).map((item) => {
              if (item.name === "Services") {
                return (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="text-md font-semibold">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white p-5 flex flex-col gap-3 text-center font-semibold">
                      <NavigationMenuLink
                        href="/services/disposable-waste-collection"
                        className="w-[150px] hover:scale-[1.05] transition"
                      >
                        Disposable Waste
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/services/recycling-material-collection"
                        className="w-[150px] hover:scale-[1.05] transition"
                      >
                        Recycling Materials
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
                      <>
                        <NavigationMenuItem key="Disposable Waste Collection">
                          <NavigationMenuLink href="/services/disposable-waste-collection">
                            <HoverScale>Disposable Waste Collection</HoverScale>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem key="Recycling Material Collection">
                          <NavigationMenuLink href="/services/recycling-material-collection">
                            <HoverScale>
                              Recycling Material Collection
                            </HoverScale>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </>
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
