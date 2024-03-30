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
        <div className="hero">
            <div className="hero-content">
                <div className="max-w-5xl">
                    <h1 className="text-xl font-bold text-center">{title}</h1>
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
