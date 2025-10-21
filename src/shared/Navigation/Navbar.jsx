import { useContext, useState } from "react";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import ContactMenu from "../../pages/ContactMenu";
import { Search, X } from "lucide-react";
import { ProductContext } from "../../Context/ProductContext";

const Navbar = () => {
  const navlink = [
    {
      name: "About",
      id: 1,
      path: "/about",
    },
    {
      name: "Contact",
      id: 2,
      path: "/contact",
    },
    {
      name: "NewArrivals",
      id: 3,
      path: "/newarrivals",
    },

    {
      name: "Men",
      id: 4,
      path: "/mencloths",
    },
    {
      name: "Women",
      id: 5,
      path: "/womencloths",
    },
    {
      name: "Children",
      id: 6,
      path: "/childrencloths",
    },
  ];

  const { cartCount } = useContext(ProductContext);
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const HandleMenuOpen = () => {
    setIsmenuOpen((prv) => !prv);
  };
  return (
    <div className="sticky top-0 left-0 z-40">
      {/* LargScreen */}
      <div className="lg:block hidden">
        <div className="  bg-primary  lg:px-16 flex item-center justify-between px-16 py-6 text-white">
          <Link
            to={"/"}
            className="logo flex justify-center  items-center text-2xl italic font-serif "
          >
           <div className=" flex items-center justify-center">
             <img
              className="h-[70px] "
              src="/images/final-removebg-preview.png"
            />
           </div>
          </Link>
          <div className="hidden lg:block">
            {" "}
            <div className="links flex justify-between  items-center gap-4">
              {navlink.map((items) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-[1px]  bg-white text-black rounded-3xl p-2 text-sm"
                      : "p-[10px] rounded-3xl hover:bg-white hover:text-black transition ease-in-out duration-700 "
                  }
                  to={items.path}
                  key={items.id}
                >
                  {" "}
                  {items.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            {" "}
            <div className="cartsearch flex items-center  gap-4">
              <nav className="flex items-center justify-center text-white border-[1px] rounded-full h-[30px] w-[30px] border-white shadow ">
                <ContactMenu />
              </nav>
              <div className="relative flex items-center justify-center">
                {/* Search Button */}
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className="p-2 rounded-full items-center justify-center flex border-[1px] border-white h-[30px] w-[30px] text-white hover:bg-white hover:text-black transition"
                >
                  {showSearch ? <X size={20} /> : <Search size={20} />}
                </button>

                {/* Search Input (toggle visibility) */}
                {showSearch && (
                  <input
                    type="text"
                    placeholder="Search..."
                    className="absolute top-full mt-2 w-56 p-2 rounded-lg border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                    autoFocus
                  />
                )}
              </div>
              <div className="flex justify-center items-center rounded-full h-[30px] w-[30px] border-[1px] border-white">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-[1px]  border-red-400 rounded-3xl p-[10px] hover:bg-yellow-300 bg-white text-black  text-sm"
                      : "p-[10px] rounded-3xl hover:bg-white hover:text-black transition ease-in-out duration-700 "
                  }
                  to={"/cart"}
                >
                  <IoCartOutline />
                  <span className=" absolute border-[1px] top-3 right-14 h-5 w-5 p-2 hover:bg-yellow-300 rounded-full bg-white text-primary flex justify-center items-center font-bold ">
                    {(cartCount && cartCount) || 0}
                  </span>
                </NavLink>{" "}
              </div>
            </div>
          </div>
          <span className=" flex justify-center  items-center p-4 lg:hidden h-16 w-16 rounded-md text-white font-bold text-3xl">
            <IoMdMenu />
          </span>
        </div>
      </div>

      {/* SmallScreen */}
      <div className="lg:hidden block">
        <div className="  bg-primary  lg:px-16 flex item-center justify-between px-16 py-6 text-white">
          <div className="cartsearch flex items-center  gap-4">
            <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-[1px]  border-red-500 rounded-3xl p-[10px] bg-white hover:bg-yellow-300 text-black  text-sm"
                    : "p-[10px] rounded-3xl hover:bg-white hover:text-black transition ease-in-out duration-700 "
                }
                to={"/cart"}
              >
                <IoCartOutline />
                 <span className=" absolute border-[1px] top-9 left-[3.5rem] h-5 w-5 p-2 hover:border-white hover:bg-yellow-200 rounded-full bg-white text-primary flex justify-center items-center font-bold ">
                    {(cartCount && cartCount) || 0}
                  </span>
              </NavLink>{" "}
            <div className="">
              <nav className="flex items-center justify-center text-white border-[1px] rounded-full h-[30px] w-[30px] border-white shadow ">
                <ContactMenu />
              </nav>
            </div>
           
            <div className="relative flex items-center justify-center">
              {/* Search Button */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 rounded-full items-center justify-center flex border-[1px] border-white h-[30px] w-[30px] text-white hover:bg-white hover:text-black transition"
              >
                {showSearch ? <X size={20} /> : <Search size={20} />}
              </button>

              {/* Search Input (toggle visibility) */}
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="absolute top-full mt-2 w-56 p-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition-all"
                  autoFocus
                />
              )}
            </div>
          </div>
          <Link
            to={"/"}
            className="logo flex justify-center items-center text-2xl italic font-serif "
          >
           <div className=" flex items-center justify-center">
             <img
              className="h-[70px] "
              src="/public/final-removebg-preview.png"
            />
           </div>
          </Link>

          <span
            onClick={() => HandleMenuOpen()}
            className=" flex justify-center   items-center p-4 lg:hidden h-16 w-16 rounded-md text-white font-bold text-3xl"
          >
            <IoMdMenu />
          </span>
          {/* mobile nav */}
          <div
            className={` ${
              isMenuOpen
                ? "h-52 transition ease-in-out duration-500 block"
                : "h-0 hidden opacity-0"
            } absolute left-0 top-[100%] w-full`}
          >
            <div className="flex flex-col justify-center items-center  bg-white text-black w-full gap-4 p-4">
              {navlink.map((items) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "border-[1px]  bg-primary text-white rounded-3xl w-full p-2 text-sm"
                      : " md:text-sm sm:text-lg lg:font-medium font-semibold bg-white text-primary rounded-3xl hover:bg-primary hover:text-white transition ease-in-out duration-300 p-2 w-full "
                  }
                  to={items.path}
                  key={items.id}
                >
                  {" "}
                  {items.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
