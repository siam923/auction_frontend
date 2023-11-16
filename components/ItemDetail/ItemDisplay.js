"use client";
import CountdownTimer from "../CountdownTimer";
import ConferenceButton from "./ConferenceButton";
import Image from "next/image";

const ItemDisplay = ({
  image,
  name,
  detail,
  auctionEndTime,
  conferenceLink,
}) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="relative ">
      <Image
        className="h-[300px] object-contain "
        src={image}
        width={600}
        height={500}
        alt={name}
        priority={true}
      />
    </div>
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800">{name}</h1>

      <div className="text-gray-600">
        Auction ending in:{" "}
        <div className="flex justify-between align-middle">
          <span className="font-semibold">
            <CountdownTimer targetDate={auctionEndTime} />
          </span>
          <ConferenceButton conferenceLink={conferenceLink} />
        </div>
      </div>
      <br />
      <p className="mt-2 text-gray-600">{detail}</p>
    </div>
  </div>
);

export default ItemDisplay;
