<template>
  <button
    :class="[
      classes
        ? classes
        : 'flex justify-center text-white items-center gap-[10px] py-[15px] min-w-[106px] h-full max-h-[55px] px-[20px] rounded-[4px] hover:opacity-80 hover:shadow-md drop-shadow-md',
      color ? color : '',
      hoverColor ? `hover:${hoverColor}` : `hover:${color}`,
    ]"
  >
    <img v-if="icon" :src="icon" class="" />
    <span class="text-base font-bold -text--text-white">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    hoverColor: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
