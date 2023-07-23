import httpService from "./http.service";
const gameEndpoint = "games/";

const gameService = {
  get: async (category, minPrice, maxPrice) => {
    const params = {};

    if (category) {
      params.category = category;
    }
    if (minPrice) {
      params.minPrice = minPrice;
    }
    if (maxPrice) {
      params.maxPrice = maxPrice;
    }

    const { data } = await httpService.get(gameEndpoint, { params });
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.post(gameEndpoint, payload);
    return data;
  },
  getCategories: async (payload) => {
    const { data } = await httpService.get(gameEndpoint, {
      params: payload
    });
    return data;
  },
  updateGame: async (payload) => {
    const { data } = await httpService.put(gameEndpoint, payload);
    return data;
  }
};
export default gameService;
