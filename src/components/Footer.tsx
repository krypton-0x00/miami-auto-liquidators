"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Visit Us Today
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Come see our wide selection of quality used vehicles. Our friendly team is ready to help you find your perfect car.
            </p>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Address</h3>
                  <p className="text-gray-400">
                    3614 NW 36th St<br />
                    Miami, FL 33142<br />
                    United States
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <a href="tel:+13057833879" className="text-gray-400 hover:text-blue-400 font-medium transition-colors">
                    (305) 783-3879
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Hours</h3>
                  <p className="text-gray-400">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#171717] rounded-2xl shadow-lg overflow-hidden border border-[#262626]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.338864495464!2d-80.24663568478632!3d25.81387648364036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bcec4b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sMiami%20Auto%20Liquidators!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-8 border-t border-[#262626]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <img src="/logo.png" alt="Miami Auto Liquidators" className="w-12 h-12 object-contain rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-white">Miami Auto</h1>
                <p className="text-xs text-gray-500 -mt-1">Liquidators</p>
              </div>
            </motion.div>

            <div className="flex items-center gap-6">
              <motion.a 
                href="https://www.instagram.com/miamiautoliq/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#e1306c" }}
                className="text-gray-400 font-medium transition-colors"
              >
                Instagram
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/miamiautoliq/" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#1877f2" }}
                className="text-gray-400 font-medium transition-colors"
              >
                Facebook
              </motion.a>
              <motion.a 
                href="https://x.com/miamiautoliq1" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, color: "#ffffff" }}
                className="text-gray-400 font-medium transition-colors"
              >
                X (Twitter)
              </motion.a>
            </div>

            <p className="text-gray-500 text-sm">
              © 2026 Miami Auto Liquidators. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
