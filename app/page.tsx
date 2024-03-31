import AimsAndObjectives from "@/components/AimsAndObjectives";
import CarouselSection from "@/components/Carousel";
import HeroSection from "@/components/HeroSection";
import { pageData } from "@/components/pageData";

export default function Home() {
    return (
        <main className="flex h-full min-h-[95vh] flex-col gap-6 items-center justify-between p-2">
            <CarouselSection />

            <div id="aboutUs" className="pt-2 flex flex-col md:flex-row gap-4 md:gap-6">
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



            <footer className="flex items-center justify-center w-full h-16 border-t font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-gray-300">
                © {new Date().getFullYear()} OAU PGSA
            </footer>
        </main>
    );
}
