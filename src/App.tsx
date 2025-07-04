import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<BrowseBooks />} />
            <Route path="/my-books" element={<div className="p-8">My Books - Coming Soon</div>} />
            <Route path="/requests" element={<div className="p-8">Requests - Coming Soon</div>} />
            <Route path="/messages" element={<div className="p-8">Messages - Coming Soon</div>} />
            <Route path="/profile" element={<div className="p-8">Profile - Coming Soon</div>} />
            <Route path="/add-book" element={<div className="p-8">Add Book - Coming Soon</div>} />
          </Routes>
        </Layout>
        <Toaster position="top-right" />
      </Router>
    </QueryClientProvider>
  );
}

export default App;