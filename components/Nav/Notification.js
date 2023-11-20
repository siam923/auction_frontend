"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Bell, Loader2 } from "lucide-react";
import { fetchNotification } from "@/lib/api";
import NotificationItem from "./NotificationItem";

const Notification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lastNotificationId, setLastNotificationId] = useState(null);

  const {
    data: notifications,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotification,
    refetchInterval: 1000000, // Adjust as needed
  });

  useEffect(() => {
    if (notifications?.length > 0) {
      const latestId = notifications[0].NotificationId; // Assuming the latest notification is at index 0
      if (latestId !== lastNotificationId) {
        setLastNotificationId(latestId);
      }
    }
  }, [notifications]);

  useEffect(() => {
    if (!dropdownOpen) {
      setLastNotificationId(null); // Reset last notification ID when dropdown is closed
    }
  }, [dropdownOpen, lastNotificationId]);

  const handleBellClick = () => {
    setDropdownOpen(!dropdownOpen);
    if (!dropdownOpen) {
      refetch(); // Refetch notifications when bell icon is clicked
    }
  };

  if (isLoading)
    return (
      <p>
        {" "}
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      </p>
    );
  if (error) return <div>Error fetching: {error.message}</div>;

  const hasUnread = lastNotificationId !== null;

  return (
    <div className="relative">
      <Bell
        className={`cursor-pointer ${hasUnread ? "text-red-500" : ""}`}
        onClick={handleBellClick}
      />
      {hasUnread && !dropdownOpen && (
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
      )}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 py-2 w-64 bg-white rounded-lg shadow-xl">
          {notifications?.length === 0 ? (
            <p className="text-center text-gray-500 text-sm p-2">
              No notifications available
            </p>
          ) : (
            notifications.map((notification) => (
              <NotificationItem
                key={notification.NotificationId}
                notification={notification}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;
