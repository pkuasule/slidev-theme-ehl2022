<template>
  <div class="slidev-layout  h-full w-full Agenda-Letter flex flex-row p-0">
    <div class="basis-3/10 p-12 agenda-left pt-14 bg-primary" >
        <slot name="left"/>
      </div>
    <div class="basis-7/10 p-12 pr-40 items-start agenda-right">
      <h3 class="secondaryText mb-8">尊敬的{{ $slidev.configs.client_contact }}{{ $slidev.configs.prefix }},</h3>
      <slot class="text-sm" />
      <br>
      <signature-baozong />
    </div>
  </div>
  
</template>