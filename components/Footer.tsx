'use client';
import React from "react";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Card className="md:container flex items-center justify-between py-10 text-primary z-10 border-0 shadow-none bg-transparent bg-none">
            <div className="flex justify-between space-x-4">
                <NavigationMenu className="neon-border">
                    <Link href="/#aboutUs" passHref>
                        About Us
                    </Link>
                </NavigationMenu>
                <NavigationMenu className="neon-border">
                    <Link href="/#aimsAndObjectives" passHref>
                        Aims and Objectives
                    </Link>
                </NavigationMenu>
                <NavigationMenu className="neon-border">
                    <Link
                        href="/devs"
                        passHref
                        className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-500"
                    >
                        Meet the Devs
                    </Link>
                </NavigationMenu>
            </div>
            <div>&copy; {year} OAU PGSA</div>
        </Card>
    );
};

export default Footer;
