"use client";

import {
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { NavigationMenu, NavigationMenuItem } from "../ui/navigation-menu";
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
            {navItems.slice(0, -1).map((item) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuLink href={item.href}>
                  <span className="inline-block hover:scale-[1.05] transition text-md">
                    {item.name}
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
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
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink href={item.href}>
                      <HoverScale>{item.name}</HoverScale>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
