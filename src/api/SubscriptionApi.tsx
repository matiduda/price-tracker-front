import {
  getAllSubscriptions,
  getSubscription,
  deleteSubscription,
  createSubscription,
} from "../utils/endpoints";
import { api } from "./axios/Api";

export type Subscription = {
  start_date: Date;
  end_date: Date;
};

const createHeaders = (): object => {
  return { Authorization: `Bearer ${localStorage.getItem("token")}` };
};

export const SubscriptionApi = {
  getAllSubscriptions: async (): Promise<Subscription[]> => {
    const response = await api.get(getAllSubscriptions, {
      headers: createHeaders(),
    });
    return response.data;
  },

  getSubscription: async (): Promise<Subscription> => {
    const response = await api.get(getSubscription, {
      headers: createHeaders(),
    });
    return response.data;
  },

  createSubscription: async (months: number) => {
    const response = await api.post(
      createSubscription,
      { months: months },
      { headers: createHeaders() }
    );
    return response.data;
  },

  deleteSubscription: async (itemId: number) => {
    const response = await api.post(deleteSubscription, {
      headers: createHeaders(),
    });
    return response.data;
  },
};
