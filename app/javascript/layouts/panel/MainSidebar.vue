<template>
  <nav class="flex flex-col w-[15.75rem] flex-shrink-0 bg-white h-full gap-[25px] p-4">
    <a href="index" class="flex items-center justify-center gap-[11.15px] h-[68px]">
      <img src="/images/logo/daithuanLogo.png" alt="" />
      <img src="/images/logo/daithuanText.png" alt="" />
    </a>

    <div class="overflow-hidden flex-grow">
      <div
        v-for="section in menuItems"
        :key="section.title"
        class="px-3 py-[0.625rem] rounded-[8px]"
      >
        <div class="flex flex-row items-start self-stretch">
          <span class="text-sm font-normal -text--black-40%">{{ section.title }}</span>
        </div>

        <ul class="sidebar_lists flex flex-col gap-[5px]">
          <RouterLink
            v-for="item in section.items"
            :key="item.path"
            :to="{ name: item.path }"
            active-class="-bg--black-5%"
            class="focus:outline-none rounded-[6px] gap-[4px] flex-wrap self-stretch hover:-bg--black-5% px-2 py-2.5 text-black text-sm text-normal hover:text-gray-800 border-transparent"
          >
            <li>
              <div class="inline-flex justify-center items-center">
                <img :src="`/images/${item.icon}`" class="size-[20px]" alt="" />
                <span class="ml-[0.625rem] font-normal text-sm tracking-wide truncate">{{
                  item.name
                }}</span>
              </div>
            </li>
          </RouterLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const menuItems = [
  {
    items: [
      { path: 'index', icon: 'icons/iconamoon_home-light.svg', name: 'Tổng quan' },
      {
        path: 'data-center',
        icon: 'icons/fluent_data-pie-24-regular.svg',
        name: 'Trung tâm dữ liệu',
      },
      { path: 'users', icon: 'icons/solar_user-outline.svg', name: 'Quản lý người dùng' },
      {
        path: 'settings',
        icon: 'icons/ant-design_setting-outlined.svg',
        name: 'Cài đặt & Phân quyền',
      },
      {
        path: 'logout',
        icon: 'icons/fluent_data-pie-24-regular.svg',
        name: 'Đăng xuất',
      },
    ],
  },
  {
    title: 'Hệ thống đồng bộ dữ liệu',
    items: [
      {
        path: 'sync-seasofts',
        icon: 'icons/carbon_cloud-data-ops.svg',
        name: 'Đồng bộ từ Seasoft',
      },
      {
        path: 'sync-dms',
        icon: 'icons/material-symbols-light_data-table-outline-sharp.svg',
        name: 'Đồng bộ từ DMS',
      },
      { path: 'sync-files', icon: 'icons/pepicons-pencil_file.svg', name: 'Đồng bộ từ file' },
    ],
  },
];
</script>
