import axios from "axios";

const baseUrl = "https://viacep.com.br/ws/";

const api = axios.create({ baseURL: baseUrl }); 

export const getCep = async (cep) => {
  try {
    const response = await api.get(`${cep}/json/`); 
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching cep", error);
  }
};