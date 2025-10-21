import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import Layout from "../Shared/Layout/Layout";



function SingleProduct() {
  const { id } = useParams();
  const { productData, HandleGetProducts, HandleAddTCart } =
    useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("prod:", product);
  }, [product]);

  // UI states
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!productData) {
      HandleGetProducts();
    }
  }, [productData, HandleGetProducts]);

  // useEffect(() => {
  //   console.log("size:", selectedSize);
  //   console.log("color:", selectedColor);
  //   console.log("qua:", quantity);
  // }, [selectedColor, selectedSize, quantity]);
  useEffect(() => {
    if (productData?.length > 0) {
      const found = productData.find(
        (item) => parseInt(item?.id) === parseInt(id)
      );
      if (found) {
        setProduct(found);
        setSelectedSize(found?.defaultSize);
        setSelectedColor(found?.defaultColor);
      }
    }
  }, [productData, id]);

  if (!product) {
    return (
      <p className="text-center text-gray-500 mt-10">Loading product...</p>
    );
  }

  // Example static options
  

  // Handle Quantity
  

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* --- Left side: Image --- */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="relative">
            <img
              src={product.image}
              alt={product.title || product.name}
              className="w-full max-w-md h-auto object-cover rounded-xl shadow-lg"
            />

            {/* Small name badge under image */}
            <div className="absolute left-3 bottom-3 bg-white/90 px-3 py-1 rounded-md shadow text-sm font-semibold">
              {product.title || product.name}
            </div>
          </div>
        </div>

        {/* --- Right side: Details --- */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Category + Title */}
          <div>
            {product.category && (
              <span className="text-sm uppercase tracking-wide text-purple-600 font-medium">
                {product.category}
              </span>
            )}
            <h1 className="text-3xl font-bold text-purple-900 mt-1">
              {product.title || product.name}
            </h1>

            <p className="text-gray-700 mt-2 text-lg font-semibold">
              ${product.price}
            </p>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {product.description ||
                "A premium product that complements your unique style."}
            </p>
          </div>

          {/* Color Selector */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Choose Color:</h3>
            <div className="flex gap-3">
              {product?.colors?.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-purple-700"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Choose Size:</h3>
            <div className="flex gap-3">
              {product?.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-md border text-sm font-medium ${
                    selectedSize === size
                      ? "bg-purple-700 text-white border-purple-700"
                      : "border-gray-300 text-gray-700 hover:bg-purple-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Quantity:</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((prv) => prv - 1)}
                className="px-3 py-1 border border-gray-300 rounded-md hover:bg-purple-100"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity((prv) => prv + 1)}
                className="px-3 py-1 border border-gray-300 rounded-md hover:bg-purple-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              className="flex-1 bg-yellow-800 text-white py-3 rounded-lg hover:bg-teal-600 transition"
              onClick={() => {
                console.log("prdd", product);
                console.log("selsiz", selectedSize);
                console.log("quan", quantity);
                HandleAddTCart(product, quantity, selectedSize, selectedColor);
              }}
            >
              Add to Cart
            </button>
            <button className="flex-1 border border-purple-700 text-purple-700 py-3 rounded-lg hover:bg-purple-50 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SingleProduct;
