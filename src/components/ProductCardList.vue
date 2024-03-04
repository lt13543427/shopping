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
 <div class="table-container mb-6 px-5">
    <div v-for="item in productdataArr" :key="item.id" class="grid-table">
        <div class="grid-thead">
            <div class=" grid-top grid-cols-6 grid border-y font-bold  gap-x-3">
                <div class="grid-th text-center">商品圖片</div>
                <div class="grid-th text-center">商品名稱</div>
                <div class="grid-th">產品描述</div>
                <div class="grid-th text-center">價錢</div>
                <div class="grid-th opacity-0"></div>
            </div>
        </div>
        <div class="grid-tbody">
            <div class="grid-tr grid-cols-6 grid  border-b  min-h-[80px] gap-x-3 ">
                <div class="flex justify-center items-center">
                    <img src="../img/下載.png" alt="" class="h-[100px] w-[100px]">
                </div>
                <div class="flex justify-center items-center">
                    <h2 class="my-4">{{item.name}}</h2>
                </div>
                <div class="flex justify-center items-center">
                    <p class="my-4 break-words">{{ item.description }}</p>
                </div>
                <div class="flex justify-center">
                    <p class="my-5">{{ item.price }}</p>
                </div>
                <div class="grid-td flex justify-center items-center">
                    <div class="flex flex-col">
                        <div class="flex h-[35px]">
                        <button class="w-1/5 border rounded-l-xl">-</button>
                        <input type="number" class="w-2/4 border text-center" value="1">
                        <button class="w-1/5 border rounded-r-xl">+</button>
                        </div>
                        <div class="text-center bg-slate-500 text-white mt-3 w-[180px]">
                            <i class="fa-solid fa-cart-shopping relative"></i>加入購物車
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>