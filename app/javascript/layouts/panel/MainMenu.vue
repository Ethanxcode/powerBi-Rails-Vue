<template>
  <ul class="navbar-nav">
    <li class="nav-item" @click="tonast">Profile</li>
    <li class="nav-item" @click="logout">Logout</li>
  </ul>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store';
import { Toastify } from '@/utils/Toastify';
const authStore = useAuthStore();

// const menuItems = [
//   { title: 'Index', routeName: 'index' },
//   { title: 'About', routeName: 'about' },
// ];

const tonast = () => {
  Toastify('fasfasdfsadfasdfasd', 200);
};
const logout = () => {
  authStore.logout();
};
</script>
