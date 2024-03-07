<script>
import { usershopCart } from "@/stores/shoppingCart";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(usershopCart, ["checkedData", "guestData"]),
  },

  methods: {
    ...mapActions(usershopCart, ["resetCartData"]),
  },
};
</script>
<template>
  <div class="car-page">
    <div class="title mt-5 ml-3 mb-5 flex">
      <h1 class="text-3xl font-bold">完成購買</h1>
    </div>
    <div class="table-container mb-6 px-5">
      <div class="grid-table">
        <div class="grid-thead">
          <div class="grid-top grid-cols-4 grid border-y font-bold gap-x-3">
            <div class="grid-th text-center">商品圖片</div>
            <div class="grid-th text-center">商品名稱</div>
            <div class="grid-th text-center">訂購數量</div>
            <div class="grid-th text-center">商品單價</div>
          </div>
        </div>
        <div class="grid-thead">
          <div v-for="finishView in checkedData" :key="finishView.id" class="grid-tr grid-cols-4 grid border-b min-h-[80px] gap-x-3">
            <div class="flex justify-center">
              <img :src="finishView.pic" alt="" class="h-[100px] w-[100px]" />
            </div>
            <div class="flex justify-center">{{ finishView.name }}</div>
            <div class="flex justify-center items-center">{{ finishView.quantity }}</div>
            <div class="grid-td flex justify-center items-center">${{ finishView.price }}</div>
          </div>
        </div>
        <div class="grid-tbody mt-3">
          <div class="grid-top grid-cols-6 grid border-y font-bold gap-x-3">
            <div class="grid-th text-center">姓名</div>
            <div class="grid-th text-center">電話</div>
            <div class="grid-th text-center">地址</div>
            <div class="grid-th text-center">配送方式</div>
            <div class="grid-th text-center">信箱</div>
            <div class="grid-th text-center">付款方式</div>
          </div>
        </div>
        <br />
        <div class="grid-thead">
          <div class="grid-tr grid-cols-6 grid border-b min-h-[80px] gap-x-3">
            <div class="flex justify-center items-center">拖椅子</div>
            <div class="flex justify-center items-center">0800092000</div>
            <div class="flex justify-center items-center">花田一路87號</div>
            <div class="grid-td flex justify-center items-center">超商自取</div>
            <div class="grid-td flex justify-center items-center">sss123456@gmail.com</div>
            <div class="grid-td flex justify-center items-center">信用卡付款</div>
          </div>
        </div>
      </div>
      <div class="btn-box w-full flex justify-center items-center bg-slate-500">
        <router-link @click="resetCartData()" to="/" class="w-full text-center">回首頁</router-link>
      </div>
    </div>
  </div>
</template>
<style></style>
