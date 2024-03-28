import CarouselSection from "@/components/Carousel";

export default function Home() {
  return (
    <main className="flex h-full min-h-[95vh] flex-col items-center justify-between p-2">

        <CarouselSection />


      <div className="relative flex place-items-center">
        OAU POSTGRADUATE STUDENTS ASSOCIATION
      </div>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        © 2021 PGSA
      </footer>
    </main>
  );
}
