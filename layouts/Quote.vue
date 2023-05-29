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
  <div class="slidev-layout h-full w-full Quote p-0 static">
    <div class="absolute left-0 p-16 pl-16 mt-10 mx-0 w-150 h-150 z-10 bg-primary">
      <mark-quote class="fill-snow" width="50"/>
      <slot />
    </div>
    <img class="w-full h-full object-cover object-center" :src="picBG">
    <footer 
      class="absolute text-sm bottom-2 left-12 right-12 py-2 grid grid-cols-2 gap-4">
      <ehl-logo-snow />
      <div class="flex justify-end text-xs text-snow">
        <span class="opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage - 1}}
      </div>
    </footer>
  </div>
</template>

