import { Categories, mockData } from "../assets/mockData";
import heroImages from "../assets/images/Ecommerce-app-features.webp";
import InfoSection from "../Components/infoSection";
import CategorySection from "../Components/CategorySection";
import { setProducts } from "../redux/ProductSlice"; // Import from ProductSlice
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Example of adding an icon (import a React icon)

function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products); // Access products from Redux state

    // Populate Redux state with mock data
    useEffect(() => {
        dispatch(setProducts(mockData)); // Dispatch action to populate products
    }, [dispatch]);

    return (
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

            {/* Info Section and Categories */}
            <InfoSection />
            <CategorySection />

            {/* Top Products Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Top Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-md shadow p-4 hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-cover mb-2 rounded"
                            />
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <div className="flex items-center space-x-2 mb-2">
                                {/* Example of adding an icon next to the price */}
                                <FaShoppingCart className="text-red-600" />
                                <p className="text-gray-700 font-medium">{product.price}</p>
                               
                            </div>
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded-full w-full mt-2 hover:bg-blue-600"
                            >
                                Add to Cart
                                
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
