<template>
  <div class="bg-primary slidev-layout h-full w-full End-Page-Primary primaryPage relative">
    <div class="my-auto mt-30 border-y border-secondary p-5">
      <slot />
      <div class="grid grid-cols-3 gap-4">
        <div class="flex flex-col items-left border-r border-secondary p-4">
          <br>
          <h2>SWITZERLAND</h2><br><br>
          <p>Route de Cojonnex 18
            <br>1000 Lausanne 25
            <br>Switzerland
            <br>
            <br>Tel: +41 (0) 21 785 13 92
            <br>ehladvisory@ehl.ch
          </p>
        </div>
        <div class="flex flex-col items-left border-r border-secondary p-4">
          <br>
          <h2>中国</h2><br>
          <h3>北京</h3>
          <p>朝阳区建国⻔外⼤街1号国贸写字楼1座
            <br>10层02-05室
            <br>邮编 100004
            <br>+86 10 6505 7997
          </p>
          <br>
          <h3>上海</h3>
          <p>⻓宁区红宝⽯路188号古北SOHO A3007
            <br>邮编 201103
            <br>+86  21 6095 8912
          </p>
        </div>
        <div class="flex flex-col items-left p-4">
          <br>
          <h2>INDIA</h2><br><br>
          <p>EHL Advisory Services LLP
            <br>WeWork, Galaxy Hotel
            <br>Office Number 02-112
            <br>Behind 32nd Milestone, Sector 15
            <br>Gurugram, Delhi-NCR 122001, India
            <br>
            <br>Tel: +91-124-5025180
          </p>
        </div>
      </div>
    </div>
    <ehl-advisory-services class="absolute top-18 left-0 right-0 mx-auto fill-snow w-40"/>
    <tailor-made class="absolute fill-secondary right-45 top-18 w-35"/>
    <quality-assurance class="absolute fill-secondary top-12 right-12 w-40"/>

  </div>
</template>