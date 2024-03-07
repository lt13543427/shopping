<script>
import { usershopCart } from "@/stores/shoppingCart";
import { mapState, mapActions } from "pinia";
export default {
  computed: {
    ...mapState(usershopCart, ["checkedData", "shopCartData", "totalPrice", "totalQuantity", "guestData"]),
  },

  methods: {
    ...mapActions(usershopCart, ["addCart", "getTotalQuantity", "getTotalPrice", "addCheckData"]),

    checkFormInput() {
      if (this.guestData.name === "" || this.guestData.phone === "" || this.guestData.email === "" || this.guestData.address === "" || this.guestData.payment === "" || this.guestData.pickup === "") {
        alert("請輸入完整資料");
      } else {
        this.$router.push("/fromView");
      }
    },

    checkFormInput2() {
      if (this.shopCartData.name !== "" || this.shopCartData.phone !== "" || this.shopCartData.email !== "" || this.shopCartData.address !== "" || this.shopCartData.payment !== "" || this.shopCartData.pickup !== "") {
        alert("已送出訂單");
      }
    },
  },
};
</script>

<template>
  <div class="form-page">
    <div class="title mt-5 ml-3 mb-5 flex">
      <h1 class="text-3xl font-bold">購買確認及填寫資訊</h1>
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
        <div class="grid-tbody">
          <div v-for="formView in checkedData" :key="formView.id" class="grid-tr grid-cols-4 grid border-b min-h-[80px] gap-x-3">
            <div class="flex justify-center">
              <img :src="formView.pic" alt="" class="h-[100px] w-[100px]" />
            </div>
            <div class="flex justify-center items-center">{{ formView.name }}</div>
            <div class="flex justify-center items-center">{{ formView.quantity }}</div>
            <div class="grid-td flex justify-center items-center">{{ formView.price }}</div>
          </div>
        </div>
      </div>
    </div>
    <form action="">
      <div class="mb-6 px-5">
        <label for="name">姓名</label>
        <input v-model="guestData.name" type="text" id="name" class="input-text" />
      </div>
      <div class="mb-6 px-5">
        <label for="phone">電話</label>
        <input v-model="guestData.phone" type="text" id="phone" class="input-text" />
      </div>
      <div class="mb-6 px-5">
        <label for="name">地址</label>
        <input v-model="guestData.address" type="text" id="name" class="input-text" />
      </div>
      <div class="mb-6 px-5">
        <label for="email">信箱</label>
        <input v-model="guestData.email" type="text" id="email" class="input-text" />
      </div>
      <div class="mb-6 px-5">
        <label for="payment-method">付款方式</label>
        <div class="flex gap-5">
          <div class="flex items-center">
            <input v-model="guestData.payment" type="radio" id="paymentMethod1" name="paymentMethod" required value="信用卡" />
            <label for="paymentMethod1">信用卡</label>
          </div>
          <div class="flex items-center">
            <input v-model="guestData.pickup" type="radio" id="paymentMethod2" name="paymentMethod" required value="貨到付款" />
            <label for="paymentMethod2">貨到付款</label>
          </div>
        </div>
      </div>
      <div class="mb-6 px-5">
        <label for="name">運送方式</label>
        <div class="flex gap-5">
          <div class="flex items-center">
            <input type="radio" id="Pick-up1" name="Pick-up" required value="宅配" />
            <label for="Pick-up1">宅配</label>
          </div>
          <div class="flex items-center">
            <input type="radio" id="Pick-up2" name="Pick-up" required value="超商取貨" />
            <label for="Pick-up2">超商取貨</label>
          </div>
        </div>
      </div>
      <div class="flex justify-end flex-wrap mb-5"></div>
      <div class="w-full flex justify-between"></div>
    </form>
    <div class="flex justify-end flex-wrap mr-3">
      <h2 class="text-2xl text-end font-bold w-full">商品數量:{{ totalQuantity }}</h2>
      <h2 class="text-2xl text-end font-bold w-full">商品總金額:${{ totalPrice }}</h2>
    </div>
    <div class="flex justify-between gap-4 ml-3 mr-3">
      <div class="flex justify-center items-center bg-slate-500 text-white rounded-md px-4 py-1 cursor-pointer md:p-0">
        <span><RouterLink to="/">回上頁繼續購買</RouterLink></span>
      </div>
      <div class="flex justify-center items-center bg-slate-500 text-white rounded-md px-4 py-1 cursor-pointer md:p-0">
        <span><RouterLink @click="checkFormInput()" to="/finishView">確認購買</RouterLink></span>
      </div>
    </div>
  </div>
</template>
<style>
.input-text {
  @apply w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500;
}
</style>
