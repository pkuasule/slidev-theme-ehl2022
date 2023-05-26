<!-- global-bottom.vue -->
<template>
<!-- On Cover, display white logo -->
  <footer 
    v-if="$slidev.nav.currentLayout == 'Cover'"
    class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-snow border-opacity-20 grid grid-cols-2 gap-4">
      <ehl-logo-snow />
      <div class="flex justify-end">
        <p class="font-thin text-snow opacity-25 text-xs">EHL Corporate Training for {{ $slidev.configs.client }} </p>
      </div>
  </footer>
<!-- On blue or gold suffix, display white logo -->
  <footer 
    v-if="($slidev.nav.currentLayout.slice(-7) == 'Primary' && $slidev.nav.currentLayout !== 'End-Page-Primary') || $slidev.nav.currentLayout.slice(-9) == 'Secondary'"
    class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-gray-300 border-opacity-50 grid grid-cols-2 gap-4">
    <ehl-logo-snow />
    <div class="flex justify-end text-xs">
      <span class="text-snow opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span><span class="text-snow">{{ $slidev.nav.currentPage - 1}}</span>
    </div>
  </footer>
<!-- Agenda -->
<footer 
    v-if="$slidev.nav.currentLayout.slice(0,6) == 'Agenda'"
    class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-gray-300 border-opacity-50 grid grid-cols-2 gap-4">
    <ehl-logo-snow />
    <div class="flex justify-end text-xs">
      <span class="opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage - 1}}
    </div>
  </footer>
<!-- On other pages, display gold logo -->
  <footer 
    v-if="$slidev.nav.currentLayout.slice(-7) !== 'Primary' && $slidev.nav.currentLayout !== 'Cover' && $slidev.nav.currentLayout.slice(-4) !== 'Secondary' && $slidev.nav.currentLayout !== 'end' && $slidev.nav.currentLayout !== 'Quote' && $slidev.nav.currentLayout !== 'Title-Photo-Top' && $slidev.nav.currentLayout !== 'Title-Photo-Right' && $slidev.nav.currentLayout.slice(0,6) !== 'Agenda'" 
    class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-gray-300 grid grid-cols-2 gap-4">
    <ehl-logo-secondary />
    <div class="flex justify-end text-xs text-gray">
      <span class="opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage - 1}}
    </div>
  </footer>
<!-- On quote page, display white logo -->
  <footer 
    v-if="$slidev.nav.currentLayout == 'Quote'"
    class="absolute text-sm bottom-2 left-12 right-12 py-2 grid grid-cols-2 gap-4">
    <ehl-logo-snow />
    <div class="flex justify-end text-xs text-snow">
      <span class="opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage - 1}}
    </div>
  </footer>
<!-- On Tilte-Photo-Top page, display white logo -->
  <footer 
    v-if="$slidev.nav.currentLayout == 'Title-Photo-Top'"
    class="absolute text-sm bottom-2 left-12 right-12 py-2 border-t-1 border-snow border-opacity-20 grid grid-cols-2 gap-4">
    <ehl-logo-snow />
    <div class="flex justify-end text-xs text-snow">
      <span class="opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage - 1}} 
    </div>
  </footer>
<!-- On Title-Photo-Right page, display gold logo -->
  <footer 
    v-if="$slidev.nav.currentLayout == 'Title-Photo-Right'"
    class="absolute bottom-2 left-12 right-12 grid grid-cols-2 gap-16">
      <div class="py-2 border-t-1 border-gray-300">
        <ehl-logo-secondary />
      </div>
      <div class="flex justify-end text-xs text-snow pt-2 border-t-1 border-snow border-opacity-0">
        <span class="opacity-25">EHL Corporate Training for {{ $slidev.configs.client }} |&nbsp;</span>{{ $slidev.nav.currentPage - 1}} 
      </div>
  </footer>
 </template>