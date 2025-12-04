import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Layout from "../shared/Navigation/Layout";


const MenCloths = () => {
  const { HandleGetProducts, productData,HandleAddTCart } = useContext(ProductContext);
  const [menProducts, setMenProducts] = useState([]);
  const [fewDisplay, setFewDisplay] = useState(true);
  const [few, setFew] = useState(null);

   useEffect(() => {
    if (!productData) {
      HandleGetProducts();
    }
  }, [productData, HandleGetProducts]);

  useEffect(() => {
    if (productData) {
      // Filter only men's products (based on category, gender, or tag)
      const menOnly = productData.filter(
        (item) =>
          item?.category?.toLowerCase() === "men" ||
          item?.gender?.toLowerCase() === "men" ||
          item?.type?.toLowerCase()?.includes("men")
      );

      setMenProducts(menOnly);

      const fewMen = menOnly.slice(0, 3);
      setFew(fewMen);
    }
  }, [productData]);

  return (
    <Layout>
      <div className="bg-primary flex justify-center flex-col min-h-screen mb-12">
        {/* Title and intro */}
        <div className="flex justify-center mt-8">
          <p className="text-4xl font-bold text-white text-center">
            Men’s Collection
          </p>
        </div>
        <div className="flex justify-center text-white mt-4 text-center lg:px-[10rem] md:px-[5rem] px-[2rem]">
          <p>
            Discover a blend of comfort and confidence in our exclusive men’s
            fashion — bold, classic, and always in style.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full md:px-4 px-28 pb-16 flex flex-col justify-center items-center">
          <Swiper
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={20}
            loop={true}
            speed={1000}
            slidesPerGroup={1}
            modules={[Autoplay]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="w-full h-72 lg:h-72 xl:h-96 flex flex-col justify-center items-center"
          >
            {menProducts &&
              menProducts.map((product) => (
                <SwiperSlide
                  key={product?.id}
                  className="flex justify-center items-center md:w-full w-1/2 mt-10 rounded-t-[50%] overflow-hidden"
                >
                  <Link to={`/product/${product?.id}`} className="w-full h-full">
                    <img
                      src={product?.image}
                      alt={product?.name}
                      className="object-cover w-full h-full"
                    />
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {/* Product Grid */}
        <div className="bg-white lg:pt-12 pt-2">
          <p className="text-center text-primary text-2xl font-semibold w-full mt-8">
            Men’s Best Picks
          </p>
          <p className="text-center text-primary w-full mt-2 text-lg">
            Explore timeless looks crafted for today’s confident man.
          </p>

          <div className="px-4 md:px-10 lg:px-20 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-16 gap-16 justify-center items-stretch lg:mt-6 mt-8">
            {(fewDisplay ? few : menProducts)?.map((item) => (
              <div
                key={item?.id}
                className="hover:shadow-2xl transition ease-in-out duration-500 rounded-md overflow-hidden"
              >
                <div className="w-full h-[26rem] overflow-hidden">
                  <Link to={`/product/${item?.id}`} className="w-full h-full">
                    <img
                      src={item?.image}
                      alt={item?.name}
                      className="object-cover w-full h-full"
                    />
                  </Link>
                </div>
                <div className="p-2">
                  <p className="text-black font-bold mt-2">{item?.name}</p>
                  <p className="text-black mt-2 z-50">{item?.description}</p>

                  <div className="flex justify-between items-center mt-2">
                    <span className="p-2 bg-primary text-white rounded-md">
                      ${item?.price}
                    </span>

                    <div className="flex justify-between items-center gap-4">
                      <span className="rounded-full p-2 bg-white border-[1px] border-primary flex justify-center items-center">
                        <FaHeart className="h-6 w-6" />
                      </span>
                      <span onClick={()=> HandleAddTCart(item, 1, item?.defaultSize, item?.defaultColor)} className=" rounded-full p-2 text-white cursor-pointer bg-primary flex justify-center items-center">
                              <FaShoppingCart className="h-6 w-6" />
                            </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More / See Less */}
          <div className="flex justify-center mt-8">
            {fewDisplay ? (
              <span
                onClick={() => setFewDisplay(false)}
                className="rounded-md bg-white text-black border-2 border-primary cursor-pointer p-2"
              >
                See More
              </span>
            ) : (
              <span
                onClick={() => setFewDisplay(true)}
                className="rounded-md bg-white text-black border-2 border-primary cursor-pointer p-2"
              >
                See Less
              </span>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MenCloths;