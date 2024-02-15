<template>
  <a
    href="#"
    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
      :src="`${config.public.imageUrl}/original${filme?.poster_path}`"
      :alt="`${filme?.title}`"
    />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ filme?.title }}
      </h5>
      
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Filme } from "~/types/filme";
import { useDateFormat, formatDate } from "@vueuse/core";
import type { GeneroFilme } from "~/types/generoFilme";

const config = useRuntimeConfig();

const props = defineProps({
  filme: {
    type: Object as PropType<Filme>,
  },
});
const generosFilmes = ref<GeneroFilme[] | undefined>();
const loadGeneros = async () => {};

onMounted(async () => {
  await loadGeneros();
});
</script>
