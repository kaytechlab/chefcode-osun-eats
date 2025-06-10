
import { Card, CardContent } from "@/components/ui/card";
import { Search, User, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Browse & Search",
    description: "Explore menus from your favorite campus vendors and discover new dishes",
    icon: <Search className="w-8 h-8" />,
    color: "bg-blue-500"
  },
  {
    step: "2", 
    title: "Place Your Order",
    description: "Select your items, customize as needed, and choose your campus delivery location",
    icon: <User className="w-8 h-8" />,
    color: "bg-green-500"
  },
  {
    step: "3",
    title: "Get Delivered",
    description: "Sit back and relax while we deliver fresh, hot food right to your location",
    icon: <ArrowRight className="w-8 h-8" />,
    color: "bg-orange-500"
  }
];

const HowItWorks = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How Chef's Code Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting your favorite food delivered on campus is as easy as 1-2-3
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              <Card className="bg-white border-2 border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  {/* Step number */}
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6`}>
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-gray-600 mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Download CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 max-w-3xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of students already using Chef's Code for convenient campus dining
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                Sign Up Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
