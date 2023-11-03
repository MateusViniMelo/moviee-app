<template>
    <div>
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 uppercase dark:text-white">Filmes bem avaliados</h1>
        <div class="grid grid-cols-1 gap-5 mt-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-10 ">


            <MovieCard v-for="filme in filmeResponse?.results" :key="filme.id" :filme="filme" />


        </div>
    </div>
</template>

<script setup lang="ts">




const filmeStore = useFilmeStore()

const { getGenresMovies } = useGenreMovie()
const { filmeResponse } = storeToRefs(filmeStore)

const { loadFilmesBemAvaliados } = filmeStore



onMounted(async () => {

   
    loadFilmesBemAvaliados()
    
})
</script>

<style scoped></style>