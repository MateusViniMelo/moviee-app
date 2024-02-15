<template>
  <div class="container px-4 mx-auto mt-10">
    <div class="grid grid-cols-2 gap-4 md:grid-cols-6">
      <div v-for="filme in filmesPorGenero?.results" :key="filme.id">
        <NuxtLink :to="`/filme/${filme.id}`"
          ><img
            class="h-auto max-w-full rounded-lg"
            :src="`${config.public.imageUrl}/original${filme?.poster_path}`"
            :alt="`${filme?.title}`"
        /></NuxtLink>
      </div>
    </div>
    <div class="flex justify-center mt-10">
      <fwb-pagination
        v-model="paginaAtual"
        :total-items="paginasTotais"
        previous-label="Anterior"
        next-label="Próximo"
        :slice-length="1"
        @update:modelValue="carregarFilmes()"
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
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const paginaAtual = ref(1)
const filmeStore = useFilmeStore();
const { filmesPorGenero, paginasTotais } = storeToRefs(filmeStore);

const { loadFilmesbyGenero } = filmeStore;
const carregarFilmes = async () => {
  start();
  await loadFilmesbyGenero(route.params.id, paginaAtual.value).finally(() =>
    finish()
  );
};
await useAsyncData("movies-genre", () =>
  loadFilmesbyGenero(route.params.id, paginaAtual.value)
);
onMounted(async () => {
  initFlowbite();
});
</script>

<style scoped></style>
