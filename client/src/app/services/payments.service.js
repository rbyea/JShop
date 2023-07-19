import httpService from "./http.service";
const basketEndPoint = "payment/";

const paymentService = {
  create: async (payload) => {
    const { data } = await httpService.post(basketEndPoint, payload);
    return data;
  },
  getPayment: async (userId) => {
    const { data } = await httpService.get(basketEndPoint, {
      params: {
        orderBy: "userId",
        equalTo: `${userId}`
      }
    });
    return data;
  }
};

export default paymentService;
