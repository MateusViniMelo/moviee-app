<template>
  <div
    class="relative h-full bg-center bg-no-repeat bg-cover"
    :style="`background-image: url( '${config.public.imageUrl}/original${filmeInformacoes?.filme?.backdrop_path}');`"
  >
    <div class="relative z-10">
      <div class="container h-full px-4 mx-auto">
        <div class="text-lg text-gray-900 dark:text-white"></div>
        <div
          class="grid grid-cols-2 pt-16 xl:grid-cols-4 md:pt-48 md:grid-cols-6"
        >
          <div
            class="flex items-start justify-center col-span-2 xl:col-span-1 md:col-span-3 xl:justify-normal lg:col-span-3"
          >
            <img
              :src="`${config.public.imageUrl}/original${filmeInformacoes?.filme?.poster_path}`"
              alt=""
              class="rounded-lg w-[300px] h-auto"
            />
          </div>
          <div class="col-span-2 xl:col-span-3 md:col-span-3 lg:col-span-3">
            <div>
              <h5
                class="mt-3 mb-5 text-4xl font-bold tracking-tight text-center text-gray-900 md:text-5xl dark:text-white md:text-left"
              >
                {{ filmeInformacoes?.filme?.title }}
              </h5>
              <p
                class="hidden my-2 text-sm text-center text-gray-900 dark:italic md:block md:text-lg dark:text-white md:text-left"
              >
                {{ filmeInformacoes?.filme?.tagline }}
              </p>
              <div
                class="flex items-center justify-around my-4 space-x-6 md:justify-start"
              >
                <StarRating
                  :nota="filmeInformacoes?.filme?.vote_average"
                  v-if="filmeInformacoes?.filme"
                  class="text-lg"
                />
                <p class="text-gray-900 md:text-lg dark:text-white">
                  {{ filmeInformacoes?.filme?.vote_count }} votos
                </p>
              </div>
              <p class="text-gray-900 md:text-lg dark:text-white">
                {{ filmeInformacoes?.filme?.runtime }} minutos
              </p>
              <p class="text-gray-900 md:text-lg dark:text-white">
                Lançamento: {{ filmeInformacoes?.filme?.release_date }}
              </p>
              <div
                class="flex flex-wrap items-end justify-start mt-4 space-x-1 space-y-2"
              >
                <NuxtLink
                  :to="`/filmes-genre/${genero.id}`"
                  target="_blank"
                  v-for="genero in filmeInformacoes?.filme?.genres"
                  :key="genero.id"
                  class="font-medium me-2 px-2.5 py-0.5 rounded bg-yellow-300 text-dark focus:outline-none hover:bg-yellow-400 focus:ring-yellow-300 dark:focus:ring-yellow-900"
                >
                  {{ genero.name }}
                </NuxtLink>
              </div>
            </div>
            <div class="mt-8 2xl:mt-12">
              <p
                class="font-normal text-left text-gray-700 dark:text-gray-400 lg:text-lg 2xl:text-base"
              >
                {{ filmeInformacoes?.filme?.overview }}
              </p>
            </div>
            <div>
              <h5
                class="mt-6 mb-5 text-2xl font-bold text-gray-900 uppercase dark:text-white"
              >
                <span class="pr-3 border-b-4 border-yellow-300 pb-0.5">Elenco</span>
              </h5>
              <div>
                <swiper
                  :slidesPerView="slidesElencoPorView"
                  :freeMode="true"
                  :navigation="true"
                  :spaceBetween="20"
                  :pagination="{
                    clickable: true,
                  }"
                  :modules="[Navigation, FreeMode]"
                  @resize="setSlidesElencoPorTamanho()"
                >
                  <swiper-slide
                    v-for="pessoaElenco in filmeInformacoes?.cast"
                    :key="pessoaElenco.cast_id"
                    class="cursor-pointer"
                  >
                    <figure
                      class="relative flex justify-center max-w-sm filter"
                    >
                      <img
                        v-if="pessoaElenco.profile_path !== null"
                        class="rounded-lg"
                        :src="`${config.public.imageUrl}/w200${pessoaElenco.profile_path}`"
                        :alt="pessoaElenco.name"
                      />
                      <img
                        v-else
                        class="h-auto max-w-full rounded-lg"
                        src="~/assets/img/color-gray.png"
                      />
                      <figcaption
                        class="absolute text-lg font-bold text-white md:text-sm bottom-6 xl:text-lg outline-black"
                      >
                        <p class="">
                          {{ pessoaElenco.name }}
                        </p>
                      </figcaption>
                    </figure>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </div>

          <div></div>
        </div>
        <div class="mt-32">
          <div class="flex justify-start">
            <swiper
              :slidesPerView="1"
              :spaceBetween="30"
              :loop="true"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :pagination="{
                dynamicBullets: true,
              }"
              :navigation="true"
              :modules="[Pagination, Navigation, Autoplay]"
              class="w-2/3"
            >
              <swiper-slide
                v-for="(imagem, index) in filmeInformacoes?.movieImagens
                  ?.backdrops"
                :key="index"
              >
                <img
                  class="rounded-lg"
                  :src="`${config.public.imageUrl}/original${imagem?.file_path}`"
                  alt="image description"
                />
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="">
          <h1
            class="mt-20 mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <span class="pr-3 border-b-4 border-yellow-300 pb-0.5">Recomendações</span>
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
              v-for="filme in filmeInformacoes?.filmesRecomendacoes?.results"
              :key="filme.id"
            >
              <NuxtLink :to="`/filme/${filme.id}`"
                ><img
                  class="rounded-t-lg cursor-pointer"
                  :src="`${config.public.imageUrl}/w200${filme?.poster_path}`"
                  :alt="`${filme?.title}`"
              /></NuxtLink>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div
      class="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-t from-blue-50 from-70% to-transparent dark:from-gray-900"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { FilmeInformacao } from "~/types/filmeInformacao";
import { FreeMode, Navigation, Pagination, Autoplay } from "swiper/modules";
import { initFlowbite } from "flowbite";
import "swiper/css";
import "swiper/css/pagination";
import type { PessoaElenco } from "~/types/pessoaElenco";
import type { CreditoFilme } from "~/types/creditoFilme";
const { $http } = useNuxtApp();
const tamanhoSliderStore = useTamanhoSliderStore();
const { slidesElencoPorView, slidesPorView } = storeToRefs(tamanhoSliderStore);
const { setSlidesElencoPorTamanho, setSlidesPorTamanho } = tamanhoSliderStore;
const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();

const { data: filmeInformacoes } = await useAsyncData("movie", async () => {
  const [filme, credito, movieImagens, filmesRecomendacoes] = await Promise.all(
    [
      $http.movie.getMovieById(route.params.id),
      $http.movie.getMovieDetailById(route.params.id),
      $http.movie.getMovieImagesById(route.params.id),
      $http.movie.getMoviesRecommendations(route.params.id),
    ]
  );

  return { filme, cast: credito.cast, movieImagens, filmesRecomendacoes };
});

onMounted(() => {
  setSlidesElencoPorTamanho();
  setSlidesPorTamanho();
});
</script>

<style scoped></style>
