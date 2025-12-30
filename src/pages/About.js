import React from 'react';
import { Heart, Award, Globe, Users, Mail, Phone, MapPin, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Accessible Luxury',
      description: 'Making premium fragrances attainable for today\'s generation with pricing from ₹349 to ₹2000.',
    },
    {
      icon: Award,
      title: 'Innovation First',
      description: 'Pioneering India\'s first perfume vending machines to transform fragrance discovery.',
    },
    {
      icon: Globe,
      title: 'Modern Sophistication',
      description: 'Inspired by global luxury icons while maintaining contemporary Indian appeal.',
    },
    {
      icon: Users,
      title: 'Fragrance Experiences',
      description: 'Creating spontaneous, accessible, and enduring scent experiences for modern lifestyles.',
    },
  ];


  const innovations = [
    {
      year: '2024',
      title: 'India\'s First Perfume Vending Machine',
      description: 'Launched innovative vending machines in malls, cafés, and public spaces for instant fragrance access.',
    },
    {
      year: '2024',
      title: 'Accessible Luxury Pricing',
      description: 'Introduced premium fragrances starting at ₹349, making luxury attainable for today\'s generation.',
    },
    {
      year: '2024',
      title: 'Contemporary Indian Fragrance House',
      description: 'Founded with the vision to democratize luxury through innovative perfumery and disruptive distribution.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 to-yellow-500">
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 serif-font">Our Story</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            A contemporary Indian fragrance house democratizing luxury through innovative perfumery and accessible pricing
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 serif-font">The Ananta Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ananta is a contemporary Indian fragrance house founded on a singular belief: true luxury is meant to be experienced, not restricted. Inspired by the timeless sophistication of global luxury icons such as Gucci and Louis Vuitton, along with the accessibility and modern appeal of brands like Bella Vita, Ananta bridges the gap between high-end perfumery and everyday indulgence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Innovation lies at the core of Ananta. We are proud to introduce India's first perfume vending machine, transforming how consumers discover and experience fragrance. Strategically placed in high-footfall locations such as malls, cafés, and public spaces, Ananta vending machines make luxury instantly accessible.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-600">₹349</div>
                  <div className="text-sm text-gray-600">Starting Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600">₹2000</div>
                  <div className="text-sm text-gray-600">Premium Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600">First</div>
                  <div className="text-sm text-gray-600">Perfume Vending Machine</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="images/logo/ananta-logo.jpeg"
                alt="Ananta Perfumes laboratory"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 serif-font">Our Innovations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Revolutionizing the fragrance landscape with disruptive distribution and accessible luxury
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover-lift">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-yellow-600">{item.year}</p>
                  </div>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 serif-font">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Focus */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 serif-font">The Art of Accessible Luxury</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How we're redefining the fragrance landscape through innovation and accessibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Meticulous Craftsmanship</h3>
                  <p className="text-gray-700">Each Ananta fragrance is meticulously crafted using carefully selected notes that evoke elegance, strength, freshness, and individuality.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Disruptive Distribution</h3>
                  <p className="text-gray-700">Our innovative vending machines make luxury instantly accessible in high-footfall locations like malls, cafés, and public spaces.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Lifestyle Design</h3>
                  <p className="text-gray-700">Designed for modern lifestyles, our scent profiles are bold yet refined, versatile yet unmistakably memorable.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Democratizing Luxury</h3>
                  <p className="text-gray-700">By combining premium-quality perfumery with accessible pricing, we're redefining luxury for a new generation.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="images/products/product-12.jpeg"
                alt="Ananta perfume creation process"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Contact Information */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 serif-font">Get in Touch</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We'd love to hear from you. Visit our boutique or contact us for any inquiries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Our Boutique</h3>
              <p className="text-gray-300">123 Khalpara<br />Siliguri, West Bengal</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+91 98765 43210<br />Mon-Sat: 10AM-8PM IST</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">hello@ananta.in<br />support@ananta.in</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
