
import { MapPin, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              Chef's <span className="text-primary">Code</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              The premier food delivery platform for Osun State University. 
              Connecting students with their favorite campus vendors for quick, 
              convenient meal delivery.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Osun State University, Osogbo</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Browse Restaurants</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Popular Dishes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* For Vendors */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Vendors</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Partner with Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Vendor Dashboard</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Guidelines</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Chef's Code. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
