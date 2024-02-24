<template>
  <div
    v-if="analise?.content !== undefined"
    class="w-full p-6 mb-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex items-center mb-3 space-x-3">
      <div
        class="flex items-center justify-center w-10 h-10 font-medium uppercase rounded-full"
        :style="`background-color: ${corFundo};`"
      >
        <span>{{ analise?.author[0] }}</span>
      </div>
      <h5
        class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ analise?.author }}
      </h5>
    </div>
    <p class="mb-6 text-sm font-normal text-gray-700 dark:text-gray-400 ">Publicado em: {{  useDateFormat(analise?.created_at, 'DD/MM/YYYY').value}}</p>
    <p
      class="mb-3 font-normal text-gray-700 dark:text-gray-400"
      v-if="analiseExibicao === false && analise?.content.length > 500"
    >
      {{ analise?.content.substring(0, 500) }}...
    </p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" v-else>
      {{ analise?.content }}
    </p>
    <div class="text-yellow-400 text-end" v-if="analise?.content.length > 500">
      <span
        class="cursor-pointer"
        v-if="analiseExibicao === false"
        @click="mudarExibicaoAnalise()"
        >Ler Mais</span
      >
      <span class="cursor-pointer" v-else @click="mudarExibicaoAnalise()"
        >Esconder</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AnaliseFilme } from "~/types/analiseFilme";
import { useDateFormat, formatDate } from "@vueuse/core";
const props = defineProps({
  analise: {
    type: Object as PropType<AnaliseFilme>,
  },
});
const analiseExibicao = ref<boolean>(false);
const corFundo = computed(() => {
  const letras = "0123456789ABCDEF";
  const coresExcluidas = ["#FFC0CB", "#FFFFFF"]; // Cores a serem excluídas
  let cor;

  do {
    cor = "#";
    for (let i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)];
    }
  } while (coresExcluidas.includes(cor)); // Verifica se a cor gerada está na lista de cores excluídas

  return cor;
});

const mudarExibicaoAnalise = () => {
  analiseExibicao.value = !analiseExibicao.value;
};

const analiseTextoEscondida = (): string => {
  if (props.analise !== undefined) {
    const palavrasAnalise = props.analise?.content.split(" ");
    let primeirasDezPalavras = palavrasAnalise.slice(0, 122);
    let resultado = primeirasDezPalavras.join(" ");
    return resultado;
  }

  return "não foi possível achar a avaliação";
};
</script>

<style scoped></style>
