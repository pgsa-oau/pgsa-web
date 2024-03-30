"use client";

import React, { useState } from "react";
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
import Link from "next/link";

const navigationItems = [
    {
        title: "About",
        links: [
            { href: "/about/preamble", text: "Preamble" },
            { href: "/about/aims-and-objectives", text: "Aims and Objectives" },
        ],
    },
    {
        title: "Notice Board",
        href: "/board",
    },
    {
        title: "Policies",
        href: "/policies",
    },
    {
        title: "Resources",
        href: "/resources",
    },
    {
        title: "Membership",
        links: [
            {
                href: "/membership/postgraduate-registration",
                text: "Postgraduate Registration",
            },
            { href: "/membership/members", text: "Members" },
            { href: "/membership/honorary-member", text: "Honorary Member" },
        ],
    },
    {
        title: "Arms",
        links: [
            { href: "/arms/departmental-pgsa", text: "Departmental PGSA" },
            {
                href: "/arms/hall-hec",
                text: "Halls of Residence (meet your HEC)",
            },
            {
                href: "/arms/legislature",
                text: "The Legislature (meet your Students’ Parliamentary Council)",
            },
            {
                href: "/arms/administrative-quarters",
                text: "Administrative Quarters (meet your Central Executive Council)",
            },
            {
                href: "/arms/judicial-quarter",
                text: "The Judicial Quarter (Meet the Judicial Council)",
            },
        ],
    },
    {
        title: "Contact Us",
        href: "/contact-us",
    },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex items-center justify-between px-24 py-5">
            <div className="flex gap-1 items-center justify-center">
                <div className="avatar">
                    <div className="rounded-full w-8">
                        <img src="/oau.png" />
                    </div>
                </div>
                <div className="avatar">
                    <div className="rounded-full w-8">
                        <img src="/pgsa.png" />
                    </div>
                </div>

                <div className="font-bold">OAU PGSA</div>
            </div>

            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    <img src="/hamburger-icon.png" alt="Menu" />
                </button>
            </div>

            <div
                className={`fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-200 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:relative md:translate-x-0 md:flex`}
            >
                <button onClick={toggleMenu} className="md:hidden">
                    <img src="/close-icon.png" alt="Close" />
                </button>

                <NavigationMenu>
                    <NavigationMenuList>
                        {navigationItems.map((item) => (
                            <NavigationMenuItem key={item.title}>
                                {item.links ? (
                                    <>
                                        <NavigationMenuTrigger>
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
                                                        className={navigationMenuTriggerStyle()}
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
                                            className={navigationMenuTriggerStyle()}
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
        </div>
    );
};

export default Header;
