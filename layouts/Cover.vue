<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps({
  background: {
    // random image from a curated Unsplash collection by Anthony
    default: 'https://source.unsplash.com/collection/94734566/1920x1080',
  },
})

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout h-full w-full Cover">
    <div class="my-auto border-t border-secondary h-full w-full grid content-center">
      <slot />
      <br><br><br><br><br><br>

      <quality-assurance class="absolute fill-secondary top-25 right-40" width="120" />
      <committed-to-service-excellence class="absolute fill-snow top-10 right-10" height="150" width="150"/>

      <footer 
        class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-gray-300 border-opacity-50 grid grid-cols-2 gap-4">
        <ehl-logo-snow />
        <div class="flex justify-end text-xs">
          <span class="text-snow opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} </span>
        </div>
      </footer>
    </div>
  </div>
</template>
