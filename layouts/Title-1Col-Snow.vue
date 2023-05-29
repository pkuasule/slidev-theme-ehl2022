<template>
  <div class="slidev-layout h-full w-full Title-1Col-Snow">
    <div class="my-auto">
      <slot />
    </div>
    <footer 
      class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-gray-300 grid grid-cols-2 gap-4">
      <ehl-logo-secondary />
      <div class="flex justify-end text-xs text-gray">
        <span class="opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage - 1}}
      </div>
    </footer>
  </div>
</template>
