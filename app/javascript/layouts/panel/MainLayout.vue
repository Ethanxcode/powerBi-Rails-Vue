<template>
  <BaseLayout>
    <main class="h-dvh md:mx-[80px] xxl:mx-[160px]">
      <div class="container flex relative w-full max-w-[1600px]">
        <div
          class="min-h-screen pt-[10px] flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50"
        >
          <MainSidebar />
        </div>
        <div class="w-full md:max-w-[1107px] xxl:max-w-[1337px] px-[25px] pb-[60px]">
          <Header />
          <router-view />
        </div>
      </div>

      <!-- <div class="wrapper">
        <div class="section">
          <div class="container"></div>
        </div>
      </div> -->
    </main>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '../BaseLayout.vue';
// import MainMenu from './MainMenu.vue';
import Header from '../Header.vue';
import MainSidebar from './MainSidebar.vue';
</script>
