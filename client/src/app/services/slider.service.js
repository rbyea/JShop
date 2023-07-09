import httpService from "./http.service";
const sliderEndpoint = "slider/";

const sliderServices = {
  get: async () => {
    const { data } = await httpService.get(sliderEndpoint);
    return data;
  }
};

export default sliderServices;
