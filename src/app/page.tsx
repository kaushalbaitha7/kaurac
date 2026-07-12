import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import Courses from "@/components/Courses";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <Courses />
      <Features />
      <Stats />
      <Footer />
    </>
  );
}