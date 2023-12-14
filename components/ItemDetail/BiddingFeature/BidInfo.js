const BidInfo = ({ basePrice, bids }) => {
  const highestBid = bids.length > 0 ? bids[0] : null;

  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow-md">
      {highestBid ? (
        <div>
          <p className="text-lg font-semibold text-blue-800">
            Highest Bid:{" "}
            <span className="text-green-600">${highestBid.price}</span>
          </p>
          <p className="text-md mt-2 text-blue-700">
            Bidder: <span className="font-medium">{highestBid.name}</span>
          </p>
          <p className="text-sm mt-1 text-blue-600">
            Contact: <span className="font-medium">{highestBid.userId}</span>
          </p>
        </div>
      ) : (
        <p className="text-lg font-semibold text-blue-800">
          Starting Price: <span className="text-green-600">${basePrice}</span>
        </p>
      )}
    </div>
  );
};

export default BidInfo;
