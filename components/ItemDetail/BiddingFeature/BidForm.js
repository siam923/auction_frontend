"use client";
import React, { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBid } from "@/lib/api";

const BidForm = ({ itemId, currentBid, user, auctionEndTime }) => {
  const { toast } = useToast();
  const [bidAmount, setBidAmount] = useState("");
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);

  useEffect(() => {
    const checkIfAuctionEnded = () => {
      const now = new Date();
      const auctionEnd = new Date(auctionEndTime);
      setIsAuctionEnded(now >= auctionEnd);
    };

    checkIfAuctionEnded();
  }, [auctionEndTime]);

  //Async api calls
  const queryClient = useQueryClient();
  const { mutate: submitBid, isLoading } = useMutation({
    mutationFn: (data) => postBid(data),
    onSuccess: () => {
      toast({ description: "Bid submitted successfully" });
      queryClient.invalidateQueries(["bids", itemId]);
      queryClient.invalidateQueries(["notifications"]);
    },
    onError: () => {
      let description = "Something went wrong";
      toast({ description, variant: "destructive" });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const amount = Number(bidAmount);
    if (amount <= currentBid) {
      toast({
        description: "Amount is too low to bid",
        variant: "destructive",
      });
      return;
    }
    const email = user?.emailAddresses[0].emailAddress;

    const data = {
      ItemId: itemId,
      userId: email,
      name: user.firstName,
      price: amount,
    };

    submitBid(data);
    setBidAmount("");
  };

  if (isAuctionEnded) {
    return (
      <div className="mt-4 bg-white p-4 rounded-lg shadow text-center">
        <h3 className="text-lg font-semibold text-gray-800">Auction Ended</h3>
        <p className="text-md text-gray-600 mt-2">
          Come back next time for more exciting auctions!
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 bg-white p-4 rounded-lg shadow mb-4">
      <h3 className="text-lg font-semibold">Place Your Bid</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="border p-2 rounded w-full"
          placeholder="Your Bid Amount"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Bid
        </button>
      </form>
    </div>
  );
};

export default BidForm;
