"use client";
import React, { useState } from "react";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import Link from "next/link";

const ItemCard = ({ item }) => {
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200">
      <Image
        className="h-[300px] object-contain"
        src={item.image}
        width={400}
        height={400}
        alt={`Image of ${item.name}`}
      />

      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{item.name}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {!isAuctionEnded ? (
          <>
            <div className="mb-2">
              <span className="text-sm text-gray-500">Auction ends in:</span>
              <CountdownTimer
                targetDate={item.auctionEndTime}
                onTimeUp={() => setIsAuctionEnded(true)}
              />
            </div>
            <Link href={`/items/${item.ItemId}`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-2 px-4 rounded w-full">
                Bid Now
              </button>
            </Link>
          </>
        ) : (
          <Link href={`/items/${item.ItemId}`}>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 mb-2 px-4 rounded w-full">
              View Result
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
