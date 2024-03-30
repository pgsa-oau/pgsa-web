import React from "react";
import { Button } from "./ui/button";

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
        <div className="hero bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-xl">
                    <h1 className="text-xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                    {buttonText && (
                        <Button>{buttonText}</Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
