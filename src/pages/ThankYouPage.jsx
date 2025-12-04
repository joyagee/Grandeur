import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Layout from "../shared/Navigation/Layout";

export default function ThankYouPaymentPage() {
  const sprinkles = Array.from({ length: 25 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();
  const receiptData = location.state; // Passed from VerifyPayment page

  return (
   <Layout>
     <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden p-6">
      {/* Sprinkles */}
      {sprinkles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: i % 3 === 0 ? "yellow" : "white" }}
          initial={{ y: -20, x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 300), opacity: 0 }}
          animate={{
            y: [ -20, typeof window !== "undefined" ? window.innerHeight : 600 + 20 ],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400 drop-shadow-lg">
          Payment Successful!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-lg mx-auto">
          Thank you for your purchase. Your payment has been received and your order is now being processed.
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          View Receipt
        </button>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div
            className="bg-white text-black rounded-xl p-6 max-w-md w-full relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-red-500 font-bold text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Receipt Details</h2>
            {receiptData ? (
              <div className="space-y-2">
                <p><strong>Transaction ID:</strong> {receiptData.transactionId}</p>
                <p><strong>Amount Paid:</strong> ${receiptData.amount}</p>
                <p><strong>Status:</strong> {receiptData.status}</p>
                <p><strong>Customer Name:</strong> {receiptData.name}</p>
                <p><strong>Email:</strong> {receiptData.email}</p>
                <p><strong>Phone:</strong> {receiptData.phone}</p>
                {/* Add more fields as needed */}
              </div>
            ) : (
              <p>No receipt data available.</p>
            )}
          </motion.div>
        </div>
      )}
    </div>
   </Layout>
  );
}
