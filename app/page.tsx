import AimsAndObjectives from "@/components/AimsAndObjectives";
import CarouselSection from "@/components/Carousel";

export default function Home() {
    return (
        <main className="flex h-full min-h-[95vh] flex-col gap-10 items-center justify-between p-2">
            <CarouselSection />

            <div className="flex items-center justify-center align-middle break-words whitespace-break-spaces py-5">
                <p className="w-2/3">
                    This association comprises a collective of scholars
                    dedicated to advancing academic excellence, fostering
                    quality research endeavors, facilitating access to
                    scholarships and grants, and leveraging the educational and
                    cultural resources of Obafemi Awolowo University to
                    cultivate a socially responsible community.
                </p>
            </div>

            <AimsAndObjectives />

            <footer className="flex items-center justify-center w-full h-24 border-t font-extrabold">
                © {new Date().getFullYear()} OAU PGSA
            </footer>
        </main>
    );
}
