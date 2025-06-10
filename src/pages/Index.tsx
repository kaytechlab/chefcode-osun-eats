
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import PopularDishes from "@/components/PopularDishes";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCategories />
      <PopularDishes />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
