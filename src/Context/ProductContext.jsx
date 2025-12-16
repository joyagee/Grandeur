import { createContext, useEffect, useState } from "react";
const ProductContext = createContext();
import { ToastContainer, toast } from "react-toastify";
import { baseUrl } from "../App";

const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);

  const [isAuthentified, setisAuthentified] = useState(false);

  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  const [token, settoken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    console.log("cart:", cartItems);
    if (cartItems) {
      const count = cartItems?.reduce((acc, curr) => acc + curr?.quantity, 0);
      setCartCount(count);
    }
  }, [cartItems]);

  const getLocalData = (item, fallback) => {
    try {
      const result = JSON.parse(localStorage.getItem(item));
      if (!item) return fallback;
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  const [User, setUser] = useState(getLocalData("user", {}));

  useEffect(() => {
    console.log(User);
    if (User && User?.role) {
      setisAuthentified(true);
    }
  }, [User]);

  useEffect(() => {
    console.log(token);
  }, [token]);

  
 const HandleAddTCart = async (prod, quantity = null, size = null, color = null) => {
  if (!isAuthentified) {
    // LOCAL CART LOGIC
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
      toast.info("Product quantity updated in cart");
    } else {
      updatedCartItems = [...storedCartItems, { ...prod, quantity, size, color }];
      toast.success("Product added to cart");
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
    return;
  }

  // ---------- AUTHENTICATED USER ----------
  try {
    console.log("User is authenticated - API cart update");

    if (!token) {
      toast.error("Session expired, please log in again");
      return;
    }

    if (!User || !User.userid) {
      toast.error("User is not loaded yet");
      return;
    }

    const res = await fetch(`${baseUrl}addcart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userid: Number(User.userid),
        productid: Number(prod.id),
        color,
        size,
        quantity,
      }),
    });

    const data = await res.json();
    console.log("addCartRes:", data);

    if (res.ok) {
      setCartItems(data?.data?.ProducCart);
      localStorage.setItem("cartItems", JSON.stringify(data?.data?.ProducCart));
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }
  } catch (error) {
    console.log("error:", error);
    toast.error("Unable to add to cart, please try again later!");
  }
};
  const HandleGetProducts = async () => {
    try {
      const res = await fetch(` ${baseUrl}getAllProduct`, {
        method: "GET",
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data);
        setProductData(data?.data);
        localStorage.setItem("productData", JSON.stringify(data));
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    HandleGetProducts();
  }, []);

  // Delete item from cart

  const HandleDeleteCart = async (prod) => {
    try {
      if (!isAuthentified) {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));

        // Check if product exists
        const existingItem = storedCartItems?.find(
          (item) => parseInt(item?.id) === parseInt(prod?.id)
        );

        if (!existingItem) {
          toast.error("Product not found in cartItems");
          return;
        }

        const updatedCartItems = storedCartItems?.filter(
          (item) => parseInt(item?.id) !== parseInt(prod?.id)
        );

        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
      } else {
        console.log("tok", token && token);
        console.log("uid", Number(User && User?.userId));

        const res = await fetch(`${baseUrl}deletecart`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token && token}`,
          },
          body: JSON.stringify({
            userid: Number(User && User?.userId),
            productid: Number(prod?.id),
          }),
        });

        const data = await res.json();
        if (res.ok) {
          toast.success(data?.message);
        } else {
          toast.error(data?.message);
        }

        console.log("addCartRes:", data);
      }
    } catch (error) {
      console.log(error?.message);
      toast.success("unable to delete cart, please try again later!");
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
        console.log("Update......");

        console.log("tok", token && token);
        console.log("uid", Number(User && User?.userId));

        const res = await fetch(`${baseUrl}updatecart`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token && token}`,
          },
          body: JSON.stringify({
            userid: Number(User && User?.userId),
            productid: Number(prod?.id),
            color: prod?.color,
            size: prod?.size,
            quantity: prod?.quantity,
          }),
        });

        const data = await res.json();
        if (res.ok) {
          toast.success(data?.message);
        } else {
          toast.error(data?.message);
        }

        console.log("addCartRes:", data?.data);
      }
    } catch (error) {
      console.log(error?.message);
      toast.success("unable to update cart, please try again later!");
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
        HandleUpdateCart,
        setCartItems,
        setUser,
        settoken,
        setProductData,
        getLocalData,
        token,
        User,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
export { ProductContext };
