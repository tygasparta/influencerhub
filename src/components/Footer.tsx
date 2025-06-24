import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, MessageCircle, } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      name: 'WhatsApp', 
      url: 'https://wa.me/263718340867', 
      icon: MessageCircle,
      color: 'hover:text-green-400' 
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/cde_sambona1?igsh=MWM2cjA1N2g5MGQ1dg%3D%3D&utm_source=qr', 
      icon: Instagram,
      color: 'hover:text-pink-400' 
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/share/1HJp4BYY5e/?mibextid=wwXIfr', 
      icon: Facebook,
      color: 'hover:text-blue-400' 
    },
    { 
      name: 'YouTube', 
      url: 'http://www.youtube.com/@president_sambona', 
      icon: Youtube,
      color: 'hover:text-red-400' 
    },
  ];

  return (
    <footer className="bg-midnight-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full floating-animation" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-500/10 rounded-full floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-6 fade-in-up">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 floating-animation"></div>
              <span className="font-bold text-xl">Ronald T. Sambona</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering communities through education, journalism, and advocacy for women's rights and social justice.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-all duration-300 ${social.color} hover:scale-110 bounce-gentle bg-white/10`}
                  title={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Shop</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Influence Hub</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Educational Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200 inline-block">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors bounce-gentle" />
                <span className="text-gray-300 group-hover:text-white transition-colors">sambonaronaldt@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors bounce-gentle" />
                <span className="text-gray-300 group-hover:text-white transition-colors">+263718340867</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors bounce-gentle" />
                <span className="text-gray-300 group-hover:text-white transition-colors">Zimbabwe</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-300">
            &copy; 2025 Ronald T. Sambona. All rights reserved. | 
            <span className="text-gray-400"> @takudzwasambona</span> | 
            <span className="text-gray-400"> ronaldtsambona</span> | 
            <span className="text-gray-400"> sambona</span>
            <br />
            <span className="text-gray-400">Developed by: Tungasonics dEv Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
