import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, BookOpen } from 'lucide-react';

const BrowseBooks: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Mock data - replace with actual API call
  const books = [
    {
      id: '1',
      title: 'Mathematics Class 10 NCERT',
      author: 'NCERT',
      grade: 10,
      subject: 'Mathematics',
      category: 'academic',
      condition: 'good',
      owner: { name: 'Rahul Sharma', rating: 4.5, location: 'Sector 15, Noida' },
      images: ['https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'],
      exchangeType: 'exchange',
      available: true
    },
    {
      id: '2',
      title: 'Harry Potter and the Philosopher\'s Stone',
      author: 'J.K. Rowling',
      category: 'fiction',
      condition: 'excellent',
      owner: { name: 'Priya Patel', rating: 4.8, location: 'Koramangala, Bangalore' },
      images: ['https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg'],
      exchangeType: 'both',
      available: true
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Books</h1>
        <p className="text-gray-600">Discover books available for exchange or borrowing in your area</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search books, authors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Grade Filter */}
          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Grades</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>Grade {i + 1}</option>
            ))}
          </select>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            <option value="academic">Academic</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="children">Children</option>
            <option value="other">Other</option>
          </select>

          {/* Location */}
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Enter pincode"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={book.images[0]}
                alt={book.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{book.title}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  book.condition === 'excellent' ? 'bg-green-100 text-green-800' :
                  book.condition === 'good' ? 'bg-blue-100 text-blue-800' :
                  book.condition === 'fair' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {book.condition}
                </span>
              </div>
              
              <p className="text-gray-600 mb-2">by {book.author}</p>
              
              {book.grade && (
                <div className="flex items-center space-x-2 mb-3">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-blue-600 font-medium">Grade {book.grade}</span>
                  {book.subject && <span className="text-sm text-gray-500">• {book.subject}</span>}
                </div>
              )}
              
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{book.owner.rating}</span>
                </div>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-600">{book.owner.name}</span>
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{book.owner.location}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 text-sm rounded-full ${
                  book.exchangeType === 'exchange' ? 'bg-blue-100 text-blue-800' :
                  book.exchangeType === 'lend' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {book.exchangeType === 'both' ? 'Exchange/Lend' : 
                   book.exchangeType === 'exchange' ? 'Exchange Only' : 'Lend Only'}
                </span>
                
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Request
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;