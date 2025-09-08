import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { AlertTriangle, CheckCircle, Frown, Smile } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Problem with{' '}
            <span className="text-[#0ca565] bg-clip-text text-transparent">
              Generic Stores
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most eCommerce stores struggle with poor product discovery, irrelevant suggestions, and lack of personalization, leading to lost customers and revenue.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Before RecomAI</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "Generic product recommendations that don't match customer preferences",
                  "High bounce rates due to irrelevant product discovery",
                  "Lost revenue from missed cross-selling opportunities",
                  "Poor customer experience with no personalization"
                ].map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <Frown className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{problem}</p>
                  </motion.div>
                ))}
              </div>

              {/* Mock Declining Stats */}
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">-15%</div>
                  <div className="text-sm text-red-500">Average Conversion Rate</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary/10 to-white rounded-2xl p-8 shadow-lg border-l-4 border-primary relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-white/10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">After RecomAI</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    "AI-powered personalized recommendations that adapt in real-time",
                    "Reduced bounce rates with engaging product discovery",
                    "Maximized revenue through intelligent cross-selling",
                    "Exceptional customer experience with hyper-personalization"
                  ].map((solution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <Smile className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{solution}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Mock Growing Stats */}
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+20%</div>
                    <div className="text-sm text-green-500">Average Conversion Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transformation Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <div className="bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg">
            RecomAI makes the difference →
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemSolution;