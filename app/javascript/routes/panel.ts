import { RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';
import AboutPage from '@/pages/website/AboutPage.vue';
const Index = () => import('@/pages/panel/IndexPage.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    components: {
      default: Index,
    },
  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: AboutPage,
    },
  },
  {
    path: '/data-center',
    name: 'data-center',
    components: {
      default: AboutPage,
    },
  },
  {
    path: '/logout',
    name: 'logout',
    components: {
      default: Index,
    },
    beforeEnter: () => {
      const authStore = useAuthStore();
      authStore.logout();
    },
  },
  {
    path: '/users',
    name: 'users',
    components: {
      default: AboutPage,
    },
  },
  {
    path: '/settings',
    name: 'settings',
    components: {
      default: AboutPage,
    },
  },
  {
    path: '/sync-seasofts',
    name: 'sync-seasofts',
    components: {
      default: AboutPage,
    },
  },
  {
    path: '/sync-dms',
    name: 'sync-dms',
    components: {
      default: AboutPage,
    },
  },
  {
    path: '/sync-files',
    name: 'sync-files',
    components: {
      default: AboutPage,
    },
  },
];

export default routes;
