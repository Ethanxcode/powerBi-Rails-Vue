<template>
  <div class="pt-[25px]">
    <!-- Section header 1 -->
    <div class="flex justify-between gap-[25px] items-center flex-nowrap mb-[25px]">
      <h2
        class="text-2xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r -from--brand-01 -to--color-orange"
      >
        Đồng bộ từ Seasoft
      </h2>
      <p class="text-base italic font-light">(Last sync at 12:00:00 pm - 01/12/2023)</p>
    </div>
  </div>
</template>

<script>
import { Toastify } from '@/utils/Toastify';

Toastify('Welcome to the panel', 200);
</script>
