<script>
import inputBtnView from "@/components/inputBtnView.vue";
import { usershopCart } from "@/stores/shoppingCart";
import { mapState, mapActions } from "pinia";
export default {
  components: {
    inputBtnView,
  },

  data() {
    return {
      currentView: "table",
      card: {},
      productdataArr: [],
    };
  },

  computed: {
    ...mapState(usershopCart, ["cartData"]),
  },

  async mounted() {
    try {
      const product = await fetch("../MOCK_DATA.json");
      const data = await product.json();
      this.productdataArr = data;
    } catch (error) {
      console.error(error);
    }
  },

  methods: {
    toggleView(view) {
      this.currentView = view;
    },

    ...mapActions(usershopCart, ["addCart"]),
  },
};
</script>

<template>
  <div>
    <div class="title-div mt-5 ml-3 mb-5 flex">
      <h1 class="text-3xl font-bold">商品列表</h1>
    </div>
    <div class="flex gap-3 justify-end px-3 mb-3">
      <i @click="toggleView('table')" class="fa-solid fa-table-cells-large"></i>
      <i @click="toggleView('list')" class="fa-solid fa-list"></i>
    </div>
    <div v-if="currentView === 'table'" class="div">
      <div class="flex flex-wrap w-11/12 m-auto gap-4 justify-center">
        <div v-for="item in productdataArr" :key="item.id" class="w-1/6 min-w-[150px] min-h-[500px] flex flex-col rounded-xl border overflow-hidden">
          <img src="../img/下載.png" alt="" />
          <div class="md-5">
            <h2 class="my-4">商品名稱:{{ item.name }}</h2>
            <p class="my-4 break-words">商品介紹:{{ item.description }}</p>
            <p class="my-5">商品價格:{{ item.price }}</p>
          </div>
          <div class="flex-grow"></div>
          <div class="flex">
            <div>數量：</div>
            <inputBtnView
              @update="
                (newValue) => {
                  item.quantity = newValue;
                }
              "
              :quantity="item.quantity"
            ></inputBtnView>
          </div>
          <button @click="addCart(item)" type="button" class="text-center bg-slate-500 text-white mt-3"><i class="fa-solid fa-cart-shopping relative"></i>加入購物車</button>
        </div>
      </div>
    </div>
    <div v-if="currentView === 'list'" class="table-container mb-6 px-5">
      <div class="grid-table">
        <div class="grid-thead">
          <div class="grid-top grid-cols-6 grid border-y font-bold gap-x-3">
            <div class="grid-th text-center">商品圖片</div>
            <div class="grid-th text-center">商品名稱</div>
            <div class="grid-th">產品描述</div>
            <div class="grid-th text-center">價錢</div>
            <div class="grid-th opacity-0"></div>
          </div>
        </div>
        <div class="grid-tbody">
          <div v-for="item in productdataArr" :key="item.id" class="grid-tr grid-cols-6 grid border-b min-h-[80px] gap-x-3">
            <div class="flex justify-center items-center">
              <img src="../img/下載.png" alt="" class="h-[100px] w-[100px]" />
            </div>
            <div class="flex justify-center items-center">
              <h2 class="my-4">{{ item.name }}</h2>
            </div>
            <div class="flex justify-center items-center">
              <p class="my-4 break-words">{{ item.description }}</p>
            </div>
            <div class="flex justify-center">
              <p class="my-5">{{ item.price }}</p>
            </div>
            <div class="grid-td flex justify-center items-center">
              <div class="flex flex-col">
                <inputBtnView
                  @update="
                    (newValue) => {
                      item.quantity = newValue;
                    }
                  "
                  :quantity="item.quantity"
                ></inputBtnView>
                <button type="button" @click="addCart(item)" class="text-center bg-slate-500 text-white mt-3 w-[180px]"><i class="fa-solid fa-cart-shopping relative"></i>加入購物車</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
