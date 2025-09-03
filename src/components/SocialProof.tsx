import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Founder",
      company: "StyleHub",
      content: "RecomAI increased our conversion rate by 35% in just 6 weeks. The AI recommendations are incredibly accurate and our customers love the personalized experience.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Maria Rodriguez",
      role: "eCommerce Manager",
      company: "FitGear Pro",
      content: "The integration was seamless and the results were immediate. We've seen a 28% increase in average order value since implementing RecomAI.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "David Kim",
      role: "CMO",
      company: "TechAccessories",
      content: "Outstanding customer support and even better results. Our bounce rate dropped by 42% and customer engagement is through the roof.",
      rating: 5,
      avatar: "DK"
    }
  ];

  const logos = [
    "StyleHub", "FitGear", "TechAcc", "ShopPlus", "ModernStore", "EcoMarket"
  ];

  const metrics = [
    { value: "100+", label: "Shopify Partners" },
    { value: "2M+", label: "Revenue Generated" },
    { value: "50K+", label: "Happy Customers" },
    { value: "99.9%", label: "Uptime" }
  ];

  return (
    <div ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leading Brands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of successful eCommerce brands who have transformed their customer experience with RecomAI.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {metric.value}
              </div>
              <div className="text-gray-600 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200 transform rotate-180" />
                
                <div className="space-y-6">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.2 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-8 font-medium">
            Trusted by leading eCommerce brands worldwide
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.3, scale: 0.9 }}
                animate={isInView ? { opacity: 0.7, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className="bg-gray-100 rounded-lg p-4 text-center font-bold text-gray-600 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialProof;