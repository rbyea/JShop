import httpService from "../services/http.services";
import games from "../mockData/games.json";
import system from "../mockData/system.json";
import sizes from "../mockData/sizes.json";
import ram from "../mockData/ram.json";
import gpu from "../mockData/gpu.json";
import cpu from "../mockData/cpu.json";
import directX from "../mockData/directx.json";
import features from "../mockData/features.json";
import categories from "../mockData/categories.json";
import mainSlider from "../mockData/mainSlider.json";

const useMockData = () => {
  async function initialData() {
    try {
      for (const game of games) {
        await httpService.put("games/" + game._id, game);
      }
      for (const win of system) {
        await httpService.put("system/" + win._id, win);
      }
      for (const randomAccessMemory of ram) {
        await httpService.put(
          "ram/" + randomAccessMemory._id,
          randomAccessMemory
        );
      }
      for (const graphicsProcessor of gpu) {
        await httpService.put(
          "gpu/" + graphicsProcessor._id,
          graphicsProcessor
        );
      }
      for (const centralProcessing of cpu) {
        await httpService.put(
          "cpu/" + centralProcessing._id,
          centralProcessing
        );
      }
      for (const direct of directX) {
        await httpService.put("direct/" + direct._id, direct);
      }
      for (const feature of features) {
        await httpService.put("features/" + feature._id, feature);
      }
      for (const category of categories) {
        await httpService.put("categories/" + category._id, category);
      }
      for (const size of sizes) {
        await httpService.put("size/" + size._id, size);
      }
      for (const slide of mainSlider) {
        await httpService.put("slider/" + slide._id, slide);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return { initialData };
};

export default useMockData;
