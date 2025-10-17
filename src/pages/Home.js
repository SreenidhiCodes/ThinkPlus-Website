import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-center mt-16">
      <motion.h1
        className="text-4xl font-bold text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Empowering Future Learners with ThinkPlus
      </motion.h1>
      <p className="mt-4 text-gray-600">
        Learn. Grow. Succeed — your one-stop EdTech destination.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md"
      >
        Explore Courses
      </motion.button>
    </div>
  );
}
