<script>
import { usershopCart } from "@/stores/shoppingCart";
import { mapState, mapActions } from "pinia";
import inputBtnView from "@/components/inputBtnView.vue";

export default {
  components: {
    inputBtnView,
  },

  computed: {
    ...mapState(usershopCart, ["cartData", "shopCartData", "totalPrice", "totalQuantity"]),
  },

  methods: {
    ...mapActions(usershopCart, ["addCart", "getTotalQuantity", "getTotalPrice"]),
  },
};
</script>

<template>
  <div class="car-page">
    <div class="title mt-5 ml-3 mb-5 flex">
      <h1 class="text-3xl font-bold">購物車確認</h1>
    </div>
    <div class="table-container mb-6 px-5">
      <div class="grid-table">
        <div class="grid-thead">
          <div class="grid-top grid-cols-6 grid border-y font-bold gap-x-3">
            <div class="grid-th text-center">商品確認</div>
            <div class="grid-th text-center">商品圖片</div>
            <div class="grid-th text-center">商品名稱</div>
            <div class="grid-th text-center">單價</div>
            <div class="grid-th opacity-0 text-center">編輯數量</div>
          </div>
        </div>
        <div class="grid-tbody">
          <div v-for="cartView in shopCartData" :key="cartView.id" class="grid-tr grid-cols-6 grid border-b min-h-[80px] gap-x-3">
            <div class="flex justify-center">
              <input v-model="item.checked" type="checkbox" />
            </div>
            <div class="flex justify-center">
              <img :src="cartView.pic" alt="" class="h-[100px] w-[100px]" />
            </div>
            <div class="flex justify-center items-center">{{ cartView.name }}</div>
            <div class="grid-td flex justify-center items-center">${{ cartView.price }}</div>
            <div class="grid-td flex justify-center items-center">
              <inputBtnView
                @update="
                  (newValue) => {
                    cartView.quantity = newValue;
                  }
                "
                :quantity="cartView.quantity"
              ></inputBtnView>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end flex-wrap mr-3">
      <h2 class="text-2xl text-end font-bold w-full">商品數量:{{ totalQuantity }}</h2>
      <h2 class="text-2xl text-end font-bold w-full">商品總金額:${{ totalPrice }}</h2>
      {{ console.log("Total Quantity:", getTotalQuantity()) }}
      {{ console.log("Total Price:", getTotalPrice()) }}
      {{ console.log(shopCartData) }}
    </div>
    <div class="flex justify-between gap-4 ml-3 mr-3">
      <div class="flex justify-center items-center bg-slate-500 text-white rounded-md px-4 py-1 cursor-pointer md:p-0">
        <span><RouterLink to="/">回上頁繼續購買</RouterLink></span>
      </div>
      <div class="flex justify-center items-center bg-slate-500 text-white rounded-md px-4 py-1 cursor-pointer md:p-0">
        <span><RouterLink to="/formView">確認購買</RouterLink></span>
      </div>
    </div>
  </div>
</template>

<style></style>
