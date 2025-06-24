import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, ShoppingCart, User, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const socialLinks = [
    { 
      name: 'WhatsApp', 
      url: 'https://wa.me/263718340867', 
      icon: MessageCircle,
      color: 'hover:text-green-500' 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/cde_sambona1?igsh=MWM2cjA1N2g5MGQ1dg%3D%3D&utm_source=qr', 
      icon: Instagram,
      color: 'hover:text-pink-500' 
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/share/1HJp4BYY5e/?mibextid=wwXIfr', 
      icon: Facebook,
      color: 'hover:text-blue-500' 
    },
    { 
      name: 'YouTube', 
      url: 'http://www.youtube.com/@president_sambona', 
      icon: Youtube,
      color: 'hover:text-red-500' 
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pulse-glow">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4 slide-in-left">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 floating-animation"></div>
            <span className="font-bold text-xl text-foreground">Ronald T. Sambona</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 fade-in-up">
          <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">Home</a>
          <a href="#gallery" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">Gallery</a>
          <a href="#shop" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">Influence Hub</a>
          <a href="#education" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">Articles</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">About</a>
          <Link to="/lessons" className="text-foreground hover:text-primary transition-colors font-medium hover:scale-105 transform duration-200">English Lessons</Link>
        </nav>

        <div className="flex items-center space-x-4 fade-in-up">
          {/* Social Media Links */}
          <div className="hidden lg:flex items-center space-x-2">
            {socialLinks.map((social, idx) => (
              social.name === 'WhatsApp' ? (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-all duration-300 ${social.color} hover:scale-110 bounce-gentle group focus:outline-none`}
                  title={social.name}
                >
                  <div className="relative flex items-center justify-center">
                    <social.icon className="h-5 w-5" />
                    <span className="absolute left-1/2 -bottom-1 w-6 h-1 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transform -translate-x-1/2 transition-all duration-200"></span>
                  </div>
                </a>
              ) : (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-all duration-300 ${social.color} hover:scale-110 bounce-gentle`}
                  title={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
