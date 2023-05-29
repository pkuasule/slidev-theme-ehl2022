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

    <footer 
      v-if="$slidev.nav.currentLayout == 'Title-Photo-Right'"
      class="absolute bottom-2 left-12 right-12 grid grid-cols-2 gap-16">
        <div class="py-2 border-t-1 border-gray-300">
          <ehl-logo-secondary />
        </div>
        <div class="flex justify-end text-xs text-snow pt-2 border-t-1 border-snow border-opacity-0">
          <span class="opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage - 1}} 
        </div>
    </footer>

  </div>

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