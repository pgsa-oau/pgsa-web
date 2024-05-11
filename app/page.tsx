import AimsAndObjectives from "@/components/AimsAndObjectives";
import CarouselSection from "@/components/Carousel";
import HeroSection from "@/components/HeroSection";
import { pageData } from "@/components/pageData";
import { useEffect, useState } from "react";
import { fetchNews, sanitizeContent } from "./utils";
import { post } from "./types";
import NewsCard from "@/components/ui/NewsCard";

export default async function Home() {

    const news = await fetchNews();
    const recentNews = news.slice(0, 3);

    return (
        <main className="flex h-full min-h-[95vh] flex-col gap-6 items-center justify-between p-2">
            <CarouselSection />

            <div className="flex flex-col items-center justify-center p-4 m-2 gap-8 z-50">
                <h2 className="text-2xl font-bold text-red-500">
                    Breaking News!
                </h2>

                <div className="flex flex-wrap gap-4 md:gap-6">
                    {recentNews.map((post: post) => (
                        <NewsCard key={post.id} {...post} />
                            // <div dangerouslySetInnerHTML={{ __html: sanitizeContent(post.content) }}>
                    ))}
                </div>
            </div>

            <div
                id="aboutUs"
                className="pt-2 flex flex-col md:flex-row gap-4 md:gap-6"
            >
                {pageData.heroAboutUs.map((item) => (
                    <HeroSection
                        key={item.title}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>

            <section id="aimsAndObjectives" className="w-full">
                <AimsAndObjectives />
            </section>
        </main>
    );
}
