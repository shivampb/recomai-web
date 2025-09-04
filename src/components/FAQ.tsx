import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly can I integrate RecomAI with my Shopify store?",
      answer: "RecomAI integrates with your Shopify store in under 5 minutes. Simply install our app from the Shopify App Store, connect your account, and our AI will start analyzing your products and customer behavior immediately. No coding or technical expertise required."
    },
    {
      question: "What makes RecomAI different from other recommendation engines?",
      answer: "RecomAI uses next-generation Agentic AI that goes beyond simple collaborative filtering. Our AI agents proactively engage customers, understand context and intent, and adapt recommendations in real-time based on browsing behavior, purchase history, and even seasonal trends. This results in 20%+ higher conversion rates compared to traditional recommendation systems."
    },
    {
      question: "Do I need technical knowledge to use RecomAI?",
      answer: "Not at all! RecomAI is designed for business owners and marketers, not developers. Our intuitive dashboard makes it easy to monitor performance, customize settings, and view analytics. The AI handles all the complex algorithms automatically, so you can focus on growing your business."
    },
    {
      question: "How does the AI learn about my customers and products?",
      answer: "Our AI analyzes multiple data points including browsing patterns, purchase history, product attributes, customer demographics, and real-time behavior. The more data it processes, the smarter it becomes. Within 24-48 hours, you'll start seeing highly accurate recommendations that improve continuously."
    },
    {
      question: "Is my customer data secure with RecomAI?",
      answer: "Absolutely. We use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and GDPR compliance. Your customer data is processed securely and never shared with third parties. We maintain 99.9% uptime with redundant systems and regular security audits."
    },
    {
      question: "What kind of results can I expect?",
      answer: "Our customers typically see a 20-35% increase in conversion rates, 25-45% reduction in bounce rates, and 15-30% higher average order values within the first 30 days. Results vary based on your store size, product catalog, and customer base, but we guarantee measurable improvements or your money back."
    },
    {
      question: "Can I customize the recommendation widgets and styling?",
      answer: "Yes! RecomAI offers extensive customization options. You can modify colors, fonts, layouts, and positioning to match your brand perfectly. Our Pro and Enterprise plans include advanced styling options and custom CSS support for complete design control."
    },
    {
      question: "Do you offer support during setup and beyond?",
      answer: "We provide comprehensive support at every level. Starter plans include email support, Pro plans get priority support with faster response times, and Enterprise customers receive dedicated account management with phone support and custom training sessions."
    },
    {
      question: "What happens if I'm not satisfied with the results?",
      answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not completely satisfied with the performance improvements, we'll provide a full refund, no questions asked. We're confident in our technology and stand behind our results."
    },
    {
      question: "Can RecomAI handle high-traffic stores?",
      answer: "Absolutely. Our infrastructure is built to scale automatically, handling everything from small boutiques to enterprise stores with millions of monthly visitors. We use cloud-native architecture with auto-scaling capabilities to ensure consistent performance regardless of traffic spikes."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-gray-700">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Know About RecomAI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our AI-powered recommendation engine and how it can transform your Shopify store.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                          className="border-t border-gray-100 pt-6"
                        >
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you understand how RecomAI can transform your Shopify store.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-blue-200 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
            >
              Contact Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;