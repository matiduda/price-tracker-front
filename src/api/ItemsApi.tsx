import { allItems, followItem, itemPrices } from "../utils/endpoints";
import { api } from "./axios/Api";

export const ItemsApi = {
  getAllItems: async () => {
    const response = await api.get(allItems);
    return response.data;
  },

  getPricesForItem: async (itemId: number) => {
    const response = await api.get(itemPrices, {
      params: {
        item_id: itemId,
      },
    });
    return response.data;
  },

  followItem: async (itemId: number) => {
    // THROWS 422 :(
    const response = await api.post(followItem, {
      item_id: itemId,
    });
    return response.data;
  },
};
