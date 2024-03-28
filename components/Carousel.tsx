"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Image from "next/image";

const CarouselSection = () => {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <Carousel className="w-full" plugins={[plugin.current]}>
            <CarouselContent className="w-11/12">
                {Array.from({ length: 12 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-2">
                            <Card className="h-[32rem] w-full flex items-center justify-center">
                                <img
                                    src={`/images/${index + 1}.jpg`}
                                    alt={`image${index + 1}`}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default CarouselSection;
