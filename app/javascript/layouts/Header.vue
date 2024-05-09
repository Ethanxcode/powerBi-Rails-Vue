<template>
  <div class="pt-[25px] pb-[15px]">
    <div class="flex items-center justify-between gap-[40px] mb-[25px]">
      <form class="md:max-w-[620px] xxl:max-w-[800px] w-full bg-[#FAFAFA]">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >Search</label
        >
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <img src="/images/icons/eva_search-outline.svg" alt="Search Icon" />
          </div>
          <input
            id="default-search"
            class="block w-full p-[10px] ps-10 text-sm text-gray-900 bg-gray-50 focus:border-grey-500 dark:-bg--bg-base dark:-placeholder--text-placeholder -placeholder--text-placeholder focus:-outline--border-grey hover:-bg--black-5% -text--text-base rounded-[6px] focus:border-gray-500 border-0"
            placeholder="Search..."
          />
        </div>
      </form>

      <div>
        <label class="relative inline-flex items-center me-5 cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" checked />
          <div
            class="w-[43px] h-[22px] bg-gray-200 rounded-full peer peer-focus:ring-2 ring-2 -ring--black-5% hover:-ring--color-green-3 peer-focus:-ring--color-green-3 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:-border--text-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:-bg--color-green-4 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:-bg--color-green-5"
          ></div>
          <span class="ms-[10px] text-base font-normal -text--color-grey-3">Lightmode</span>
        </label>
      </div>

      <div class="flex gap-[15px] items-center">
        <img
          class="inline-block size-[60px] rounded-full border-none ring-0"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div class="flex text-center items-center flex-col">
          <h3 class="text-black text-base font-bold">Văn Quân</h3>
          <span class="text-black font-normal text-[13px] leading-normal">Super admin</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add your component logic here
</script>
