<template>
  <div class="flex items-center ">
    <Icon
      v-for="estrela in estrelas"
      :name="estrela.icone"
      :class="estrela.classe"
    />

    <p class="ml-2 font-bold text-gray-900 dark:text-white">
      {{ notaConvertida?.toFixed(1) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { IconesEstrela } from "~/enums/iconesEstrela";
import type { EstrelaAvaliacao } from "~/types/estrelaAvaliacao";

const props = defineProps({
  nota: {
    type: Number as PropType<number>,
  },
});

const estrelas = ref<EstrelaAvaliacao[]>([]);
const notaConvertida = ref<number>();
const getNota = (nota: number) => {
  const notaFormatada = nota / 2;
  for (var i = 1; i <= 5; i++) {
    if (i <= notaFormatada) {
      const estrela = {
        icone: IconesEstrela.EstrelaCheia,
        classe: "estrela-amarela",
      };
      estrelas.value.push(estrela);
    } else if (i + 0.5 <= notaFormatada) {
      const estrela = {
        icone: IconesEstrela.EstrelaMeioCheia,
        classe: "estrela-amarela",
      };
      estrelas.value.push(estrela);
    } else {
      const estrela = {
        icone: IconesEstrela.EstrelaVazia,
        classe: "estrela-vazia",
      };
      estrelas.value.push(estrela);
    }
  }
};

if (props.nota !== undefined) {
  getNota(props.nota);

  notaConvertida.value = props.nota / 2;
}
</script>
