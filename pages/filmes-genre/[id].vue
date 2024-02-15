<template>
  <div class="container px-4 mx-auto mt-10">
    <div class="grid grid-cols-2 gap-4 md:grid-cols-6">
      <div v-for="filme in filmes?.results" :key="filme.id">
        <NuxtLink :to="`/filme/${filme.id}`"
          ><img
            class="h-auto max-w-full rounded-lg"
            :src="`${config.public.imageUrl}/original${filme?.poster_path}`"
            :alt="`${filme?.title}`"
        /></NuxtLink>
      </div>
    </div>
    <div class="flex justify-center">
      <fwb-pagination
        v-model="currentPage"
        :total-items="filmes?.total_pages"
        large
      ></fwb-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FwbPagination } from "flowbite-vue";
import { initFlowbite } from "flowbite";
import { onMounted } from "vue";
import type { FilmeResponse } from "~/types/filmeResponse";
const { $http } = useNuxtApp();

const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const currentPage = ref(1);

const getMovieByGenre = computed(() => {
  return;
});
const { data: filmes } = await useAsyncData<FilmeResponse>("movie", () =>
  $http.movie.getMovieByGenre(route.params.id, currentPage.value)
);

onMounted(async () => {
  initFlowbite();
});
</script>

<style scoped></style>
