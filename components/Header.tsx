"use client";

import React from "react";
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
        href: "",
    },
    {
        title: "Policies",
        href: "",
    },
    {
        title: "Resources",
        href: "",
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
    return (
        <div className="flex items-center justify-between px-24 py-5">
            <div className="font-bold">OAU PGSA</div>
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
                                <Link href={item.href} legacyBehavior passHref>
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
    );
};

export default Header;
