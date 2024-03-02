<script>
// import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header class="w-full h-[60px] bg-slate-500 flex justify-between">
      <nav class="w-[200px] h-full flex items-center gap-5 ml-3">
        <RouterLink class="text-2xl font-bold" to="/">shoppin</RouterLink>
      </nav>
      <div class="cart-div flex items-center mr-3">
        <RouterLink to="/CarView">
          <i class="fa-solid fa-cart-shopping"></i>
        </RouterLink>
      </div>
  </header>
  <RouterView/>
</template>

<style>
</style>