"use client";

const NotificationItem = ({ notification }) => {
  const parseTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Customize this format as needed
  };

  return (
    <a
      href="#"
      className="block px-6 py-3 text-gray-700 hover:bg-gray-100 relative"
      key={notification.NotificationId}
    >
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
        <div className="flex-grow">
          <div className="text-sm font-medium">{notification.Message}</div>
          <div className="text-xs text-gray-500">
            {parseTimestamp(notification.Timestamp)}
          </div>
        </div>
      </div>
    </a>
  );
};

export default NotificationItem;
