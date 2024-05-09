<template>
  <div
    class="min-h-dvh min-w-dvw bg-cover bg-center flex justify-center items-center"
    :style="`background-image: url('/images/auth.png')`"
  >
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div
      class="relative z-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto py-20 gap-4 p-4 text-white"
    >
      <h1 class="text-5xl font-bold text-white">Datawarehouse</h1>
      <p class="py-6 text-xl font-semibold">You are visiting the {{ pageName }} page!</p>
      <router-link to="/login">
        <button
          class="rounded-[32px] w-[304px] flex justify-center text-white items-center gap-[10px] py-[15px] min-w-[106px] h-full max-h-[55px] px-[20px] hover:opacity-80 hover:shadow-md drop-shadow-md bg-gradient-to-r -from--brand-01 -to--color-orange"
        >
          Đăng nhập
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
const pageName = 'Index';
</script>
