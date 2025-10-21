import Footer from "../Navigation/Footer";
import Navbar from "../Navigation/Navbar";

const Layout = ({children}) => {
    return ( <div className="">
        <Navbar/>
        {children}
        <Footer/>
    </div> );
}
 
export default Layout;