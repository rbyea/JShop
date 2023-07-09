import httpService from "./http.service";
const gameEndpoint = "games/";

const gameService = {
  get: async () => {
    const { data } = await httpService.get(gameEndpoint);
    return data;
  }
};
export default gameService;
