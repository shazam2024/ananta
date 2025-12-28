import React from 'react';
import { Heart, Award, Globe, Users, Mail, Phone, MapPin, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Crafted with Passion',
      description: 'Every perfume is meticulously crafted by our master perfumers with decades of experience.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest ingredients from around the world to ensure exceptional quality.',
    },
    {
      icon: Globe,
      title: 'Sustainable Luxury',
      description: 'Committed to environmentally responsible practices without compromising on luxury.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority, with exceptional service and personalized experiences.',
    },
  ];

  const team = [
    {
      name: 'Isabella Romano',
      role: 'Master Perfumer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b912bd6d?w=200&h=200&fit=crop',
      bio: 'With over 25 years of experience, Isabella creates our signature fragrances.',
    },
    {
      name: 'James Chen',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      bio: 'James leads our creative vision and brand storytelling.',
    },
    {
      name: 'Sophie Laurent',
      role: 'Head of Sourcing',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      bio: 'Sophie travels the world to find the most precious ingredients.',
    },
  ];

  const timeline = [
    {
      year: '1985',
      title: 'The Beginning',
      description: 'Ananta was founded in Paris with a vision to create timeless fragrances.',
    },
    {
      year: '1995',
      title: 'First Boutique',
      description: 'Opened our flagship store on Champs-Élysées, Paris.',
    },
    {
      year: '2005',
      title: 'Global Expansion',
      description: 'Expanded to New York, London, and Tokyo markets.',
    },
    {
      year: '2015',
      title: 'Sustainability Commitment',
      description: 'Launched our eco-friendly packaging and sustainable sourcing initiatives.',
    },
    {
      year: '2024',
      title: 'Digital Innovation',
      description: 'Launched our online platform to reach fragrance lovers worldwide.',
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
            Crafting exceptional fragrances that capture the essence of elegance and sophistication since 1985
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 serif-font">The Ananta Journey</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Born from a passion for perfumery and a vision to create timeless scents, Ananta began its journey in the heart of Paris. Our founder, a third-generation perfumer, dreamed of creating fragrances that would become cherished memories for generations to come.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, Ananta stands as a symbol of luxury and sophistication, with our fragrances gracing the vanities of discerning customers worldwide. Each bottle represents our unwavering commitment to quality, creativity, and the art of perfumery.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-yellow-600">39+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600">150+</div>
                  <div className="text-sm text-gray-600">Unique Fragrances</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-600">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bfdc4033ba?w=600&h=400&fit=crop"
                alt="Perfume laboratory"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 serif-font">Our Milestones</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Journey through our history of innovation and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
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

      {/* Manufacturing Process */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 serif-font">The Art of Perfumery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how we create our exceptional fragrances
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sourcing Premium Ingredients</h3>
                  <p className="text-gray-700">We travel the world to find the most precious essential oils and raw materials.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Masterful Blending</h3>
                  <p className="text-gray-700">Our perfumers carefully balance notes to create harmonious compositions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Aging & Maturation</h3>
                  <p className="text-gray-700">Each fragrance ages for months to develop its full character and depth.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                  <p className="text-gray-700">Rigorous testing ensures every bottle meets our exacting standards.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1598440092783-0c1c40f0b4d2?w=600&h=400&fit=crop"
                alt="Perfume ingredients"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 serif-font">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The talented individuals behind our exceptional fragrances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 mx-auto w-48 h-48">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
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
              <p className="text-gray-300">123 Luxury Lane<br />Beverly Hills, CA 90210</p>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567<br />Mon-Fri: 9AM-6PM PST</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">info@ananta.com<br />support@ananta.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
