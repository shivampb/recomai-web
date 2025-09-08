import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "14-day trial",
      description: "Perfect for small stores getting started with AI recommendations",
      features: [
        "Up to 1,000 recommendations/month",
        "Basic analytics dashboard",
        "Email support",
        "Standard AI models",
        "Shopify integration"
      ],
      cta: "Start Free Trial",
      popular: false,
      icon: Zap,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      name: "Pro",
      price: "$99",
      period: "/month",
      description: "Most popular plan for growing eCommerce businesses",
      features: [
        "Up to 50,000 recommendations/month",
        "Advanced analytics & insights",
        "Priority support",
        "Advanced AI models",
        "A/B testing capabilities",
        "Custom branding",
        "API access"
      ],
      cta: "Get Started",
      popular: true,
      icon: Star,
      gradient: "from-primary to-white"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large brands requiring enterprise-grade features",
      features: [
        "Unlimited recommendations",
        "White-label solution",
        "Dedicated account manager",
        "Custom AI model training",
        "Advanced integrations",
        "SLA guarantee",
        "Custom reporting"
      ],
      cta: "Contact Sales",
      popular: false,
      icon: Crown,
      gradient: "from-primary to-white"
    }
  ];

  return (
    <div ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="text-primary">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free trial and scale as your business grows. All plans include our core AI recommendation engine.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div className={`h-full bg-white rounded-2xl shadow-lg border-2 transition-all duration-500 overflow-hidden ${
                plan.popular 
                  ? 'border-primary/50 hover:border-primary/70 hover:shadow-2xl' 
                  : 'border-gray-200 hover:border-primary/50 hover:shadow-xl'
              }`}>
                {/* Animated border gradient */}
                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-white opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                    animate={{
                      background: [
                        'linear-gradient(45deg, #0ca565, #ffffff)',
                        'linear-gradient(45deg, #ffffff, #0ca565)',
                        'linear-gradient(45deg, #0ca565, #ffffff)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                )}

                <div className="relative z-10 p-8 space-y-8">
                  {/* Plan Header */}
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {plan.description}
                      </p>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-1">
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className={`text-4xl font-bold ${plan.name === 'Starter' ? 'text-green-600' : 'text-primary'}`}>
                          {plan.price}
                        </span>
                        <span className="text-gray-500">
                          {plan.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary' : 'text-green-500'}`} />
                        <span className="text-gray-700 text-sm">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-primary text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary/20 to-white/20 blur-xl'
                      : 'bg-gradient-to-r from-gray-400/20 to-gray-400/20 blur-xl'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-primary/10 rounded-2xl border border-primary/20"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-gray-900">30-Day Money-Back Guarantee</span>
          </div>
          <p className="text-gray-600">
            Not satisfied? Get a full refund within 30 days, no questions asked.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;