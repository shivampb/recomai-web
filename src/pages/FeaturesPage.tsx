import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Search, Bot, BarChart3, Zap, Users, Shield, Smartphone, Globe, Settings } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const demoVideos = [
    {
      id: "demo1",
      title: "AI-Powered Product Recommendations",
      description: "See how RecomAI analyzes customer behavior and delivers personalized product suggestions in real-time.",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      id: "demo2", 
      title: "Shopify Integration Walkthrough",
      description: "Complete setup process from installation to first recommendations in under 5 minutes.",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    },
    {
      id: "demo3",
      title: "Analytics Dashboard Overview",
      description: "Explore the comprehensive analytics dashboard and revenue insights that drive growth.",
      videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
    }
  ];

  const features = [
    {
      icon: Search,
      title: "Smart Product Discovery",
      description: "Advanced machine learning algorithms analyze customer behavior, preferences, and purchase history to deliver highly relevant product recommendations that increase conversion rates by up to 35%.",
      benefits: [
        "Real-time behavior analysis",
        "Contextual product matching",
        "Cross-category recommendations",
        "Seasonal trend adaptation"
      ],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Bot,
      title: "Agentic AI Shopping Assistant",
      description: "Proactive AI chatbots that engage customers with intelligent conversations, answer product questions, and guide them through personalized shopping journeys.",
      benefits: [
        "Natural language processing",
        "24/7 customer engagement",
        "Product knowledge base",
        "Multi-language support"
      ],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: BarChart3,
      title: "Revenue Growth Analytics",
      description: "Comprehensive analytics dashboard providing deep insights into customer behavior, conversion patterns, and revenue optimization opportunities with actionable recommendations.",
      benefits: [
        "Real-time performance metrics",
        "Customer journey mapping",
        "A/B testing capabilities",
        "ROI tracking and reporting"
      ],
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Zap,
      title: "Seamless Shopify Integration",
      description: "Plug-and-play setup that integrates with your existing Shopify store within minutes. No complex configurations or technical expertise required to get started.",
      benefits: [
        "One-click installation",
        "Automatic product sync",
        "Theme compatibility",
        "No coding required"
      ],
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Users,
      title: "Customer Segmentation",
      description: "Advanced customer segmentation based on behavior, demographics, and purchase patterns to deliver hyper-personalized experiences for different customer groups.",
      benefits: [
        "Behavioral segmentation",
        "Demographic targeting",
        "Purchase pattern analysis",
        "Custom audience creation"
      ],
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, end-to-end encryption, and GDPR compliance to protect your customer data and maintain trust.",
      benefits: [
        "SOC 2 Type II certified",
        "End-to-end encryption",
        "GDPR compliant",
        "Regular security audits"
      ],
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const additionalFeatures = [
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Fully responsive recommendations that work seamlessly across all devices and screen sizes."
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "Support for multiple currencies and international markets with localized recommendations."
    },
    {
      icon: Settings,
      title: "Custom Configuration",
      description: "Flexible configuration options to match your brand style and business requirements."
    }
  ];

  return (
    <div ref={ref} className="pt-24 pb-16 bg-white">
      {/* Hero Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Powerful{' '}
              <span style={{ color: '#0ca565' }}>
                Features
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how RecomAI's advanced AI technology transforms your Shopify store 
              with intelligent product recommendations, analytics, and customer engagement tools.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Demo Videos Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              See RecomAI in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch these demo videos to see how RecomAI transforms the shopping experience 
              and drives results for eCommerce businesses.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {demoVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    {activeVideo === video.id ? (
                      <div className="aspect-video">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-t-2xl"
                        />
                      </div>
                    ) : (
                      <div 
                        className="relative aspect-video bg-gray-200 cursor-pointer group-hover:bg-gray-300 transition-colors"
                        onClick={() => setActiveVideo(video.id)}
                      >
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-full h-full object-cover rounded-t-2xl"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                            style={{ backgroundColor: '#0ca565' }}
                          >
                            <Play className="w-8 h-8 text-white ml-1" />
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {video.title}
                    </h3>
                    <p className="text-gray-600">
                      {video.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Core Features That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RecomAI combines cutting-edge AI technology with intuitive design to deliver 
              exceptional results for your eCommerce business.
            </p>
          </motion.div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: '#0ca565' }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-3">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: '#0ca565' }}
                          />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{ backgroundColor: '#0ca565' }}
                  >
                    Learn More
                  </motion.button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl"
                  >
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Features Grid */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Additional Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More features that make RecomAI the complete solution for your eCommerce needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 h-full">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: '#0ca565' }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-gray-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your free trial today and see how RecomAI can transform your Shopify store 
              with intelligent product recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                style={{ backgroundColor: '#0ca565' }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 border-2 text-gray-700 font-bold text-lg rounded-2xl hover:bg-gray-50 transition-all duration-300"
                style={{ borderColor: '#0ca565' }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;