import React from 'react';
import { useState } from 'react';
import { Shield, Scale, Users, BookOpen, Building2, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import UserCategories from './components/UserCategories';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero />
        <Features />
        <UserCategories />
      </main>
      <Footer />
    </div>
  );
}

export default App;