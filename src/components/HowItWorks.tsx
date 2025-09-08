import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Brain, ShoppingBag, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: MessageCircle,
      title: "Customer Interaction",
      description: "Shopper engages with our AI-powered chatbot assistant, sharing preferences and browsing behavior naturally.",
      color: "primary"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "RecomAI analyzes customer behavior, purchase history, and preferences using advanced machine learning algorithms in real-time.",
      color: "primary"
    },
    {
      icon: ShoppingBag,
      title: "Smart Recommendations",
      description: "Personalized product recommendations appear instantly, perfectly tailored to individual customer needs and preferences.",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Your store experiences increased conversions, higher average order values, and improved customer satisfaction.",
      color: "primary"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: {
        bg: "from-primary to-green-400",
        border: "border-primary/30",
        text: "text-primary"
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How{' '}
            <span className="text-primary">
              RecomAI Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent system transforms the shopping experience in four simple steps, delivering personalized recommendations that drive results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/70 h-full hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 1 ? 'lg:pl-16' : 'lg:pr-16'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getColorClasses(step.color).bg} rounded-xl flex items-center justify-center shadow-lg`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <span className={`text-sm font-semibold ${getColorClasses(step.color).text}`}>
                            Step {index + 1}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-primary shadow-lg z-10 hidden lg:flex items-center justify-center"
                >
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </motion.div>

                {/* Visual Illustration */}
                <div className={`w-full lg:w-5/12 mt-8 lg:mt-0 ${index % 2 === 1 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50"
                  >
                    {/* Mock illustration based on step */}
                    {index === 0 && (
                      <div className="space-y-3">
                        <div className="flex justify-end">
                          <div className="bg-primary/20 px-4 py-2 rounded-lg text-sm text-black">Hi! Looking for something specific?</div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-black">I need running shoes for trail running</div>
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="text-center space-y-4">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="w-16 h-16 bg-gradient-to-r from-primary to-green-400 rounded-full mx-auto flex items-center justify-center"
                        >
                          <Brain className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="text-sm text-gray-600">Analyzing preferences...</div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="grid grid-cols-2 gap-3">
                        {[1, 2, 3, 4].map((item) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: item * 0.1 }}
                            className="bg-primary/10 p-3 rounded-lg border border-primary/20"
                          >
                            <div className="w-full h-12 bg-primary/20 rounded mb-2"></div>
                            <div className="text-xs text-primary/80">Perfect Match!</div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                    {index === 3 && (
                      <div className="text-center space-y-4">
                        <TrendingUp className="w-16 h-16 text-primary mx-auto" />
                        <div className="space-y-1">
                          <div className="text-2xl font-bold text-primary">+47%</div>
                          <div className="text-sm text-gray-600">Revenue Increase</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;