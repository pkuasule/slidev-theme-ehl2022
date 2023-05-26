<template>
  <div class="slidev-layout h-full w-full Title-3Col-Snow">
    <div class="my-auto">
      <slot />
      <div class="grid grid-cols-3 gap-6">
        <div class="flex flex-col items-left">
          <slot name="C1" />
        </div>
        <div class="flex flex-col items-left">
          <slot name="C2" />
        </div>
        <div class="flex flex-col items-left">
          <slot name="C3" />
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
  pic3: {
    type: String,
    required: false,
  },
  pic4: {
    type: String,
    required: false,
  },
  pic5: {
    type: String,
    required: false,
  },
  pic6: {
    type: String,
    required: false,
  },
});
</script>
