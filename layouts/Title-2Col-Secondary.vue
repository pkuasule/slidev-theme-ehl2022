<template>
  <div class="bg-secondary slidev-layout h-full w-full Title-2Col-Secondary secondaryPage content-page">
    <div class="my-auto">
      <slot />
      <div class="grid grid-cols-2 gap-6">
        <div class="flex flex-col items-left">
          <slot name="C1" />
        </div>
        <div class="flex flex-col items-left">
          <slot name="C2" />
        </div>
      </div>
      <footer 
      class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-gray-300 border-opacity-50 grid grid-cols-2 gap-4">
        <ehl-logo-snow />
        <div class="flex justify-end text-xs">
          <span class="text-snow opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span><span text-snow>{{ $slidev.nav.currentPage }}</span>
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
});
</script>
