import httpService from "./http.service";
const basketEndPoint = "basket/";

const basketService = {
  get: async () => {
    const { data } = await httpService.get(basketEndPoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(
      basketEndPoint + payload._id,
      payload
    );
    return data;
  },
  getBasketGames: async (userId) => {
    const { data } = await httpService.get(basketEndPoint, {
      params: {
        orderBy: '"userId"',
        equalTo: `"${userId}"`
      }
    });
    return data;
  },
  updateBasket: async (payload) => {
    const { data } = await httpService.patch(
      basketEndPoint + payload._id,
      payload
    );
    return data;
  }
};

export default basketService;
