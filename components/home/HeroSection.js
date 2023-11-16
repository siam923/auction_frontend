"use client";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      className="h-80 bg-cover bg-slate-200 bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url('https://t4.ftcdn.net/jpg/05/42/73/17/360_F_542731787_npIDENXs9NMkl1mtyHKj8De2WBL2vnFW.jpg')`,
      }}
    >
      <h1 className="text-3xl text-blue-600 font-bold my-4 mx-6">
        Enter the Exciting World of Auctions
      </h1>
      <p className="text-xl text-slate-600 mb-8">
        Discover unique items and rare finds
      </p>
      <Link
        href="/items"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Auction Items
      </Link>
    </div>
  );
};

export default HeroSection;
