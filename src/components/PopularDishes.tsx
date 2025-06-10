
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const dishes = [
  {
    name: "Jollof Rice Special",
    vendor: "Mama Kemi's Kitchen",
    price: "₦2,500",
    rating: "4.9",
    image: "🍚",
    description: "Perfectly spiced jollof rice with chicken and plantain"
  },
  {
    name: "Amala & Ewedu",
    vendor: "Buka Express",
    price: "₦1,800",
    rating: "4.8",
    image: "🍲",
    description: "Traditional amala served with fresh ewedu and assorted meat"
  },
  {
    name: "Chicken Shawarma",
    vendor: "Campus Grill",
    price: "₦1,200",
    rating: "4.7",
    image: "🌯",
    description: "Grilled chicken wrapped with fresh vegetables and sauce"
  },
  {
    name: "Fried Rice Combo",
    vendor: "Tasty Bites",
    price: "₦2,000",
    rating: "4.6",
    image: "🍛",
    description: "Colorful fried rice with chicken, beef, and vegetables"
  }
];

const PopularDishes = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Student Favorites
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The most loved dishes by Osun State University students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <Card key={dish.name} className="bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden">
              <CardContent className="p-0">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {dish.image}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors">
                      {dish.name}
                    </h3>
                    <span className="text-lg font-bold text-primary">
                      {dish.price}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{dish.vendor}</span>
                    <span className="ml-auto text-sm font-semibold text-yellow-600">
                      ⭐ {dish.rating}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {dish.description}
                  </p>
                  
                  <Button className="w-full food-gradient text-white hover:shadow-lg transition-all duration-200">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200">
            View All Dishes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
