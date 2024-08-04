import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <h1 className="text-2xl text-center">Testing</h1>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
    </main>
  );
}
