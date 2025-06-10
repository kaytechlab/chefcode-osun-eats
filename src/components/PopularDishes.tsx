
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const dishes = [
  {
    name: "Jollof Rice & Chicken",
    vendor: "Chef's Code Kitchen",
    price: "₦2,500",
    rating: "4.9",
    image: "/lovable-uploads/cb654a33-64dd-4a87-acf1-6ac3d5d09ef2.png",
    description: "Perfectly spiced jollof rice served with tender chicken"
  },
  {
    name: "Spaghetti & Chicken",
    vendor: "Chef's Code Kitchen",
    price: "₦2,500",
    rating: "4.8",
    image: "/lovable-uploads/1a462596-2b18-4373-99f8-5517ec9f8e65.png",
    description: "Delicious spaghetti pasta with well-seasoned chicken"
  },
  {
    name: "Noodles & Fried/Boiled Eggs",
    vendor: "Chef's Code Kitchen",
    price: "₦1,700",
    rating: "4.7",
    image: "/lovable-uploads/d310186e-493e-43f4-a75b-51cf03143e42.png",
    description: "Tasty noodles served with your choice of fried or boiled eggs"
  }
];

const addOns = [
  {
    name: "Extra Chicken",
    price: "₦1,300",
    image: "🍗"
  },
  {
    name: "Sausage",
    price: "₦400",
    image: "🌭"
  },
  {
    name: "Boiled Egg",
    price: "₦300",
    image: "🥚"
  }
];

const PopularDishes = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Chef's Code Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delicious meals delivered right to your doorstep at Osun State University
          </p>
        </div>

        {/* Main Courses */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Main Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((dish, index) => (
              <Card key={dish.name} className="bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden">
                <CardContent className="p-0">
                  {/* Real food image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={dish.image} 
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
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
                      Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Add-Ons */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Add-Ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addOn, index) => (
              <Card key={addOn.name} className="bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {addOn.image}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {addOn.name}
                  </h4>
                  <span className="text-lg font-bold text-primary">
                    {addOn.price}
                  </span>
                  <Button size="sm" className="w-full mt-3 food-gradient text-white">
                    Add to Order
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Order? 🍴👨‍🍳
          </h3>
          <p className="text-gray-600 mb-6">
            Select your preferred dish and add-ons, and we'll deliver to your doorstep!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <Button className="food-gradient text-white hover:shadow-lg">
              Place an Order
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Customize Meal
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View Menu Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDishes;
