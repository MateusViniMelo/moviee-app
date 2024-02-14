<template>
  <div>
    <div
      class="h-[50vh] bg-center bg-cover bg-no-repeat relative"
      :style="`background-image: url( '${config.public.imageUrl}/original${filme?.backdrop_path}');`"
    >
      <div
        class="w-full h-full bg-gradient-to-b from-transparent to-gray-100 dark:to-gray-900"
      >
        <div class="container px-4 mx-auto">
          <div class="text-lg text-gray-900 dark:text-white"></div>
          <div class="grid grid-cols-4 pt-52">
            <div class="col-span-1">
              <img
                :src="`${config.public.imageUrl}/original${filme?.poster_path}`"
                alt=""
                class="rounded-lg w-[300px]"
              />
            </div>
            <div class="col-span-3">
              <div>
                <h5
                  class="mb-5 text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  {{ filme?.title }}
                </h5>
                <p class="text-lg text-gray-900 dark:text-white">
                  {{ filme?.tagline }}
                </p>
                <div class="flex items-center justify-start space-x-6">
                  <StarRating
                    :nota="filme?.vote_average"
                    v-if="filme"
                    class="text-lg"
                  />
                  <p class="text-lg text-gray-900 dark:text-white">
                    {{ filme?.vote_count }} votos
                  </p>
                </div>
                <p class="text-lg text-gray-900 dark:text-white">
                  {{ filme?.runtime }} minutos
                </p>
                <p class="text-lg text-gray-900 dark:text-white">
                  Lançamento: {{ filme?.release_date }}
                </p>
                <div
                  class="flex flex-wrap items-end justify-start mt-4 space-x-1 space-y-2"
                >
                  <div
                    v-for="genero in filme?.genres"
                    :key="genero.id"
                    class="font-medium me-2 px-2.5 py-0.5 rounded bg-yellow-300 text-dark"
                  >
                    {{ genero.name }}
                  </div>
                </div>
              </div>
              <div class="mt-12">
                <h5
                  class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                >
                  Sinopse
                </h5>
                <p
                  class="text-left text-gray-700 ont-normal dark:text-gray-400"
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
