import Bidding from "@/components/ItemDetail/BiddingFeature/Bidding";

import ItemDisplay from "@/components/ItemDetail/ItemDisplay";

import React from "react";

export default async function ListItem({ params }) {
  //Fetch product data from API
  const { id } = params;
  const url = `${process.env.API_BASE}/items/${id}`;

  const response = await fetch(url);
  const item = await response.json();

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-4">
          <ItemDisplay
            image={item.image}
            name={item.name}
            detail={item.detail}
            auctionEndTime={item.auctionEndTime}
            conferenceLink={item.conferenceLink}
          />
        </div>
        <Bidding
          itemId={id}
          basePrice={item.basePrice}
          auctionEndTime={item.auctionEndTime}
        />
      </div>
    </div>
  );
}
