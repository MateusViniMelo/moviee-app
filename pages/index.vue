<template>
  <div>
    <h1
      class="mb-3 text-2xl font-bold tracking-tight text-gray-900 uppercase dark:text-white"
    >
      Filmes bem avaliados
    </h1>

    <swiper
      :slidesPerView="slidesPorView"
      :loop="true"
      :freeMode="true"
      :navigation="true"
      :spaceBetween="20"
      :pagination="{
        clickable: true,
      }"
      :modules="[Navigation, FreeMode]"
      @resize="setSlidesPorTamanho()"
    >
      <swiper-slide v-for="filme in filmeResponse?.results" :key="filme.id">
        <img
          class="rounded-t-lg"
          :src="`${config.public.imageUrl}${filme?.poster_path}`"
          :alt="`${filme?.title}`"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { FreeMode, Navigation } from "swiper/modules";

import "swiper/css";

import "swiper/css/pagination";

const isClient = process.client;
const filmeStore = useFilmeStore();
const tamanhoSliderStore = useTamanhoSliderStore();
const config = useRuntimeConfig();
const { getGenresMovies } = useGenreMovie();

const { filmeResponse } = storeToRefs(filmeStore);
const { slidesPorView } = storeToRefs(tamanhoSliderStore);

const { loadFilmesBemAvaliados } = filmeStore;
const { setSlidesPorTamanho } = tamanhoSliderStore;

onMounted(async () => {
  setSlidesPorTamanho();

  loadFilmesBemAvaliados();
});
</script>

<style scoped></style>
