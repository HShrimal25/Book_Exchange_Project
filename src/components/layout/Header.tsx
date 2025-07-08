import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User, MessageCircle, Plus, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">BookExchange</span>
          </Link>

          {/* Desktop Navigation */}
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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <Link to="/messages" className="text-gray-700 hover:text-blue-600 p-2">
              <MessageCircle className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-blue-600 p-2">
              <User className="h-6 w-6" />
            </Link>
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/browse"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                Browse Books
              </Link>
              <Link
                to="/my-books"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                My Books
              </Link>
              <Link
                to="/requests"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMenu}
              >
                Requests
              </Link>
              <Link
                to="/add-book"
                className="block mx-3 mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                onClick={closeMenu}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Add Book</span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
