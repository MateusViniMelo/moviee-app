<template>
    <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg" :src="`${config.public.imageUrl}${filme?.poster_path}`" :alt="`${filme?.title}`" />
        </a>
        <div class="px-4 py-3">
            <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">

                    {{ filme?.title }}
                </h5>
            </a>
            <div class="flex flex-wrap items-center justify-between lg:space-y-2 xl:lg:space-y-0">
                <StarRating :nota="filme?.vote_average" />
                
            </div>
            <div class="flex flex-wrap items-end justify-end mt-4 space-x-1 space-y-2">
                <div v-for="genero in generosFilmes" :key="genero.id"
                    class="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
                    {{
                        genero.name }}</div>
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

