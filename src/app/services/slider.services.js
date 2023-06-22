import httpService from "./http.services";
const sliderEndpoint = "slider/";

const sliderServices = {
  get: async () => {
    const { data } = await httpService.get(sliderEndpoint);
    return data;
  }
};

export default sliderServices;
