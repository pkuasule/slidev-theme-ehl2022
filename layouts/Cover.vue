<template>
  <div class="slidev-layout h-full w-full Cover">
    <div class="my-auto border-t border-secondary h-full w-full grid content-center">
      <slot />
      <br><br><br><br><br><br>
      <quality-assurance class="absolute fill-secondary top-25 right-40" width="120" />
      <committed-to-service-excellence class="absolute fill-snow top-10 right-10" height="150" width="150"/>
    </div>
  </div>
</template>
