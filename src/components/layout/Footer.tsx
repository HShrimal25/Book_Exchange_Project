import React from 'react';
import { BookOpen, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">BookExchange</span>
            </div>
            <p className="text-gray-300 mb-4">
              Connect with your local community to exchange, borrow, and share books. 
              Perfect for students looking to exchange academic books by grade level.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>Serving communities across India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/browse" className="hover:text-blue-400 transition-colors">Browse Books</a></li>
              <li><a href="/add-book" className="hover:text-blue-400 transition-colors">Add Book</a></li>
              <li><a href="/how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="/safety" className="hover:text-blue-400 transition-colors">Safety Guidelines</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@bookexchange.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BookExchange. Built with ❤️ for the community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;