import httpClient from "./httpClient";

export const login = async (credentials) => {
  return await httpClient.post("account/login", credentials);
};