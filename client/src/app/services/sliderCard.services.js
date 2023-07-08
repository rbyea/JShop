import httpService from "./http.services";
const sliderCardEndpoint = "sliderCard/";

const sliderCardServices = {
  get: async () => {
    const { data } = await httpService.get(sliderCardEndpoint);
    return data;
  }
};

export default sliderCardServices;
