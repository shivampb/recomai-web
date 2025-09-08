import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Clock, Target, Shield } from 'lucide-react';

const Benefits: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: TrendingUp,
      title: "20%+ Higher Conversions",
      description: "Increase your conversion rates with AI-powered personalization that adapts to each customer's unique preferences and shopping behavior.",
      stat: "20%",
      statLabel: "Average Increase",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "Reduce Bounce Rates",
      description: "Keep visitors engaged longer with relevant product recommendations that match their interests from the moment they arrive.",
      stat: "45%",
      statLabel: "Bounce Rate Reduction",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Target,
      title: "Hyper-Personalized Journeys",
      description: "Create unique shopping experiences for every customer with AI that learns and adapts to individual preferences in real-time.",
      stat: "3x",
      statLabel: "More Engagement",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Secure & Scalable AI",
      description: "Enterprise-grade security with scalable infrastructure that grows with your business while protecting customer data.",
      stat: "99.9%",
      statLabel: "Uptime Guarantee",
      gradient: "from-orange-500 to-red-600"
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
            Why Brands Choose{' '}
            <span className="text-primary">
              RecomAI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of successful eCommerce brands who have transformed their customer experience and boosted revenue with our AI-powered recommendations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Background gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10 space-y-6 text-center">
                  {/* Icon and Stat */}
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-20 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                    >
                      <benefit.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Large Stat */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                      className="space-y-1"
                    >
                      <div className={`text-4xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                        {benefit.stat}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {benefit.statLabel}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Animated progress bar */}
                  <motion.div
                    className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.5 }}
                  >
                    <motion.div
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${benefit.gradient} rounded-full`}
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 1.5, delay: index * 0.15 + 0.7, ease: "easeOut" }}
                    />
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, ${benefit.gradient.split(' ')[1]} 0%, ${benefit.gradient.split(' ')[3]} 100%)`,
                    filter: 'blur(20px)',
                    transform: 'scale(1.1)',
                    zIndex: -1
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
        >
          <p className="text-lg text-gray-700 italic mb-4">
            "RecomAI transformed our customer experience. We saw a 47% increase in conversions within the first month."
          </p>
          <div className="font-semibold text-gray-900">Sarah Johnson</div>
          <div className="text-sm text-gray-600">CEO, TechStyle Boutique</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;