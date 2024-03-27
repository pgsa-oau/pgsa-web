'use client'

import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';


const Header = () => {
  return (
      <div className="flex flex-col items-center justify-between px-24 py-5">
          <NavigationMenu>
              <NavigationMenuList>
                  <NavigationMenuItem>
                      <NavigationMenuTrigger>About</NavigationMenuTrigger>
                      <NavigationMenuContent className="flex flex-col w-52 p-4">
                          <NavigationMenuLink>Preamble</NavigationMenuLink>
                          <NavigationMenuLink className="w-full">
                              Aims and Objectives
                          </NavigationMenuLink>
                      </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                      <NavigationMenuTrigger>
                          Notice Board
                      </NavigationMenuTrigger>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                      <NavigationMenuTrigger>Policies</NavigationMenuTrigger>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                          <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                          >
                              Documentation
                          </NavigationMenuLink>
                      </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                  </NavigationMenuItem>
              </NavigationMenuList>
          </NavigationMenu>
      </div>
  );
}

export default Header
