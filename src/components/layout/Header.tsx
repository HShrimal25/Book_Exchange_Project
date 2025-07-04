import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User, MessageCircle, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">BookExchange</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/browse" className="text-gray-700 hover:text-blue-600 transition-colors">
              Browse Books
            </Link>
            <Link to="/my-books" className="text-gray-700 hover:text-blue-600 transition-colors">
              My Books
            </Link>
            <Link to="/requests" className="text-gray-700 hover:text-blue-600 transition-colors">
              Requests
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/add-book"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Book</span>
            </Link>
            <Link to="/messages" className="text-gray-700 hover:text-blue-600">
              <MessageCircle className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-blue-600">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;