<template>
  <div class="slidev-layout h-full w-full Quote p-0 static">
    <div class="absolute left-0 p-16 pl-16 mt-10 mx-0 w-150 h-150 z-10 bg-primary">
      <mark-quote class="fill-snow" width="50"/>
      <slot />
    </div>
    <img class="w-full h-full object-cover object-center" :src="picBG">
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