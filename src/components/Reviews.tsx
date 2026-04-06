"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rose B.",
    date: "7 years ago",
    rating: 5,
    text: "Exceeded my expectations! Thanks. I'm happy the owner exceeded my expectations! Thanks. He is very friendly and I felt at ease through the entire process. I feel I was treated very well and got a great deal.",
  },
  {
    name: "Abraham R.",
    date: "4 years ago",
    rating: 5,
    text: "I had the pleasure of purchasing a vehicle from here. The customer service was excellent and the listing was affordable. 5/5 would recommend!",
  },
  {
    name: "Dan V.",
    date: "6 years ago",
    rating: 5,
    text: "I thought Augusto was an honest man when I bought his own 'Family Transit Van', advertised as a very clean, single owner vehicle. He wooed me with his mechanic declaring the van was in perfect condition.",
  },
  {
    name: "Carolina G.",
    date: "6 years ago",
    rating: 5,
    text: "Miami auto liquidators are the best dealership in Miami!!!! They help me get my car and help me with all the process so easy and fast. I am really thankful for their help.",
  },
  {
    name: "Rafael R.",
    date: "9 years ago",
    rating: 5,
    text: "Excellent service. I've been in a lot of dealers but I think this one was the best. I got a good car for an excellent price.",
  },
  {
    name: "Augusto",
    date: "Business Owner",
    rating: 5,
    text: "Thank you for choosing our dealer for your purchase. We wanted to express our gratitude for your recent purchase. We hope you enjoy driving your new car as much as we enjoyed having you as a customer.",
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

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-yellow-400"
              >★</motion.span>
            ))}
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who found their perfect vehicle at Miami Auto Liquidators.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#171717] rounded-2xl p-8 relative border border-[#262626] hover:border-blue-600/30 transition-all"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-600/20" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                &quot;{review.text}&quot;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors"
          >
            Read All Reviews
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
