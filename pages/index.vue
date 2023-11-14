<template>
  <div>
    <swiper
      :pagination="{
        clickable: true,
      }"
      :loop="true"
      :navigation="true"
      :spaceBetween="20"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="[Navigation, Autoplay, Pagination]"
      @resize="setSlidesPorTamanhoFilmePopular()"
      class="w-full lg:h-[600px] p-24 h-full"
    >
      <swiper-slide
        v-for="filme in filmesPopulares?.results"
        :key="filme.id"
        class="relative"
      >
        <img
          class="w-full m-auto"
          :src="`${config.public.imageUrl}/original${filme?.backdrop_path}`"
          :alt="`${filme?.title}`"
        />
        <div
          class="absolute bottom-0 flex flex-col items-start justify-end w-full p-10 space-y-5 text-lg text-white lg:p-20 h-2/3 degrade-preto"
          style=""
        >
          <p class="font-bold shadow lg:w-1/2 xl:text-6xl md:text-4xl">{{ filme?.title }}</p>
          <p class="hidden text-sm text-left lg:text-base text-clip xl:w-1/2 md:block">{{ filme?.overview }}</p>
        </div>
      </swiper-slide>
    </swiper>

    <div class="container px-4 mx-auto">
      <h1
        class="mt-10 mb-3 text-2xl font-bold tracking-tight text-gray-900 lg:mt-20 dark:text-white"
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
            class="rounded-t-lg"
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

<style scoped>
.degrade-preto {
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
}
</style>
