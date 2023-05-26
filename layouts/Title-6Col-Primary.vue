<template>
  <div class="slidev-layout h-full w-full Title-6Col-Primary primaryPage">
    <div class="my-auto">
      <slot />
      <div class="grid grid-cols-6 gap-6">
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
        <div class="flex flex-col items-left">
          <slot name="C6" />
        </div>
      </div>
    </div>
  </div>

  <global-top.vue />
  
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
