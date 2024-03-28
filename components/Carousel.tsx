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
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-2">
                            <Card className="h-[30rem] w-full flex items-center justify-center">
                                <CardContent className="flex items-center justify-center p-6">
                                    <Image
                                        src={`https://fakeimg.pl/600x400?text=image${
                                            index + 1
                                        }`}
                                        alt={`image${index + 1}`}
                                        fill
                                    />
                                </CardContent>
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
