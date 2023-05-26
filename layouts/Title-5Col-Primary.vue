<template>
  <div class="slidev-layout h-full w-full Title-5Col-Primary primaryPage">
    <div class="my-auto">
      <slot />
      <div class="grid grid-cols-5 gap-6">
        <div class="flex flex-col items-left">
          <slot name="C1" />
        </div>
        <div class="flex flex-col items-left">
          <slot name="C2" />
        </div>
        <div class="flex flex-col items-left">
          <slot name="C3" />
        </div>
        <div class="flex flex-col items-left">
          <slot name="C4" />
        </div>
        <div class="flex flex-col items-left">
          <slot name="C5" />
        </div>
      </div>
    </div>
  </div>

  <footer 
      class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-gray-300 border-opacity-50 grid grid-cols-2 gap-4">
      <ehl-logo-snow />
      <div class="flex justify-end text-xs">
        <span class="text-snow opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span><span class="text-snow">{{ $slidev.nav.currentPage - 1}}</span>
      </div>
  </footer>
  
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
});
</script>
