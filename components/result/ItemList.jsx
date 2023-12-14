"use client"
import Link from "next/link";

const ItemList = ({ items }) => {
  return (
    <div className="container mx-auto p-4">
      {items.map((item) => (
        <div key={item.itemId} className="flex justify-between items-center bg-white p-4 rounded-lg shadow mb-4">
          <div>
            <p className="text-lg font-semibold">Item ID: {item.itemId}</p>
            <p className={`font-semibold ${item.status === 'win' ? 'text-green-500' : item.status === 'lost' ? 'text-red-500' : 'text-yellow-500'}`}>
              Status: {item.status.toUpperCase()}
            </p>
          </div>
          <div>
            <p className="text-md">Highest Bid: {item.price}</p>
            <p className="text-sm text-gray-600">User: {item.user_name}</p>
          </div>
          <Link href={`/items/${item.itemId}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Details
          </button>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
