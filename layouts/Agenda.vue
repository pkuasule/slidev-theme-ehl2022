<template>
  <div class="bg-snow slidev-layout  h-full w-full Agenda-Letter flex flex-row p-0">
    <div class="basis-3/10 p-12 agenda-left pt-14 bg-primary">
        <slot name="left"/>
      </div>
    <div class="basis-7/10 p-12 pr-40 items-start agenda-right">
      <slot class="text-sm" />
    </div>
    <footer 
    class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-gray-300 border-opacity-50 grid grid-cols-2 gap-4">
      <ehl-logo-snow />
      <div class="flex justify-end text-xs">
        <span class="opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage }}
      </div>
    </footer>
  </div>
</template>
