import httpService from "./http.services";
const specificationsEndpoint = "specifications/";

const specificationsServices = {
  get: async () => {
    const { data } = await httpService.get(specificationsEndpoint);
    return data;
  }
};

export default specificationsServices;
