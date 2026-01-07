import ApiClient from "./apiClient";
import { type AxiosRequestConfig } from "axios";
export default class SpaceflightApi extends ApiClient {
  private static readonly baseUrl = import.meta.env.VITE_SPACEFLIGHT_API_URL;

  constructor(config?: AxiosRequestConfig) {
    super(SpaceflightApi.baseUrl, {
      ...config,
      headers: {
        "Content-Type": "application/json",
        ...config?.headers,
      },
    });
  }
}
