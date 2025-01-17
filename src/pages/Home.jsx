import { Categories, mockData } from "../assets/mockData";
import heroImages from "../assets/images/Ecommerce-app-features.webp";
import InfoSection from "../Components/infoSection";
import CategorySection from "../Components/CategorySection";
import { setProducts } from "../redux/ProductSlice"; // Import from ProductSlice
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Example of adding an icon (import a React icon)
import { FaStar } from "react-icons/fa";
import Shop from "./Shop";


function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products); // Access products from Redux state

    // Populate Redux state with mock data
    useEffect(() => {
        dispatch(setProducts(mockData)); // Dispatch action to populate products
    }, [dispatch]);

    return (
      <div>
        <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
            <div className="container mx-auto px-4 flex flex-col md:flex-row space-x-2">
                {/* Left Section - Categories */}
                <div className="w-full md:w-3/12">
                    <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
                        SHOP BY CATEGORIES
                    </div>
                    <ul className="space-y-4 bg-gray-100 p-3 border">
                        {Categories.map((category, index) => (
                            <li key={index} className="flex items-center text-sm font-medium">
                                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section - Hero Image */}
                <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
                    <img src={heroImages} alt="Hero" className="h-full w-full" />
                    <div className="absolute top-16 left-8">
                        <p className="text-gray-600 mb-4">Ecommerce Project</p>
                        <h2 className="text-3xl font-bold">WELCOME TO E-BUY</h2>
                        <p className="text-xl mt-2.5 font-bold text-gray-800">MILLIONS+ PRODUCTS</p>
                        <button
                            className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105"
                        >
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>

           
            <InfoSection />
            <CategorySection />

           
                  <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-4">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.slice(0, 5).map((product) => (
                  <div
                      key={product.id}
                      className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105"
                  >
                      <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-contain mb-4"
                      />
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                          <FaShoppingCart className="text-red-600" />
                          <p className="text-gray-700 font-medium">${product.price}</p>
                      </div>
                      <div className="flex items-center mt-2">
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                          <FaStar className="text-yellow-500" />
                      </div>
                      <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all">
                          <span className="group-hover:hidden">+</span>
                          <span className="hidden group-hover:block">Add to cart</span>
                      </div>
                  </div>
              ))}
          </div>
      </div>

        </div>
         <Shop/>
         </div>
    );
}

export default Home;
