<template>
  <div class="pt-[25px]">
    <!-- Section header 1 -->
    <div class="flex justify-between gap-[25px] items-center flex-nowrap mb-[25px]">
      <h2
        class="text-2xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r -from--brand-01 -to--color-orange"
      >
        {{ pageName }}
      </h2>

      <p class="text-base italic font-light">(Last sync at 12:00:00 pm - 01/12/2023)</p>
      <Button :icon="radixIconUpdate" color="-bg--color-green-4" text="Synchronized" />
      <Button
        :icon="reportBoxPlusOutlineIcon"
        color="-bg--color-blue hover:-bg--color-blue"
        text="Click me"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components';
import { reportBoxPlusOutlineIcon, radixIconUpdate } from '@/assets/icons';
const pageName = 'Tổng quan';
</script>
