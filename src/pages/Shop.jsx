
import { useSelector } from "react-redux";
import { FaShoppingCart, FaStar } from "react-icons/fa";

function Shop() {
  const products = useSelector((state) => state.product.products); // Access products from Redux state

  console.log("Products in Shop Component:", products); // Debugging: Check if products are being received

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-4 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.image || "https://via.placeholder.com/150"}
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
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
}

export default Shop;
