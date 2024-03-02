<script>
import ProductCard from '@/components/ProductCard.vue';
export default{
  components:{
    ProductCard,
  },
}
</script>
<template>
  <div class="title-div mt-5 ml-3 mb-5 flex">
    <h1 class="text-3xl font-bold">商品列表</h1>
  </div>
  <div class="flex gap-3 justify-end px-3">
      <i class="fa-solid fa-table-cells-large"></i>
      <i class="fa-solid fa-list"></i>
  </div>
  <div class="div">
    <ProductCard></ProductCard>
  </div>
</template>
<style scoped>
  
</style>
