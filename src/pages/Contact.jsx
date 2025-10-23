import React from "react";

import {motion} from "framer-motion" ;
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Layout from "../shared/Navigation/Layout";


const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-primary text-white flex flex-col items-center py-16 px-6 md:px-20">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 teal"
        >
          Contact <span className="text-white">Grandeur</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-black text-center max-w-2xl mb-12"
        >
          We’d love to hear from you! Whether you have a question about our collections, need assistance,
          or just want to say hello — reach out, and we’ll get back to you shortly.
        </motion.p>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 w-full max-w-6xl">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 wheat p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold teal mb-4">Get in Touch</h2>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="teal text-xl" />
              <p>+234 810 000 0000</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="teal text-xl" />
              <p>support@grandeur.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="teal text-xl" />
              <p>Lagos, Nigeria</p>
            </div>

            <div className="flex gap-6 mt-4">
              <a href="#" className="teal hover:text-purple-200 text-2xl"><FaFacebook /></a>
              <a href="#" className="teal hover:text-purple-200 text-2xl"><FaInstagram /></a>
              <a href="#" className="teal hover:text-purple-200 text-2xl"><FaTwitter /></a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" wheat text-black p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold teal mb-4">Send Us a Message</h2>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-700 teal py-3 rounded-md font-semibold mt-4 hover:bg-purple-800 transition"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>

       
      </div>
    </Layout>
  );
};

export default Contact;