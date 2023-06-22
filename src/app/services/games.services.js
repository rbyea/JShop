import httpService from "./http.services";
const gameEndpoint = "games/";

const gameService = {
  get: async () => {
    const { data } = await httpService.get(gameEndpoint);
    return data;
  }
};
export default gameService;
