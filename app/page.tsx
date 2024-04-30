import AimsAndObjectives from "@/components/AimsAndObjectives";
import CarouselSection from "@/components/Carousel";
import HeroSection from "@/components/HeroSection";
import { pageData } from "@/components/pageData";

export default function Home() {
    return (
        <main className="flex h-full min-h-[95vh] flex-col gap-6 items-center justify-between p-2">
            <CarouselSection />

            <div className="flex flex-col items-center justify-center p-4 m-2 gap-8">
                <h2 className="text-3xl font-bold text-red-500">
                    Breaking News!
                </h2>
                <p className="text-xl text-primary">
                    It&apos;s official 🎉 The countdown to the Great Ife Sports
                    Festival 2024 has begun. Stay tuned for an epic celebration
                    of athleticism, unity, and innovation. Anticipate greatness!
                    &quot;GreatIfeSportsFest2024&quot;
                </p>

                <img
                    src="/breakingNews/sportFest.jpeg"
                    alt="Breaking News"
                    className="w-64 h-64 md:h-4/6 md:w-full object-cover"
                />
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
