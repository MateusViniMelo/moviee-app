<template>
  <footer class="bg-gray-100 border-t border-gray-700 dark:bg-gray-900 ">
    <div class="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <p class="flex items-center">
            <a href="https://mateus-melo-dev.vercel.app/" target="_blank"
              class="self-center text-2xl font-semibold text-gray-900 hover:text-gray-700 dark:text-white whitespace-nowrap dark:hover:text-gray-200"
              >Mateus<span class="text-violet-800 dark:text-violet-600">;</span></a
            >
          </p>
        </div>
        <div class="grid grid-cols-2 gap-8 space-x-4 sm:gap-12">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Tecnologias
            </h2>
            <ul class="font-medium text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a
                  href="https://nuxt.com/"
                  class="hover:underline"
                  target="_blank"
                  >Nuxt 3</a
                >
              </li>
              <li>
                <a href="https://tailwindcss.com/" class="hover:underline"
                  >Tailwind CSS</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">
              Me siga
            </h2>
            <ul class="font-medium text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a
                  href="https://github.com/MateusViniMelo"
                  target="_blank"
                  class="hover:underline"
                  >Github</a
                >
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mateus-melo-55bb55193/"
                  target="_blank"
                  class="hover:underline"
                  >Linkedin</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-700 sm:mx-auto lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center"
          >© 2024 - {{ new Date().getFullYear() }}
          <span class="hover:underline">Mateus</span>. All Rights
          Reserved.</span
        >
        <div class="flex mt-4 sm:justify-center sm:mt-0">
          <a
            href="https://github.com/MateusViniMelo"
            target="_blank"
            class="text-gray-500 hover:text-white ms-5"
          >
            <Icon name="mdi:github" :ssr="true" size="18" />

            <span class="sr-only">Conta GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mateus-melo-55bb55193/"
            target="_blank"
            class="text-gray-500 hover:text-white ms-5"
          >
            <Icon name="mdi:linkedin" :ssr="true" size="18" />

            <span class="sr-only">Conta Linkedin</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
