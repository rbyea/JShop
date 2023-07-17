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
  }
};
export default gameService;
