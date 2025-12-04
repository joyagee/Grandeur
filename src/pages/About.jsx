import React from "react";

import { FaLeaf, FaGem, FaHeart, FaUsers } from "react-icons/fa";
import Layout from "../shared/Navigation/Layout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <div className="bg-white text-gray-800 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="relative bg-primary text-white py-24 px-6 text-center">
          <motion.h
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 6 }}
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >
            About <span className="text-yellow-300"> Granduer Fashion</span>
          </motion.h>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200"
          >
            Where passion meets creativity — redefining African-inspired fashion
            with a modern global twist. We’re not just a brand; we’re a
            movement.
          </motion.p>
        </section>

        {/* Our Story */}
        <section className="py-20 px-8 md:px-20 flex flex-col md:flex-row items-center gap-10 bg-gray-50">
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-6"
            >
              Our Story
            </motion.h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in the heart of Lagos, Nigeria, **Granduer Fashion** began
              as a dream to blend African heritage with global style. What
              started as a small creative studio has evolved into a thriving
              brand that celebrates identity, confidence, and culture through
              every thread.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every piece we create carries the essence of craftsmanship,
              boldness, and elegance — designed for individuals who express
              their stories through fashion. We’re inspired by you — your
              courage, your passion, your energy.
            </p>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            src="/public/images/woman39.jpg"
            alt="Granduer Story"
            className="rounded-3xl shadow-2xl flex-1 object-cover h-[400px] w-full"
          />
        </section>

        {/* Mission, Vision, Values */}
        <section className="bg-primary text-white py-20 px-6 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Our Mission, Vision & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white text-primary p-8 rounded-3xl shadow-lg"
            >
              <FaGem className="text-4xl text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-xl mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To empower self-expression through timeless, ethical, and
                contemporary fashion that celebrates individuality and culture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white text-primary p-8 rounded-3xl shadow-lg"
            >
              <FaLeaf className="text-4xl text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-xl mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To become a global fashion powerhouse rooted in African
                creativity — inspiring a new generation of style and confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-white text-primary p-8 rounded-3xl shadow-lg"
            >
              <FaHeart className="text-4xl text-primary mb-4 mx-auto" />
              <h3 className="font-semibold text-xl mb-3">Our Values</h3>
              <p className="text-gray-700">
                Integrity, creativity, inclusivity, and sustainability. Every
                stitch we make embodies these principles.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Community Section */}
        <section className="py-20 px-8 md:px-20 flex flex-col md:flex-row items-center gap-10 bg-gray-100">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src="/public/images/child17.jpg"
            alt="Community"
            className="rounded-3xl shadow-2xl flex-1 object-cover h-[400px] w-full"
          />

          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-primary mb-6"
            >
              Our Community
            </motion.h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Granduer is more than just fashion — it’s a community. From local
              artisans and designers to global customers, every voice shapes our
              identity. Together, we redefine what it means to look good, feel
              good, and do good.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We proudly collaborate with sustainable producers and talented
              creatives who share our vision for a brighter, more inclusive
              fashion world.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-black text-white py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold mb-4"
          >
            Join the <span className="text-yellow-300">Granduer</span> Movement
          </motion.h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            Be part of a fashion revolution that celebrates identity, culture,
            and creativity. Step into a world where style meets meaning.
          </p>

          <a
            href="/newarrivals"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            Explore Our Collection
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default About;
