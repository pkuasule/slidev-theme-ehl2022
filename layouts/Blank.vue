<template>
  <div class="bg-snow slidev-layout h-full w-full Blank">
    <div class="my-auto">
      <slot />
      <footer 
      class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-gray-300 grid grid-cols-2 gap-4">
        <ehl-logo-secondary />
        <div class="flex justify-end text-xs text-gray">
          <span class="opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage }}
        </div>
      </footer>
    </div>
  </div>
</template>
