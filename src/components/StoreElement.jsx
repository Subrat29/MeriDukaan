import React from 'react';

const StoreElement = ({ store }) => {
  const { id, name, description, seller, state, district, address, phone, email, website, openingHours, rating, totalReviewCount, products } = store;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-950 text-white">
      <div className="px-6 py-4">
        <div className="text-4xl mb-2 bg-zinc-950 font-bold">{name}</div>
        <p className="text-base mb-4 font-semibold">Description: {description}</p>
        <p className="text-sm mb-2 font-semibold">Seller: {seller}</p>
        <p className="text-sm mb-2 font-semibold">Location: {address}, {district}, {state}</p>
        <p className="text-sm mb-2 font-semibold">Contact: {phone}, {email}, {website}</p>
        <p className="text-sm mb-2 font-semibold">Rating: {rating} ({totalReviewCount} reviews)</p>
        <div className="flex flex-wrap mb-2">
          {Object.entries(openingHours).map(([day, hours]) => (
            <span key={day} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{day}: {hours}</span>
          ))}
        </div>
        <div className="flex flex-wrap mb-4">
        <p className="mb-4 font-bold text-xl">Products: </p>
          {products.map(product => (
            <span key={product.id} className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{product.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreElement;
