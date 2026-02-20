import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50 flex items-center justify-center">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Layout;
