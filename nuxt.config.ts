// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    public: {
      apiKey: process.env.NUXT_API_KEY,
      apiUrl: "https://api.themoviedb.org/3",
      imageUrl: "https://image.tmdb.org/t/p/w400",
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt", "nuxt-icon"],
});
