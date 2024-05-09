<template>
  <div
    v-if="!loggedIn"
    class="hidden h-dvh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
  >
    <div class="relative hidden h-full flex-col bg-muted text-white lg:flex dark:border-r">
      <img
        src="/images/auth.png"
        alt="Authentication"
        class="absolute inset-0 b h-full object-cover"
      />

      <div class="absolute w-full text-center z-20 bottom-10">
        <footer class="text-lg font-light tracking-widest -text--bg-base">
          Powered by <span>Tiên Phong CDS</span> | Contact:
          <a href="mailto:Support@tienphongcorp.com">Support@tienphongcorp.com</a>
        </footer>
      </div>
    </div>

    <div class="lg:p-8">
      <!-- <router-link to="/login" class="absolute right-4 top-4 md:right-8 md:top-8">
        Login
      </router-link> -->
      <div class="flex w-full flex-col justify-center space-y-6 sm:w-[568px]">
        <div class="flex flex-col space-y-2">
          <a href="index" class="flex items-center justify-center gap-[11.15px] h-[68px]">
            <img src="/images/logo/daithuanLogo.png" class="inset-0 b h-full object-cover" alt="" />
            <img src="/images/logo/daithuanText.png" alt="" />
          </a>
        </div>
        <form @submit="onSubmit">
          <div class="pb-[18px] bg-white p-4 rounded-lg w-full">
            <div class="relative mt-2 text-gray-500">
              <label
                for="email"
                class="absolute inset-y-0 flex items-center justify-center w-[60px] border-r border-solid border-r-[#CBD5E1]"
              >
                <img src="/images/icons/phoneIcon.svg" class="size-[18px]" alt="Phone Icon" />
              </label>
              <input
                v-model="email"
                name="email"
                type="email"
                placeholder="Mã quản trị viên hoặc mã nhân viên"
                class="w-full pl-[4.5rem] pr-3 h-[56px] py-2 appearance-none bg-transparent outline-none border border-[#CBD5E1] focus:border-slate-600 shadow-sm rounded-lg"
              />
            </div>
            <span class="text-sm text-red-600 float-right">{{ errors.email }}</span>
          </div>

          <div class="pb-[18px] bg-white p-4 rounded-lg w-full">
            <div class="relative mt-2 text-gray-500">
              <label
                for="password"
                class="absolute inset-y-0 flex items-center justify-center w-[60px] border-r border-solid border-r-[#CBD5E1]"
              >
                <img src="/images/icons/lockIcon.svg" class="size-[18px]" alt="Lock Icon" />
              </label>
              <input
                v-model="password"
                name="password"
                type="password"
                placeholder="Mật khẩu"
                class="w-full pl-[4.5rem] pr-3 h-[56px] py-2 appearance-none bg-transparent outline-none border border-[#CBD5E1] focus:border-slate-600 shadow-sm rounded-lg"
              />
            </div>
            <span class="text-sm text-red-600 float-right">{{ errors.password }}</span>
          </div>

          <div class="field pb-25">
            <button
              class="rounded-[32px] w-[304px] flex justify-center text-white items-center gap-[10px] py-[15px] min-w-[106px] h-full max-h-[55px] px-[20px] hover:opacity-80 hover:shadow-md drop-shadow-md bg-gradient-to-r -from--brand-01 -to--color-orange"
            >
              Đăng nhập
            </button>
          </div>
        </form>
        <p class="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our
          <router-link
            class="underline underline-offset-4 hover:text-primary"
            :to="{ name: 'signup' }"
            >Terms of Service</router-link
          >
          and
          <router-link
            :to="{ name: 'signup' }"
            class="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </router-link>
          .
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useField, useForm } from 'vee-validate';
import { useAuthStore } from '@/stores/auth.store';
import { IUserLogin } from '@/types/general';
import { Toastify } from '@/utils/Toastify';
import { validationSchema } from '@/validators/auth.validator';
const authStore = useAuthStore();
const loggedIn = computed(() => authStore.isAuthenticated);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: email } = useField('email');
const { value: password } = useField('password');

const onSubmit = handleSubmit((values: IUserLogin) => {
  authStore
    .login(values)
    .then(() => {
      Toastify('Redirecting to panel', 200);
      setTimeout(() => (window.location.href = '/panel/'), 500);
    })
    .catch((error) => {
      Toastify(error, 400);
    });
});

onMounted(() => {
  if (loggedIn.value) {
    window.location.href = '/panel/';
  }
});
</script>
