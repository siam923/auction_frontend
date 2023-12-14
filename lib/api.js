import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE;

const getBids = async (id) => {
  const res = await axios.get(`/items/${id}/bids`);
  const sortedBids = res.data.sort((a, b) => b.price - a.price);
  return sortedBids;
};

const getUserItem = async (email) => {
  const res = await axios.get(`/user?userId=${email}`);
  return res.data;
};

const postBid = async (data) => {
  const { ItemId, ...rest } = data;
  // return data;
  try {
    const res = await axios.post(`/items/${ItemId}/bids`, rest);
    return res.data;
  } catch (error) {
    console.error("Error posting bid:", error);
    throw error;
  }
};

const fetchNotification = async () => {
  try {
    const res = await axios.get(`/notifications`);
    return res.data;
  } catch (error) {
    console.error("Error getting notifications:", error);
    throw error;
  }
};

export { getBids, postBid, getUserItem, fetchNotification };
