import React, { useState, useEffect } from "react";

const ComparisonTable = ({ productId, othervendorsData }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductData(productId);
  }, [productId]);

  const fetchProductData = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8080/products/${productId}`);
      const jsonData = await response.json();
      setProduct(jsonData);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Product Comparison</h2>
      {product && (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Platform</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Rating</th>
                <th className="px-4 py-2">Reviews</th>
                <th className="px-4 py-2">Vendor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">{product.shop.name}</td>
                <td className="border px-4 py-2">{product.price.current.text}</td>
                <td className="border px-4 py-2">{product.rating}</td>
                <td className="border px-4 py-2">
                  <ul>
                    {product.reviews.map((review, index) => (
                      <li key={index} className="mb-2">
                        <strong>{review.username}</strong>
                        <br />
                        {review.reviewText}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border px-4 py-2">{product.shop.name}</td>
              </tr>
              {/* Fetch and compare data from other platforms */}
              {othervendorsData.map((vendor, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{vendor.shop.name}</td>
                  <td className="border px-4 py-2">{vendor.price.current.text}</td>
                  <td className="border px-4 py-2">{vendor.rating}</td>
                  <td className="border px-4 py-2">
                    <ul>
                      {vendor.reviews.map((review, index) => (
                        <li key={index} className="mb-2">
                          <strong>{review.username}</strong>
                          <br />
                          {review.reviewText}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="border px-4 py-2">{vendor.shop.name}</td>
                </tr>
              ))}
              {/* Replace this section with data from other platforms */}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ComparisonTable;
