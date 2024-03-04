<script>
import ProductCard from '@/components/ProductCard.vue';
import ProductCardList from '@/components/ProductCardList.vue';

export default {
  data() {
    return {
      currentView: 'table',
      card: {},
    };
  },
  methods: {
    toggleView(view) {
      this.currentView = view;
    },
  },
  components: {
    ProductCard,
    ProductCardList,
  },
}
</script>

<template>
  <div>
    <div class="title-div mt-5 ml-3 mb-5 flex">
      <h1 class="text-3xl font-bold">商品列表</h1>
    </div>
    <div class="flex gap-3 justify-end px-3">
      <i @click="toggleView('table')" class="fa-solid fa-table-cells-large"></i>
      <i @click="toggleView('list')" class="fa-solid fa-list"></i>
    </div>
    <div class="div">
      <ProductCard v-if="currentView === 'table'" v-model="card"></ProductCard>
      <ProductCardList v-if="currentView === 'list'" v-model="card"></ProductCardList>
    </div>
  </div>
</template>

<style scoped>
</style>
