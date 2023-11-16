"use client";

import Link from "next/link";

const ConferenceButton = () => (
  <Link href="/meet">
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200">
      Join Conference
    </button>
  </Link>
);

export default ConferenceButton;
