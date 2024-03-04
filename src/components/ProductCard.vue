<script>
export default{
  data() {
    return {
      productdataArr: []
    };
  },
  async mounted() {
    try {
      const product = await fetch('../MOCK_DATA.json');
      const data = await product.json();
      this.productdataArr = data;
    } catch (error) {
      console.error(error);
    }
  },
}
</script>

<template>
<div  class="flex flex-wrap w-11/12 m-auto gap-4 justify-center">
    <div v-for="item in productdataArr" :key="item.id" class="w-1/6 min-w-[150px] min-h-[500px] flex flex-col rounded-xl border overflow-hidden ">
      <img src="../img/下載.png" alt="">
      <div class="md-5">
        <h2 class="my-4">{{item.name}}</h2>
        <p class="my-4 break-words">{{ item.description }}</p>
        <p class="my-5">{{ item.price }}</p>
      </div>
      <div class="flex-grow"></div>
      <div class="flex">
        <div>數量：</div>
        <div class="flex h-[35px]">
          <button class="w-1/5 border rounded-l-xl">-</button>
          <input type="number" class="w-2/4 border text-center" value="1">
          <button class="w-1/5 border rounded-r-xl">+</button>
        </div>
      </div>
      <div class="text-center bg-slate-500 text-white mt-3"><i class="fa-solid fa-cart-shopping relative"></i>加入購物車</div>
    </div>
</div>
</template>
