<template>
  <div class="bg-snow slidev-layout h-full w-full Title-6Col-Snow">
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
});
</script>
