import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  const config = useRuntimeConfig();


  const axiosInstance = axios.create({
    baseURL: config.public.apiUrl,
    headers: {
      Authorization: `Bearer ${config.public.apiKey}`,
      Accept: "application/json",
    },
  });

  
  
  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
