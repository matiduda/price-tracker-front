import { allItems, followItem, itemPrices } from "../utils/endpoints";
import { api } from "./axios/Api";

const createHeaders = (): object => {
  return { Authorization: `Bearer ${localStorage.getItem("token")}` };
};

export const ItemsApi = {
  getAllItems: async () => {
    const response = await api.get(allItems, { headers: createHeaders() });
    return response.data;
  },

  getPricesForItem: async (itemId: number) => {
    const response = await api.get(itemPrices, {
      params: {
        item_id: itemId,
      },
      headers: createHeaders(),
    });
    return response.data;
  },

  followItem: async (itemId: number) => {
    const response = await api.post(
      followItem,
      { item_id: itemId },
      { headers: createHeaders() }
    );
    return response.data;
  },
};
