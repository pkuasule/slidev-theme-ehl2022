<template>
  <div bg-snow slidev-layout h-full w-full Blank>
    <div my-auto>
      <slot />
      <footer 
        absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-gray-300 grid grid-cols-2 gap-4>
        <ehl-logo-secondary />
        <div flex justify-end text-xs text-gray>
          <span opacity-25>EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage }}
        </div>
      </footer>
    </div>
  </div>
</template>
