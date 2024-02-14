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
          class="absolute bottom-0 flex flex-col items-start justify-end w-full p-10 space-y-5 text-lg text-white lg:p-20 h-2/3 bg-gradient-to-b from-transparent to-gray-900"
        >
          <p
            class="font-bold shadow cursor-pointer lg:w-1/2 xl:text-6xl md:text-4xl hover:text-gray-200"
            @click="goToFilme(filme)"
          >
            {{ filme?.title }}
          </p>
          <p
            class="hidden text-sm text-left cursor-pointer lg:text-base text-clip xl:w-1/2 md:block hover:text-gray-200"
            @click="goToFilme(filme)"
          >
            {{ filme?.overview }}
          </p>
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
      >
        <swiper-slide
          v-for="filme in filmesBemAvaliados?.results"
          :key="filme.id"
          class="cursor-pointer"
          @click="goToFilme(filme)"
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
          @click="goToFilme(filme)"
        >
          <img
            class="rounded-t-lg cursor-pointer"
            :src="`${config.public.imageUrl}/w200${filme?.poster_path}`"
            :alt="`${filme?.title}`"
          />
        </swiper-slide>
      </swiper>
      <h1
        class="mt-10 mb-3 text-2xl font-bold tracking-tight text-gray-900 lg:mt-20 dark:text-white"
      >
        Filmes Populares
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
          v-for="filme in filmesPopulares?.results"
          :key="filme.id"
          class="cursor-pointer"
          @click="goToFilme(filme)"
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
            class="rounded-t-lg cursor-pointer"
            :src="`${config.public.imageUrl}/w200${filme?.poster_path}`"
            :alt="`${filme?.title}`"
            @click="goToFilme(filme)"
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
import type { Filme } from "~/types/filme";

const router = useRouter();
const isClient = process.client;
const filmeStore = useFilmeStore();
const tamanhoSliderStore = useTamanhoSliderStore();
const config = useRuntimeConfig();


const {
  filmesBemAvaliados,
  filmesPopulares,
  filmesLancadosEmBreve,
  filmesEmCartaz,
} = storeToRefs(filmeStore);
const { slidesPorView, slidesPorViewPopular } = storeToRefs(tamanhoSliderStore);

const goToFilme = (filme: Filme) => {
  router.push(`/filme/${filme.id}`);
};

const {
  loadFilmesBemAvaliados,
  loadFilmesPopulares,
  loadFilmesLancadosEmBreve,
  loadFilmesEmCartaz,
} = filmeStore;
const { setSlidesPorTamanho, setSlidesPorTamanhoFilmePopular } =
  tamanhoSliderStore;
await useAsyncData("movies", () =>
  Promise.all([
    loadFilmesBemAvaliados(),
    loadFilmesPopulares(),
    loadFilmesLancadosEmBreve(),
    loadFilmesEmCartaz(),
  ])
);

onMounted(async () => {
  setSlidesPorTamanho();
  setSlidesPorTamanhoFilmePopular();
  initFlowbite();
});
</script>

<style scoped>
.degrade-preto {
  background-image: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 1));
}
</style>
