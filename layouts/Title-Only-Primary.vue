<template>
  <div class="slidev-layout h-full w-full Title-Only-Blue primaryPage">
    <div class="my-auto">
      <slot />
    </div>
    <footer 
      class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-gray-300 border-opacity-50 grid grid-cols-2 gap-4">
      <ehl-logo-snow />
      <div class="flex justify-end text-xs">
        <span class="text-snow opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span><span class="text-snow">{{ $slidev.nav.currentPage - 1}}</span>
      </div>
    </footer>
  </div>
</template>
