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
    </div>
    <footer 
      class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-snow border-opacity-20 grid grid-cols-2 gap-4">
        <ehl-logo-snow />
        <div class="flex justify-end">
          <p class="font-thin text-snow opacity-25 text-xs">EHL Corporate Training for {{ $slidev.configs.client }} </p>
        </div>
    </footer>
  </div>
</template>
