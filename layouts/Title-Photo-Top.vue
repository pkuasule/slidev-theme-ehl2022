<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import { defineProps } from "vue";

const props = defineProps({
  picBG: {
    type: String,
    required: false,
    default: 'https://source.unsplash.com/collection/94734566/1920x1080',
  },
  background: {
    // random image from a curated Unsplash collection by Anthony
    default: 'https://source.unsplash.com/collection/94734566/1920x1080',
  },
});
</script>

<template>

  <div class="slidev-layout h-full w-full Title-Photo-Top primaryPage static p-0">

    <img class="w-full h-screen-100 object-cover object-center z-0" :src="picBG">
    
    <div class="my-auto px-12 pt-4">
      <slot />
    </div>

    <footer 
      class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-snow border-opacity-20 grid grid-cols-2 gap-4">
      <ehl-logo-snow />
      <div class="flex justify-end text-xs text-snow">
        <span class="opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage }} 
      </div>
    </footer>

  </div>

</template>