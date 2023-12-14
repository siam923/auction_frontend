"use client"
import React from 'react'
import BidForm from './BidForm';
import SignInToBid from './SignIntoBid';
import BidInfo from './BidInfo';
import BidHistory from './BidHistory';
import { useQuery } from '@tanstack/react-query'
import { getBids } from '@/lib/api';
import { useUser } from "@clerk/nextjs"
import LoadingComponent from '@/components/LoadingSkeleton';



const Bidding = ({itemId, basePrice, auctionEndTime}) => {
    const { isSignedIn, user, isLoaded } = useUser();
    const { isLoading, error, data } = useQuery({
      queryKey: ['bids', itemId],
      queryFn: () => getBids(itemId),
      refetchInterval: 1000000, 
    });
  
    if (isLoading) {
      return (
        <div className="w-1/2">
          <LoadingComponent />;
        </div>
      )
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    const highestBidPrice = data.length > 0 ? data[0].price : basePrice;
  
    if (!isLoaded) {
      return (
        <div className="w-1/2">
          <LoadingComponent />;
        </div>
      );
    }
  
    return (
      <div className="flex-1 p-4">
        {isSignedIn? (
          <BidForm itemId={itemId} currentBid={highestBidPrice} user={user} auctionEndTime={auctionEndTime}/>
        ) : (
          <SignInToBid />
        )}
        <BidInfo basePrice={basePrice} bids={data} /> 
        <BidHistory bids={data} />
      </div>
    )
  }
  
  export default Bidding
  