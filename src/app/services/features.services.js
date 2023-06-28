import httpService from "./http.services";
const featuresEndpoint = "features/";

const featuresService = {
  get: async () => {
    const { data } = await httpService.get(featuresEndpoint);
    return data;
  }
};
export default featuresService;
