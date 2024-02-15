<template>
  <div>
    <div
      class="h-full md:h-[50vh] bg-center bg-auto md:bg-cover bg-no-repeat relative"
      :style="`background-image: url( '${config.public.imageUrl}/original${filme?.backdrop_path}');`"
    >
      <div
        class="w-full h-full bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900"
      >
        <div class="container px-4 mx-auto">
          <div class="text-lg text-gray-900 dark:text-white"></div>
          <div
            class="grid grid-cols-2 pt-16 xl:grid-cols-4 md:pt-48 md:grid-cols-6"
          >
            <div
              class="flex justify-center col-span-2 xl:col-span-1 md:col-span-3 xl:justify-normal lg:col-span-3"
            >
              <img
                :src="`${config.public.imageUrl}/original${filme?.poster_path}`"
                alt=""
                class="rounded-lg w-[300px]"
              />
            </div>
            <div class="col-span-2 xl:col-span-3 md:col-span-3 lg:col-span-3">
              <div>
                <h5
                  class="mt-3 mb-5 text-4xl font-bold tracking-tight text-center text-gray-900 md:text-5xl dark:text-white md:text-left"
                >
                  {{ filme?.title }}
                </h5>
                <p
                  class="hidden my-2 text-sm text-center text-gray-900 dark:italic md:block md:text-lg dark:text-white md:text-left"
                >
                  {{ filme?.tagline }}
                </p>
                <div
                  class="flex items-center justify-around my-4 space-x-6 md:justify-start"
                >
                  <StarRating
                    :nota="filme?.vote_average"
                    v-if="filme"
                    class="text-lg"
                  />
                  <p class="text-gray-900 md:text-lg dark:text-white">
                    {{ filme?.vote_count }} votos
                  </p>
                </div>
                <p class="text-gray-900 md:text-lg dark:text-white">
                  {{ filme?.runtime }} minutos
                </p>
                <p class="text-gray-900 md:text-lg dark:text-white">
                  Lançamento: {{ filme?.release_date }}
                </p>
                <div
                  class="flex flex-wrap items-end justify-start mt-4 space-x-1 space-y-2"
                >
                  <NuxtLink :to="`/filmes-genre/${genero.id}`" target="_blank"
                    v-for="genero in filme?.genres"
                    :key="genero.id"
                    class="font-medium me-2 px-2.5 py-0.5 rounded bg-yellow-300 text-dark focus:outline-none hover:bg-yellow-400 focus:ring-yellow-300 dark:focus:ring-yellow-900 "
                  >
                    {{ genero.name }}
                  </NuxtLink >
                </div>
              </div>
              <div class="mt-8 2xl:mt-12">
                <h5
                  class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  Sinopse
                </h5>
                <p
                  class="font-normal text-left text-gray-700 dark:text-gray-400 lg:text-lg 2xl:text-base"
                >
                  {{ filme?.overview }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Filme } from "~/types/filme";

const { $http } = useNuxtApp();

const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();

const { data: filme } = await useAsyncData<Filme>("movie", () =>
  $http.movie.getMovieById(route.params.id)
);
</script>

<style scoped></style>
