"use client";

const BidHistory = ({ bids }) => (
  <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            Bidder
          </th>
          <th scope="col" className="py-3 px-6">
            Amount
          </th>
          <th scope="col" className="py-3 px-6">
            Time
          </th>
        </tr>
      </thead>
      <tbody>
        {bids.map((bid) => (
          <tr
            key={bid.BidId}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="py-4 px-6">{bid.name}</td>
            <td className="py-4 px-6">${bid.price}</td>
            <td className="py-4 px-6">{new Date(bid.time).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BidHistory;
