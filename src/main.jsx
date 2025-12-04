import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Mencloths from "./pages/MenCloth.jsx";
import ChildrenCloths from "./pages/ChildrenCloths.jsx";
import WomenCloths from "./pages/WomenCloths.jsx";
import NewArrivals from "./pages/NewArrivals.jsx";
import Cart from "./pages/Cart.jsx";
import ProductProvider from "./Context/ProductContext.jsx";

import SingleProduct from "./pages/SingleProduct.jsx";
import Auth from "./pages/Auth.jsx";
import VerifyPayment from "./pages/VerifyPayment.jsx";
import ThankYouPaymentPage from "./pages/ThankYouPage.jsx";


const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        element: <Auth />,
        path: "/auth",
      },

      {
        element: <About />,
        path: "/about",
      },
      {
        element: <Cart />,
        path: "/cart",
      },

      {
        element: <Contact />,
        path: "/contact",
      },
      {
        element: <NewArrivals />,
        path: "/newarrivals",
      },
      {
        element: <Mencloths />,
        path: "/mencloths",
      },
      {
        element: <WomenCloths />,
        path: "/womencloths",
      },
      {
        element: <ChildrenCloths />,
        path: "/childrencloths",
      },

      {
        element: <SingleProduct />,
        path: "/product/:id",
      },

      {
        element: <VerifyPayment />,
        path: "/verify-payment",
      },
      {
        element: <ThankYouPaymentPage />,
        path: "thankyoupaymentpage",
      },

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ProductProvider>
);
