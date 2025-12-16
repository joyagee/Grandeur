import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Layout from "../shared/Navigation/Layout";

export default function ThankYouPaymentPage() {
  const sprinkles = Array.from({ length: 25 });
  const location = useLocation();
  const receiptData = location.state;

  const [showReceipt, setShowReceipt] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  const userId = receiptData?.userId; // make sure your receiptData has userId

  // Fetch purchased products from backend
  useEffect(() => {
    const fetchPurchasedProducts = async () => {
      if (!userId) return;
      try {
        const res = await fetch(`http://localhost:5000/getPurchased/${userId}`);
        const data = await res.json();
        if (res.ok && data.success) {
          // Flatten all receiptItems into one array
          const allItems = data.data.flatMap((receipt) => receipt.receiptItems);
          setPurchasedProducts(allItems);
        } else {
          console.error("Failed to fetch purchased products:", data.message);
        }
      } catch (error) {
        console.error("Error fetching purchased products:", error);
      }
    };

    fetchPurchasedProducts();
  }, [userId]);

  return (
    <Layout>
      <div className="relative min-h-screen bg-black text-white flex flex-col items-center overflow-hidden py-14 px-6">

        {/* Sprinkles */}
        {sprinkles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: i % 3 === 0 ? "yellow" : "white" }}
            initial={{
              y: -20,
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 300),
              opacity: 0,
            }}
            animate={{
              y: typeof window !== "undefined" ? window.innerHeight + 20 : 620,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Main Success Message */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400 drop-shadow-lg">
            Payment Successful!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            Thank you for your purchase! Your payment has been received and your order is now being processed.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowReceipt(!showReceipt)}
              className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              {showReceipt ? "Hide Receipt" : "View Receipt"}
            </button>

            <button
              onClick={() => setShowProducts(!showProducts)}
              className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              {showProducts ? "Hide Products" : "View Purchased Products"}
            </button>

            <button
              onClick={() => (window.location.href = "/")}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition"
            >
              Continue Shopping
            </button>
          </div>
        </motion.div>

        {/* Receipt Table */}
        {showReceipt && receiptData && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl bg-white text-black rounded-xl shadow-lg mt-10 p-6 z-10"
          >
            <h2 className="text-2xl font-bold mb-4">Receipt Summary</h2>
            <table className="w-full border-collapse text-lg">
              <tbody>
                <tr>
                  <td className="font-semibold border-b py-2">Transaction ID</td>
                  <td className="border-b py-2">{receiptData.transactionId}</td>
                </tr>
                <tr>
                  <td className="font-semibold border-b py-2">Amount Paid</td>
                  <td className="border-b py-2">${receiptData.amount}</td>
                </tr>
                <tr>
                  <td className="font-semibold border-b py-2">Status</td>
                  <td className="border-b py-2">{receiptData.status}</td>
                </tr>
                <tr>
                  <td className="font-semibold border-b py-2">Customer Name</td>
                  <td className="border-b py-2">{receiptData.name}</td>
                </tr>
                <tr>
                  <td className="font-semibold border-b py-2">Email</td>
                  <td className="border-b py-2">{receiptData.email}</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2">Phone</td>
                  <td className="py-2">{receiptData.phone}</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        )}

        {/* Purchased Products Table */}
        {showProducts && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-3xl bg-white text-black rounded-xl shadow-lg mt-10 p-6 z-10"
          >
            <h2 className="text-2xl font-bold mb-6">Purchased Products</h2>

            {purchasedProducts.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 rounded-xl">
                  <thead className="bg-gray-100">
                    <tr className="text-left text-gray-700">
                      <th className="py-3 px-4">Product</th>
                      <th className="py-3 px-4">Price</th>
                      <th className="py-3 px-4">Qty</th>
                      <th className="py-3 px-4">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchasedProducts.map((item, index) => (
                      <tr key={index} className="border-t hover:bg-gray-50">
                        <td className="py-3 px-4 flex items-center gap-3">
                          <img
                            src={item?.image}
                            alt={item?.name}
                            className="w-12 h-12 rounded object-cover"
                          />
                          {item?.name}
                        </td>
                        <td className="py-3 px-4">${item?.price}</td>
                        <td className="py-3 px-4">{item?.quantity}</td>
                        <td className="py-3 px-4 font-semibold">
                          ${(item?.price * item?.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No products found for this transaction.</p>
            )}
          </motion.div>
        )}

      </div>
    </Layout>
  );
}
