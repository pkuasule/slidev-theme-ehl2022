<template>
    <div v-if="!Tag" class="callout">
      <slot />
    </div>
    <div v-if="!!Tag" class="callout">
      <div class="text-xs text-gray-400 p-0 -mt-1">{{this.Tag}}</div>
      <hr />
      <slot />
    </div>
</template>

<script setup lang="ts">
import { string } from 'prop-types';
import { ref } from 'vue'

const props = defineProps({
  Tag: {
    type: string,
    default: "Note",
    required: false,
  },
})

const counter = ref(props.count)
</script>