<template>
  <div class="container px-4 mx-auto mt-10">
    <form
      class="max-w-md mx-auto mt-32 mb-10"
      @submit.prevent="pesquisarFilmes()"
    >
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3"
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
          v-model="pesquisa"
          type="search"
          id="default-search"
          class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
          placeholder="Pesquisar Filmes"
          required
        />
        <button
          type="submit"
          class="text-black absolute end-2.5 bottom-2.5 bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-100 font-medium rounded-lg text-sm px-4 py-2 dark:focus:ring-yellow-500"
        >
          Pesquisar
        </button>
      </div>
    </form>
    <div
      class="flex justify-center"
      v-if="filmesPesquisados?.results.length === 0"
    >
      <div
        class="w-1/4 p-4 mb-4 text-sm text-red-800 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        Sem resultados para essa busca.
      </div>
    </div>
    <div
      class="grid grid-cols-2 gap-4 md:grid-cols-6"
      v-if="filmesPesquisados?.results.length !== 0"
    >
      <div
        v-for="filme in exibirFilmesIniciais == true
          ? filmesPopulares?.results
          : filmesPesquisados?.results"
        :key="filme.id"
      >
        <NuxtLink :to="`/filme/${filme.id}`"
          ><div v-if="filme?.poster_path" class="relative">
            <img
              class="h-auto max-w-full rounded-lg"
              :src="`${config.public.imageUrl}/original${filme?.poster_path}`"
              :alt="`${filme?.title}`"
            />
           
          </div>
          <div v-else class="relative">
            <img
              class="h-auto max-w-full rounded-lg z-1"
              src="~/assets/img/color-gray.png"
              :alt="`${filme?.title}`"
            />
            <h1
              class="absolute inset-x-0 bottom-0 inline-flex items-center justify-center h-10 text-white bg-gray-800"
            >
              {{ filme?.title }}
            </h1>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div
      class="flex justify-center mt-10"
      v-if="filmesPesquisados?.results.length !== 0 && paginasTotais !== 1"
    >
      <fwb-pagination
        v-model="paginaAtual"
        :total-items="paginasTotais"
        previous-label="Anterior"
        next-label="Próximo"
        @update:modelValue="pesquisarFilmes()"
        large
      ></fwb-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FwbPagination, FwbSpinner } from "flowbite-vue";
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
const { $http } = useNuxtApp();
const { start, finish } = useLoadingIndicator();

const config = useRuntimeConfig();

const filmeStore = useFilmeStore();
const { paginasTotais, paginaAtual, filmesPesquisados, exibirFilmesIniciais } =
  storeToRefs(filmeStore);

const { loadFilmesPesquisados } = filmeStore;

const pesquisa = ref<string>("");

const { data: filmesPopulares } = await useAsyncData("search-movies", () =>
  $http.movie.getPopularMovies().finally(() => {
    if (filmesPesquisados.value?.results.length !== 0) {
    }
  })
);

const pesquisarFilmes = async () => {
  start();
  await loadFilmesPesquisados(pesquisa.value).finally(() => {
    exibirFilmesIniciais.value = false;
    finish();
  });
};

onMounted(async () => {
  initFlowbite();
});
</script>

<style scoped></style>
