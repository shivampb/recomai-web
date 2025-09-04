import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, ShoppingCart, Sparkles } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-gray-700">
                  Powered by Next-Gen Agentic AI
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                  Ecommerce Store
                </span>{" "}
                with ReComAI
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                ReComAI empowers eCommerce brands to increase revenue, boost
                conversions, and deliver personalized shopping journeys —
                powered by next-generation Agentic AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get a Free Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.5)",
                      "0 0 0 10px rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.button>

              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-colors duration-300">
                View Case Studies
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">20%+</div>
                <div className="text-sm text-gray-600">Higher Conversions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Shopify Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">$2M+</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/30">
              <div className="space-y-6">
                {/* Mock AI Interface */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-xl text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <Bot className="w-6 h-6" />
                    <span className="font-semibold">RecomAI Assistant</span>
                  </div>
                  <p className="text-sm opacity-90">
                    Analyzing customer behavior and recommend products...
                  </p>
                </div>

                {/* Mock Product Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Product 1 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/40"
                  >
                    <img
                      src="https://media.gettyimages.com/id/2210675120/photo/a-white-cosmetic-jar-floats-in-a-surreal-rocky-canyon-lit-with-dramatic-lighting.jpg?s=612x612&w=0&k=20&c=bsN-9LgK9NhCIMJ9mWTjpOWN5pOjHy7z_dPlXh1bR-s="
                      alt="Product 1"
                      className="w-full h-20 object-cover rounded-lg mb-2"
                    />
                    <div className="h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  </motion.div>

                  {/* Product 2 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/40"
                  >
                    <img
                      src="https://media.gettyimages.com/id/1404863415/photo/white-cream-tube-near-white-orchid-flower-on-light-yellow-mockup-skincare-product.jpg?s=612x612&w=0&k=20&c=61S4XigkBxVMmXqRWl7roo8ZrnFGnZrESUrKz6MqItY="
                      alt="Product 2"
                      className="w-full h-20 object-cover rounded-lg mb-2"
                    />
                    <div className="h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  </motion.div>

                  {/* Product 3 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/40"
                  >
                    <img
                      src="https://media.gettyimages.com/id/2210406877/photo/white-plastic-medicine-jar-on-stone-yellow-background-mock-up.jpg?s=612x612&w=0&k=20&c=6OgEStJanJXaPZf0QEcbBu7aD8n_bZ3JXPPRtg43_IE="
                      alt="Product 3"
                      className="w-full h-20 object-cover rounded-lg mb-2"
                    />
                    <div className="h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  </motion.div>

                  {/* Product 4 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/40"
                  >
                    <img
                      src="https://media.gettyimages.com/id/1349489169/photo/face-serum-in-green-glass-bottles-in-bright-sunlight-over-pink-background-popular-skin-care.jpg?s=612x612&w=0&k=20&c=BO_35q9ZvWUR9JRmpiUFDCDXYZyttDeoOhBYBMd3CnI="
                      alt="Product 4"
                      className="w-full h-20 object-cover rounded-lg mb-2"
                    />
                    <div className="h-2 bg-gray-300 rounded mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                  </motion.div>
                </div>

                {/* Mock Conversion Indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="bg-green-100 border border-green-300 rounded-lg p-3 text-center"
                >
                  <ShoppingCart className="w-6 h-6 text-green-600 mx-auto mb-1" />
                  <p className="text-sm text-green-700 font-semibold">
                    +47% Conversion Rate!
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;