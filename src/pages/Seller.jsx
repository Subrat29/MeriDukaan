import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SellerInfo = () => {
  const { shopId } = useParams(); // Extract shopId from route params
  const [seller, setSeller] = useState(null);
  const [sellerProducts, setSellerProducts] = useState([]);

  useEffect(() => {
    // Fetch seller details
    fetchSeller();
  }, [shopId]);

  const fetchSeller = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/shops/${shopId}`);
      const sellerData = response.data;
      setSeller(sellerData);

      // Filter products based on seller's products array
      const productsResponse = await axios.get(`http://localhost:8080/products`);
      const allProducts = productsResponse.data;
      const sellerProducts = allProducts.filter((product) =>
        sellerData.products.includes(product.id)
      );

      setSellerProducts(sellerProducts);
    } catch (error) {
      console.error("Error fetching seller:", error);
    }
  };

  return (
    <div>
      <h2>Products sold by {seller && seller.name}</h2>
      <div className="products-list">
        {sellerProducts.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-2 max-w-7xl mx-auto mt-5 max-lg:grid-cols-1 max-lg:mx-5"
          >
            <img
              src={"https://" + product.imageUrl}
              className="w-96 h-auto text-center border border-gray-600 cursor-pointer"
              alt={product?.name}
            />

            <p>Price: {product.price?.current?.value}</p>
            {/* Display other product details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerInfo;

//
