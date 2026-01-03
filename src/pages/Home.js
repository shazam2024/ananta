import React from 'react';
import { ArrowRight, Star, Quote, Mail } from 'lucide-react';
import { featuredProducts } from '../data/products';

const Home = () => {

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Ananta perfumes are absolutely divine! The scents are sophisticated and long-lasting.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      text: 'I\'ve been wearing Royal Oud for months and always receive compliments. Truly exceptional quality.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'Emma Williams',
      rating: 5,
      text: 'The attention to detail in every bottle is remarkable. Ananta has become my signature scent.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 serif-font">
            <span className="block text-gradient mt-2">The infinite signature</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            True luxury is meant to be experienced, not restricted. Discover premium fragrances starting at just ₹349.
          </p>
          <button 
            onClick={() => window.location.href = '/products'}
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>Explore Collection</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 serif-font">Featured Perfumes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of premium fragrances that define elegance and sophistication
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer hover-lift bg-gray-50 rounded-lg overflow-hidden">
                <div className="relative overflow-hidden h-80">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-yellow-600 font-medium mb-2">{product.category}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="text-xs text-gray-500 block">50ml</span>
                      <span className="text-lg font-bold text-gray-900">₹{product.price50ml}</span>
                    </div>
                    <div className="w-px h-8 bg-gray-300"></div>
                    <div>
                      <span className="text-xs text-gray-500 block">100ml</span>
                      <span className="text-lg font-bold text-gray-900">₹{product.price100ml}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 serif-font">The Ananta Philosophy</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ananta is a contemporary Indian fragrance house founded on a singular belief: true luxury is meant to be experienced, not restricted. Inspired by timeless sophistication of global luxury icons, we bridge the gap between high-end perfumery and everyday indulgence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our fragrances deliver a premium, long-lasting, and confident scent experience—starting at just ₹349, with our highest range capped at ₹2000, making luxury attainable for today's generation. We are proud to introduce India's first perfume vending machine, transforming how consumers discover and experience fragrance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-yellow-600">₹349</div>
                  <div className="text-sm text-gray-600">Starting Price</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-yellow-600">₹2000</div>
                  <div className="text-sm text-gray-600">Premium Range</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="images/logo/ananta-logo.jpeg"
                alt="Ananta perfume collection"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 serif-font">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have discovered their perfect scent with Ananta
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg hover-lift">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <Quote className="text-yellow-500 mb-4" size={24} />
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4 serif-font">Stay Connected</h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to receive exclusive offers, new product launches, and fragrance tips
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
