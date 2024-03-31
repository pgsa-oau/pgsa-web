import React from "react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface HeroSectionProps {
    title: string;
    description: string;
    buttonText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    buttonText,
}) => {
    return (
        <Card className="shadow-lg md:w-1/2 text-pretty md:text-base md:font-medium md:leading-normal md:hover:scale-105">
            <CardHeader>
                <CardTitle className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-violet-600 to-pink-400">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{description}</CardDescription>
            </CardContent>
            {buttonText && <Button>{buttonText}</Button>}
        </Card>
    );
};

export default HeroSection;
