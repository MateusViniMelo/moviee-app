<template>
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg" :src="`${config.public.imageUrl}${filme?.poster_path}`" :alt="`${filme?.title}`" />
        </a>
        <div class="px-5 pt-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                    {{ filme?.title }} - {{ filme?.id }}
                </h5>
            </a>
            <div class="flex flex-wrap items-center justify-between lg:space-y-2 xl:lg:space-y-0">
                <StarRating :nota="filme?.vote_average" />
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    {{ useDateFormat(filme?.release_date, 'DD/MM/YYYY').value }}
                </p>
            </div>
            <div class="flex flex-wrap items-center justify-end h-full py-5">


                <span v-for="genero in generosFilmes" :key="genero.id"
                    class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">{{
                        genero.name }}</span>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import type { Filme } from '~/types/filme';
import { useDateFormat, formatDate } from "@vueuse/core"
import type { GeneroFilme } from '~/types/generoFilme';

const { getGenres } = useGenreMovie()
const config = useRuntimeConfig();

const props = defineProps({
    filme: {

        type: Object as PropType<Filme>
    }
})
const generosFilmes = ref<GeneroFilme[] | undefined>()
const loadGeneros = async () => {
    if (props.filme !== undefined) {
        generosFilmes.value = await getGenres(props.filme?.genre_ids)
    }

}


onMounted(async () => {

    await loadGeneros()
})

</script>

