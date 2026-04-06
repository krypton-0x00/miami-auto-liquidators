"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  CreditCard, 
  RefreshCw, 
  HeadphonesIcon,
  Award,
  Clock
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Every vehicle undergoes a thorough 150-point inspection to ensure reliability and safety.",
  },
  {
    icon: CreditCard,
    title: "Flexible Financing",
    description: "We help you get approved, even with challenging credit. Multiple financing options available.",
  },
  {
    icon: RefreshCw,
    title: "Trade-In Welcome",
    description: "Get a fair market value for your current vehicle. We accept all makes and models.",
  },
  {
    icon: HeadphonesIcon,
    title: "No Pressure Sales",
    description: "Our team is here to help, not to push. Take your time and find the perfect vehicle.",
  },
  {
    icon: Award,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. What you see is what you pay.",
  },
  {
    icon: Clock,
    title: "Fast & Easy Process",
    description: "Complete your purchase in as little as 30 minutes. We handle all the paperwork.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Miami Auto Liquidators
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are committed to providing an exceptional car buying experience with transparency and integrity.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors group"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "186+", label: "Happy Customers" },
            { number: "500+", label: "Vehicles Sold" },
            { number: "15+", label: "Years Experience" },
            { number: "4.9", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
