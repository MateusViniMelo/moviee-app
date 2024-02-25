<template>
  <nav
    class="fixed top-0 left-0 z-20 w-full bg-white border-b-4 border-gray-200 dark:bg-gray-900 dark:border-gray-900"
  >
    <div
      class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto"
    >
      <NuxtLink :to="'/'" class="flex items-center">
        <Icon name="bxs:camera-movie" class="mr-3 text-3xl text-yellow-300" />

        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >MoviesLib</span
        >
      </NuxtLink>
      <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          class="flex items-center px-4 py-2 space-x-1 font-medium text-center text-white bg-yellow-400 rounded-lg focus:outline-none hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
        >
          <Icon class="text-lg" name="ic:baseline-search"/> <span>Pesquisar</span>
        </button>
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-search"
      >
        <div class="relative mt-3 md:hidden">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            v-model="searcher"
            id="search-navbar"
            class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            placeholder="Pesquisar Filme"
          />
        </div>
        <ul
          class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <NuxtLink
              :to="'/'"
              :exactActiveClass="'bg-yellow-300 md:text-yellow-400 md:p-0 md:dark:text-yellow-300 md:bg-transparent md:p-0'"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 md:dark:hover:text-yellow-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Início</NuxtLink
            >
          </li>

          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full px-3 py-2 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-yellow-300 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Gêneros
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownLargeButton"
              >
                <li v-for="genero in generos?.genres" :key="genero.id">
                  <NuxtLink
                    @click="resetarPaginaAtual()"
                    :to="`/filmes-genre/${genero.id}`"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{{ genero.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 md:dark:hover:text-yellow-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >About</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-400 md:p-0 dark:text-white md:dark:hover:text-yellow-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Services</a
            >
          </li>
          <li>
            <p
              @click="toggleDark()"
              class="block py-2 pl-3 pr-4 rounded cursor-pointer md:hover:text-yellow-400 md:p-0 dark:text-white"
            >
              <span v-if="!isDark">
                <Icon
                  name="material-symbols:wb-sunny"
                  class="text-gray-800 xl:text-lg hover:text-gray-600 dark:text-gray-300"
                />
              </span>

              <span v-else>
                <Icon
                  name="fa6-solid:moon"
                  class="text-gray-300 xl:text-lg hover:text-white"
                />
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useDark, useToggle } from "@vueuse/core";

import type { GeneroFilmeResponse } from "~/types/generoFilmeResponse";
import type { GeneroFilme } from "~/types/generoFilme";

const router = useRouter();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const { $http } = useNuxtApp();
const filmeStore = useFilmeStore();
const { paginaAtual } = storeToRefs(filmeStore);
const searcher = ref<string>("");
const searchMovie = (pesquisa: string) => {
  console.log();
};
const goToMoviesByGenre = (genre: GeneroFilme) => {
  router.push(`/filmes-genre/${genre.id}`);
};
const { data: generos } = await useAsyncData<GeneroFilmeResponse>(
  "generosFilmes",
  () => $http.movieGenre.getGenresMovies()
);

const resetarPaginaAtual = () => {
  paginaAtual.value = 1;
};
onMounted(() => {
  initFlowbite();
});
</script>
