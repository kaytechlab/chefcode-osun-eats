
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 float-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full opacity-20 float-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-200 rounded-full opacity-20 float-animation" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">
              Chef's <span className="text-primary">Code</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-600 mb-2">
              <MapPin className="w-5 h-5" />
              <span>Osun State University</span>
            </div>
          </div>

          {/* Main headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Delicious Food Delivered<br />
            <span className="text-primary">Right to Your Campus Location</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Skip the lines, skip the wait. Order from your favorite campus vendors 
            and get fresh, hot meals delivered anywhere on campus in minutes.
          </p>

          {/* Search/CTA Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search for food, restaurants..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button className="px-8 py-3 text-lg font-semibold food-gradient text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Find Food
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Campus Vendors</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2">15min</div>
              <div className="text-gray-600">Average Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
