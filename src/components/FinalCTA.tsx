import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-primary">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(12, 165, 101, 0.8), rgba(12, 165, 101, 0.6))',
              'linear-gradient(45deg, rgba(12, 165, 101, 0.6), rgba(12, 165, 101, 0.4))',
              'linear-gradient(45deg, rgba(12, 165, 101, 0.4), rgba(12, 165, 101, 0.8))',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-white/10 rounded-full blur-xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <Sparkles className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-semibold">Ready to Transform Your Store?</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Boost Your Shopify Store<br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Revenue with AI
              </span>
            </h2>

            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful eCommerce brands who have increased their conversions by 20%+ with RecomAI's intelligent product recommendations.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: "20%+", label: "Higher Conversions" },
              { value: "45%", label: "Less Bounce Rate" },
              { value: "$2M+", label: "Revenue Generated" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-white text-primary font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                <Rocket className="w-6 h-6 mr-3" />
                Schedule a Demo Today
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 border-2 border-white/40 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Start Free Trial
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4 pt-8"
          >
            <p className="text-white/70 text-sm">
              ✓ 14-day free trial • ✓ No credit card required • ✓ Setup in under 5 minutes
            </p>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.1 }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                </motion.div>
              ))}
              <span className="text-white/80 text-sm ml-2">
                Trusted by 100+ Shopify partners worldwide
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;