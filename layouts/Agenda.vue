<template>
  <div class="slidev-layout  h-full w-full Agenda-Letter flex flex-row p-0">
    <div class="basis-3/10 p-12 agenda-left pt-14 bg-primary" >
        <slot name="left"/>
      </div>
    <div class="basis-7/10 p-12 pr-40 items-start agenda-right">
      <slot class="text-sm" />
    </div>
  </div>
</template>
