<template>
  <div class="slidev-layout h-screen w-full Title-Photo-Right p-0">
    <div class="h-full grid grid-cols-2 gap-6">
      <div class="flex flex-col p-12 w-full items-left content-end">
          <slot />
      </div>
      <div class="p-0 h-full w-full">
        <img class="h-full w-full object-cover object-center" :src="picBG">
      </div>
    </div>
  </div>

  <global-top.vue />
  
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  picBG: {
    type: String,
    required: false,
  },
});
</script>