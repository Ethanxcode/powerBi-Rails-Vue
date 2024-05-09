<template>
  <nav class="flex flex-col w-[15.75rem] flex-shrink-0 bg-white h-full gap-[25px] p-4">
    <a href="index" class="flex items-center justify-center gap-[11.15px] h-[68px]">
      <img :src="DaithuanLogo" alt="" />
      <img :src="DaithuanLogoText" alt="" />
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
                <component :is="item.icon" class="size-[20px]" />
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
import { DaithuanLogo, DaithuanLogoText } from '@/assets/images/logo';
import {
  HomeLightIcon,
  DataPieIcon,
  UserOutlineIcon,
  SettingOutlinedIcon,
  CloudDataOpsIcon,
  DataTableOutlineSharpIcon,
  PencilFileIcon,
  LogoutIcon,
} from '@/assets/icons';

const menuItems = [
  {
    items: [
      { path: 'index', icon: HomeLightIcon, name: 'Tổng quan' },
      {
        path: 'data-center',
        icon: DataPieIcon,
        name: 'Trung tâm dữ liệu',
      },
      { path: 'users', icon: UserOutlineIcon, name: 'Quản lý người dùng' },
      {
        path: 'settings',
        icon: SettingOutlinedIcon,
        name: 'Cài đặt & Phân quyền',
      },
      {
        path: 'logout',
        icon: LogoutIcon,
        name: 'Đăng xuất',
      },
    ],
  },
  {
    title: 'Hệ thống đồng bộ dữ liệu',
    items: [
      {
        path: 'sync-seasofts',
        icon: CloudDataOpsIcon,
        name: 'Đồng bộ từ Seasoft',
      },
      {
        path: 'sync-dms',
        icon: DataTableOutlineSharpIcon,
        name: 'Đồng bộ từ DMS',
      },
      { path: 'sync-files', icon: PencilFileIcon, name: 'Đồng bộ từ file' },
    ],
  },
];
</script>
