import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <h1 className="text-2xl text-center">Testing</h1>
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
       <MusicSchoolTestimonials />
       <UpcomingWebinars/>
       <Instructors/>
       <Footer/>
    </main>
  );
}
