"use client";

import React from "react";
import { CheckCircle, Search, CircleDollarSign, Clock } from "lucide-react";

const UserStory = () => {
  return (
    <div className="flex bg-cyan-500 my-2 h-48 w-full flex-col items-center justify-center text-center">
      <div className="my-10 py-10">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 mr-2 bg-white rounded-full flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <p className="text-white">
            1. To participate, find the item you want
          </p>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 mr-2 bg-white rounded-full flex items-center justify-center">
            <CircleDollarSign className="w-6 h-6" />
          </div>
          <p className="text-white">2. Start bidding</p>
        </div>
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 mr-2 bg-white rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <p className="text-white">3. Can you wait?</p>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2 bg-white rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6" />
          </div>
          <p className="text-white">4. Wait for the result</p>
        </div>
      </div>
    </div>
  );
};

export default UserStory;
