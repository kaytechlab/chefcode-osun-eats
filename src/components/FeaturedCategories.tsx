
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Nigerian Dishes",
    description: "Authentic local flavors",
    emoji: "🍲",
    color: "bg-orange-100 hover:bg-orange-200"
  },
  {
    name: "Fast Food",
    description: "Quick bites & snacks",
    emoji: "🍔",
    color: "bg-red-100 hover:bg-red-200"
  },
  {
    name: "Healthy Options",
    description: "Fresh & nutritious",
    emoji: "🥗",
    color: "bg-green-100 hover:bg-green-200"
  },
  {
    name: "Beverages",
    description: "Drinks & refreshments",
    emoji: "🥤",
    color: "bg-blue-100 hover:bg-blue-200"
  },
  {
    name: "Desserts",
    description: "Sweet treats",
    emoji: "🍰",
    color: "bg-pink-100 hover:bg-pink-200"
  },
  {
    name: "Late Night",
    description: "24/7 available",
    emoji: "🌙",
    color: "bg-purple-100 hover:bg-purple-200"
  }
];

const FeaturedCategories = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Are You Craving?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From authentic Nigerian dishes to quick snacks, we've got all your favorites covered
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.name}
              className={`${category.color} border-0 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 group`}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {category.emoji}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-600">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
