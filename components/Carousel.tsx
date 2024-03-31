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

const CarouselSection = () => {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <div className="md:container md:mx-5">
            <Carousel plugins={[plugin.current]}>
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-2">
                                <Card className="h-[15rem] md:h-[32rem] w-full flex items-center justify-center">
                                    <img
                                        src={`/images/image${index + 1}.jpg`}
                                        alt={`image${index + 1}`}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </div>
    );
};

export default CarouselSection;
