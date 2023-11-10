import { defineStore } from "pinia";

export const useTamanhoSliderStore = defineStore("TamanhoSlider", () => {
  const slidesPorView = ref<number>(2);
  const slidesPorViewPopular = ref<number>(2);
  const isClient = process.client;

  const getComprimentoJanela = (): number | null => {
    if (isClient) {
      const comprimentoJanela = window.innerWidth;

      return comprimentoJanela;
    }
    return null;
  };

  const setSlidesPorTamanho = () => {
    const tamanhoJanela = getComprimentoJanela();

    if (tamanhoJanela !== null) {
      if (tamanhoJanela < 768) {
        slidesPorView.value = 2;
      } else if (tamanhoJanela >= 768 && tamanhoJanela < 1024) {
        slidesPorView.value = 5;
      } else if (tamanhoJanela >= 1024) {
        slidesPorView.value = 8;
      }
    }
  };
  const setSlidesPorTamanhoFilmePopular = () => {
    const tamanhoJanela = getComprimentoJanela();

    if (tamanhoJanela !== null) {
      if (tamanhoJanela < 768) {
        slidesPorViewPopular.value = 1;
      } else if (tamanhoJanela >= 768 && tamanhoJanela < 1024) {
        slidesPorViewPopular.value = 2;
      } else if (tamanhoJanela >= 1024) {
        slidesPorViewPopular.value = 4;
      }
    }
  };

  return {
    setSlidesPorTamanho,
    slidesPorViewPopular,
    slidesPorView,
    setSlidesPorTamanhoFilmePopular,
  };
});
