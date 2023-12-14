"use client";
import React from "react";
import { CheckCircle, Search, CircleDollarSign, Clock } from "lucide-react";

// Define the steps and icons as a JSON object list
const steps = [
  {
    icon: <Search className="w-6 h-6" />,
    text: "1. To participate, find the item you want",
  },
  {
    icon: <CircleDollarSign className="w-6 h-6" />,
    text: "2. Start bidding",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    text: "3. Can you wait?",
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    text: "4. Wait for the result",
  },
];

const UserStory = () => {
  return (
    <div className="bg-white my-2 p-6 rounded-lg text-center border-2 border-blue-600">
      <div className="my-4 mx-auto content-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center mb-4">
            <div className="w-8 h-8 mr-2 bg-blue-500 text-white rounded-full flex items-center justify-center">
              {step.icon}
            </div>
            <p className="text-gray-800">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStory;
