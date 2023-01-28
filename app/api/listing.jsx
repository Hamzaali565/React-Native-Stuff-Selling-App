import client from "./Client";

const endPoint = "/listings";

const getListings = () => client.get(endPoint);

export default {
  getListings,
};
