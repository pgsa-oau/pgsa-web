import AimsAndObjectives from "@/components/AimsAndObjectives";
import CarouselSection from "@/components/Carousel";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import { pageData } from "@/components/pageData";

export default function Home() {
    return (
        <main className="flex h-full min-h-[95vh] flex-col gap-10 items-center justify-between p-2">
            <CarouselSection />

            <div id="aboutUs" className="pt-4">
                {pageData.heroAboutUs.map((item) => (
                    <HeroSection
                        key={item.title}
                        title={item.title}
                        description={item.description}
                    />
                ))}

                <AimsAndObjectives />
            </div>

            <div id="contactUs" className="w-full">
                <ContactUs />
            </div>

            <footer className="flex items-center justify-center w-full h-24 border-t font-extrabold">
                © {new Date().getFullYear()} OAU PGSA
            </footer>
        </main>
    );
}
