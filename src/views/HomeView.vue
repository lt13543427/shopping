<script>

</script>

<template>
  <div class="title-div mt-5 ml-3 mb-5 flex">
    <h1 class="text-3xl font-bold">商品列表</h1>
  </div>
    <div class="flex flex-wrap w-11/12 m-auto gap-4 justify-center">
      <div class="w-1/6 min-w-[150px] min-h-[500px] flex flex-col rounded-xl border overflow-hidden ">
        <img src="https://fakeimg.pl/300/">
        <div class="md-5">
          <h2 class="my-4">Bytecard</h2>
          <p class="my-4 break-words">Immunization not carried out because of caregiver refusal</p>
          <p class="my-5">價格: 954</p>
        </div>
        <div class="flex-grow"></div>
        <div class="flex">
          <div>數量：</div>
          <div class="flex h-[35px]">
            <button class="w-1/4 border rounded-l-xl">-</button>
            <input type="number" class="w-2/4 border text-center" value="1">
            <button class="w-1/4 border rounded-r-xl">+</button>
          </div>
        </div>
        <div class="text-center bg-slate-500 text-white mt-3"><i class="fa-solid fa-cart-shopping relative"></i>加入購物車</div>
      </div>
    </div>
</template>
<style scoped>
  
</style>
