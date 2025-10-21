import { createContext, useEffect, useState } from "react";
const ProductContext = createContext();
import { ToastContainer, toast } from "react-toastify";

const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);

  const [isAuthentified, setisAuthentified] = useState(false);

  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    console.log("cart:", cartItems);
    if (cartItems) {
      const count = cartItems?.reduce((acc, curr) => acc + curr?.quantity, 0);
      setCartCount(count);
    }
  }, [cartItems]);

  const HandleAddTCart = (prod, quantity = null, size = null, color = null) => {
    if (!isAuthentified) {
      let storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      const existingItem = storedCartItems.find(
        (item) => parseInt(item.id) === parseInt(prod.id)
      );

      let updatedCartItems;

      if (existingItem) { 
        updatedCartItems = storedCartItems.map((item) =>
          parseInt(item.id) === parseInt(prod.id)
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );

        toast.info("Existing Item quantity added to cart successfully")
      } else {
        updatedCartItems = [
          ...storedCartItems,
          { ...prod, quantity, size, color },
        ];
        toast.success("Item added to cart successfully")
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
      console.log("Updated Cart:", updatedCartItems);
    } else {
      console.log("User is authenticated - handle API cart instead");
    }
  };


  const HandleGetProducts = async () => {
    try {
      const res = await fetch("http://localhost:8000/products", {
        method: "GET",
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data);
        setProductData(data);
      } else {
        console.log("Unable to fetch data");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  // Delete item from cart
 
const HandleDeleteCart = async (prod) => {
  try{
    if(!isAuthentified) {
      const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));

      // Check if product exists
      const existingItem = storedCartItems?.find(
        (item) => parseInt(item?.id) === parseInt(prod?.id));

        if(!existingItem) {
          toast.error("Product not found in cartItems");
          return;
        }

        const updatedCartItems = storedCartItems?.filter(
          (item) => parseInt(item?.id) !== parseInt(prod?.id)
        );

        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    } else {
      console.log("Authentified user");
    }
  } catch (error) {
    console.log(error.message); 
  }
};


  const HandleUpdateCart = async (prod) => {
    try {
      if (!isAuthentified) {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));

        //checking if product exist

        const existingProduct = storedCartItems.find(
          (item) => parseInt(item?.id) === parseInt(prod?.id)
        );

        if (!existingProduct) {
          toast.error("Product does not exist in cart!");
        }

        const updatedCartItems = storedCartItems.map((item) =>
          parseInt(item?.id) === parseInt(prod?.id)
            ? {
                ...item,
                size: prod?.size ?? item?.size,
                quantity: prod?.quantity ?? item?.quantity,
                color: prod?.color ?? item?.color,
              }
            : item
        );

        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
      } else {
        console.log("Authentified user");
      } 
    } catch (error) {
      console.log(error?.message);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        HandleDeleteCart,
        HandleGetProducts,
        HandleAddTCart,
        productData,
        cartItems,
       cartCount,
        setisAuthentified,
        HandleUpdateCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
export { ProductContext };