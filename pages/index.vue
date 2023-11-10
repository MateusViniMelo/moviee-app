<template>
  <div>
    <swiper
      :slidesPerView="slidesPorViewPopular"
      :loop="true"
      :freeMode="true"
      :navigation="true"
      :spaceBetween="20"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="[Navigation, FreeMode, Autoplay]"
      @resize="setSlidesPorTamanhoFilmePopular()"
    >
      <swiper-slide v-for="filme in filmesPopulares?.results" :key="filme.id">
        <img
          class="rounded-lg"
          :src="`${config.public.imageUrl}/w500${filme?.poster_path}`"
          :alt="`${filme?.title}`"
        />
      </swiper-slide>
    </swiper>

    <h1
      class="mt-40 mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
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
      class=""
    >
      <swiper-slide
        v-for="filme in filmesBemAvaliados?.results"
        :key="filme.id"
         class=""
      >
        <img
          class="rounded-t-lg "
          :src="`${config.public.imageUrl}/w200${filme?.poster_path}`"
          :alt="`${filme?.title}`"
        />
      </swiper-slide>
    </swiper>
    <h1
      class="mt-20 mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Novidades
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
      <swiper-slide
        v-for="filme in filmesLancadosEmBreve?.results"
        :key="filme.id"
      >
        <img
          class="rounded-t-lg"
          :src="`${config.public.imageUrl}/w200${filme?.poster_path}`"
          :alt="`${filme?.title}`"
        />
      </swiper-slide>
    </swiper>

    <h1
      class="mt-20 mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Filmes em Cartaz
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
      <swiper-slide v-for="filme in filmesEmCartaz?.results" :key="filme.id">
        <img
          class="rounded-t-lg"
          :src="`${config.public.imageUrl}/w200${filme?.poster_path}`"
          :alt="`${filme?.title}`"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { FreeMode, Navigation, Pagination, Autoplay } from "swiper/modules";
import { initFlowbite } from "flowbite";
import "swiper/css";

import "swiper/css/pagination";
import { all } from "axios";

const isClient = process.client;
const filmeStore = useFilmeStore();
const tamanhoSliderStore = useTamanhoSliderStore();
const config = useRuntimeConfig();
const { getGenresMovies } = useGenreMovie();

const {
  filmesBemAvaliados,
  filmesPopulares,
  filmesLancadosEmBreve,
  filmesEmCartaz,
} = storeToRefs(filmeStore);
const { slidesPorView, slidesPorViewPopular } = storeToRefs(tamanhoSliderStore);

const {
  loadFilmesBemAvaliados,
  loadFilmesPopulares,
  loadFilmesLancadosEmBreve,
  loadFilmesEmCartaz,
} = filmeStore;
const { setSlidesPorTamanho, setSlidesPorTamanhoFilmePopular } =
  tamanhoSliderStore;

onMounted(async () => {
  setSlidesPorTamanho();
  setSlidesPorTamanhoFilmePopular();
  initFlowbite();
  Promise.all([
    loadFilmesBemAvaliados(),
    loadFilmesPopulares(),
    loadFilmesLancadosEmBreve(),
    loadFilmesEmCartaz(),
  ]);
});
</script>

<style scoped></style>
