"use client";

import { motion } from "framer-motion";
import { ArrowRight, Fuel, Gauge, Calendar } from "lucide-react";

const vehicles = [
  {
    id: 1,
    name: "2019 Toyota Corolla",
    price: "$14,995",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80",
    mileage: "32,000 mi",
    transmission: "Automatic",
    fuel: "Gasoline",
  },
  {
    id: 2,
    name: "2021 Honda CR-V",
    price: "$24,995",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4bc2749b5?auto=format&fit=crop&w=600&q=80",
    mileage: "28,000 mi",
    transmission: "Automatic",
    fuel: "Gasoline",
  },
  {
    id: 3,
    name: "2020 Ford F-150",
    price: "$32,995",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80",
    mileage: "45,000 mi",
    transmission: "Automatic",
    fuel: "Gasoline",
  },
  {
    id: 4,
    name: "2022 Nissan Altima",
    price: "$21,995",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80",
    mileage: "15,000 mi",
    transmission: "Automatic",
    fuel: "Gasoline",
  },
  {
    id: 5,
    name: "2020 Chevrolet Tahoe",
    price: "$38,995",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80",
    mileage: "52,000 mi",
    transmission: "Automatic",
    fuel: "Gasoline",
  },
  {
    id: 6,
    name: "2018 Mazda CX-5",
    price: "$18,995",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
    mileage: "38,000 mi",
    transmission: "Automatic",
    fuel: "Gasoline",
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

export default function Inventory() {
  return (
    <section id="inventory" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our quality selection of used cars, SUVs, and trucks. Each vehicle is inspected for quality and ready for the road.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {vehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              variants={item}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  In Stock
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">
                  {vehicle.price}
                </p>

                <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Gauge className="w-4 h-4" />
                    {vehicle.mileage}
                  </div>
                  <span>•</span>
                  <span>{vehicle.transmission}</span>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors">
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            View All Inventory
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
