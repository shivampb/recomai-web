import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Twitter, Linkedin, Phone } from 'lucide-react';
import { SiProducthunt } from 'react-icons/si';

const Footer: React.FC = () => {
  const links = {
    solutions: [
      { name: 'Cosmetics AI', href: '#' },
      { name: 'Jewelry Intelligence', href: '#' },
      { name: 'Apparel Assistant', href: '#' },
      { name: 'Customer Insights', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Features', href: '/features' },
      { name: 'Case Studies', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: SiProducthunt, href: '#', label: 'Product Hunt' }
  ];

  return (
    <footer className="bg-[#2E5144] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-[#6EE7B7]">RecomAI</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Transforming eCommerce with AI-powered product recommendations and intelligent chatbots. Specialized solutions for Cosmetics, Jewelry, and Apparel industries.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3 text-[#6EE7B7]">
                <Mail className="w-5 h-5" />
                <span className='text-sm'>business@recomai.one</span>
              </div>
              <div className="flex items-center space-x-3 text-[#6EE7B7]">
                <Phone className="w-5 h-5" />
                <span className='text-sm'>+91 70410 83626</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-[#3E6152] rounded-full flex items-center justify-center hover:bg-[#6EE7B7] transition-all duration-300 text-[#6EE7B7] hover:text-[#2E5144]"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(links).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="space-y-4"
              >
                <h4 className="font-semibold text-lg capitalize">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {items.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-gray-300 text-sm hover:text-[#6EE7B7] transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12 mt-12 border-t border-[#3E6152] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-gray-400 text-sm">
            © 2025 RecomAI — A product by Destinova AI Labs Pvt. Ltd
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Built with AI-first architecture</span>
            <span>•</span>
            <span>Enterprise-grade security</span>
            <span>•</span>
            <span>99.9% uptime SLA</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;