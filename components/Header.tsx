"use client";

import React, { useState } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const navigationItems = [
    {
        title: "About",
        href: "/#aboutUs",
    },
    {
        title: "Notice Board",
        href: "/board",
    },
    {
        title: "Gallery",
        href: "/gallery",
    },
    {
        title: "Resources",
        href: "/resources",
    },
    {
        title: "Membership",
        links: [
            {
                href: "https://docs.google.com/forms/d/e/1FAIpQLSe1_rMRH4gPIi-JonVGVC7mlXf_1dnv6Vwy0Dn6LMoa2OubCQ/viewform?usp=sf_link",
                text: "Become a Member",
            },
            { href: "/members", text: "Members" },
            { href: "/members#honorary-members", text: "Honorary Member" },
        ],
    },
    {
        title: "Leadership",
        links: [
            { href: "/leadership/departmental-pgsa", text: "Departmental PGSA" },
            {
                href: "/leadership/hall-hec",
                text: "Halls of Residence (meet your HEC)",
            },
            {
                href: "/leadership/legislature",
                text: "The Legislature (meet your Students’ Parliamentary Council)",
            },
            {
                href: "/leadership/administrative-quarters",
                text: "Administrative Quarters (meet your Central Executive Council)",
            },
            {
                href: "/leadership/judicial-quarter",
                text: "The Judicial Quarter (Meet the Judicial Council)",
            },
        ],
    },
    {
        title: "Contact Us",
        href: "/contact_us",
    },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="flex items-center justify-between md:px-24 p-2 md:py-3 bg-background">
                <Link href="/" passHref>
                    <div className="flex gap-1 items-center justify-center">
                        <div className="avatar hidden md:flex">
                            <div className="rounded-full w-6">
                                <img src="/oau.png" />
                            </div>
                        </div>

                        <div className="avatar">
                            <div className="rounded-full w-6">
                                <img src="/pgsa.png" />
                            </div>
                        </div>

                        <div className="font-bold">OAU PGSA</div>
                    </div>
                </Link>

                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.links ? (
                                        <>
                                            <NavigationMenuTrigger className="bg-transparent hover:bg-violet-300">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="flex flex-col w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                                                {item.links.map((link) => (
                                                    <Link
                                                        href={link.href}
                                                        passHref
                                                        key={link.text}
                                                    >
                                                        <NavigationMenuLink
                                                            className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-violet-300`}
                                                        >
                                                            {link.text}
                                                        </NavigationMenuLink>
                                                    </Link>
                                                ))}
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-violet-300`}
                                            >
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="md:hidden h-5 w-5">
                    <img src="/hamburger.png" onClick={toggleMenu} />
                </div>
            </div>

            {isOpen && (
                <div>
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col items-start">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.links ? (
                                        <>
                                            <NavigationMenuTrigger className="bg-transparent hover:bg-violet-300">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="flex flex-col text-xs max-w-[85vw] overflow-auto">
                                                {item.links.map((link) => (
                                                    <Link
                                                        href={link.href}
                                                        passHref
                                                        key={link.text}
                                                    >
                                                        <NavigationMenuLink
                                                            className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-violet-300 text-wrap`}
                                                            onClick={toggleMenu}
                                                        >
                                                            {link.text}
                                                        </NavigationMenuLink>
                                                    </Link>
                                                ))}
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-violet-300 text-sm text-wrap`}
                                                onClick={toggleMenu}
                                            >
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            )}
        </>
    );
};

export default Header;
