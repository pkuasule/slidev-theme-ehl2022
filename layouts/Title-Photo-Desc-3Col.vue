<template>
  <div class="bg-snow slidev-layout h-full w-full Title-Photo-Desc-3Col content-page">
    <div class="my-auto">
      <slot />
      <div class="grid grid-cols-3 gap-6">
        <div class="flex flex-col items-left">
          <img class="w-full max-h-50 object-cover object-center mt-4 bg-shade" :src="pic1">
          <slot name="C1" />
        </div>
        <div class="flex flex-col items-left">
          <img class="w-full max-h-50 object-cover object-center mt-4 bg-shade" :src="pic2">
          <slot name="C2" />
        </div>
        <div class="flex flex-col items-left">
          <img class="w-full max-h-50 object-cover object-center mt-4 bg-shade" :src="pic3">
          <slot name="C3" />
        </div>
      </div>
      <footer 
      class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-gray-300 grid grid-cols-2 gap-4">
        <ehl-logo-secondary />
        <div class="flex justify-end text-xs text-gray">
          <span class="opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage }}
        </div>
      </footer>
    </div>
  </div>  
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  pic1: {
    type: String,
    required: false,
  },
  pic2: {
    type: String,
    required: false,
  },
  pic3: {
    type: String,
    required: false,
  },
  pic4: {
    type: String,
    required: false,
  },
  pic5: {
    type: String,
    required: false,
  },
  pic6: {
    type: String,
    required: false,
  },
});
</script>
