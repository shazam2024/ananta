import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Categories',
      links: [
        { name: 'Men\'s Collection', href: '/products?category=men' },
        { name: 'Women\'s Collection', href: '/products?category=women' },
        { name: 'Unisex', href: '/products?category=unisex' },
        { name: 'Limited Edition', href: '/products?category=limited' },
      ],
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <img 
                src="/images/logo/ananta-logo.jpeg" 
                alt="Ananta Logo" 
                className="w-55 h-12 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              /> */}
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold serif-font">Ananta</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the essence of luxury with our handcrafted perfumes. Each scent tells a story of elegance and sophistication.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 flex items-center space-x-1"
                    >
                      <ChevronRight size={16} />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} className="text-yellow-500" />
                <span className="text-sm">hello@ananta.in</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={18} className="text-yellow-500" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} className="text-yellow-500" />
                <span className="text-sm">Khalpara, Siliguri, West Bengal, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Ananta Perfumes. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
