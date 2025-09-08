import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Bot, BarChart3, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Search,
      title: "Smart Product Discovery",
      description: "Personalized recommendations powered by advanced machine learning algorithms that adapt to each customer's unique preferences and behavior patterns in real-time.",
      gradient: "from-primary to-green-400"
    },
    {
      icon: Bot,
      title: "Agentic AI Bots",
      description: "Proactive shopping assistants that engage users with intelligent conversations, guiding them through personalized product journeys and answering questions instantly.",
      gradient: "from-primary to-green-400"
    },
    {
      icon: BarChart3,
      title: "Revenue Growth Insights",
      description: "Advanced analytics dashboards providing deep insights into customer behavior, conversion patterns, and revenue optimization opportunities with actionable recommendations.",
      gradient: "from-primary to-green-400"
    },
    {
      icon: Zap,
      title: "Seamless Shopify Integration",
      description: "Plug-and-play setup that integrates with your existing Shopify store within minutes. No complex configurations or technical expertise required to get started.",
      gradient: "from-primary to-green-400"
    }
  ];

  return (
    <div ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features That{' '}
            <span className="text-primary">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RecomAI combines cutting-edge AI technology with intuitive design to deliver exceptional results for your eCommerce business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="relative h-full bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm" />
                
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <motion.div
                    className="w-full h-1 bg-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  />
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(12, 165, 101, 0)',
                      '0 0 0 4px rgba(12, 165, 101, 0.1)',
                      '0 0 0 0 rgba(12, 165, 101, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Explore All Features
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;