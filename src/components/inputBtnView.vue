<script>
export default {
  props: {
    quantity: {
      type: Number,
      default: 1,
    },
  },
  emits: ["update"],
  data() {
    return {};
  },
  methods: {
    add() {
      const addnumber = this.quantity + 1;
      this.$emit("update", addnumber);
    },
    remove() {
      if (this.quantity > 1) {
        const removenumber = this.quantity - 1;
        this.$emit("update", removenumber);
      }
    },
  },
};
</script>

<template>
  <div class="flex grow">
    <button @click="remove()" type="button" class="count-btn rounded-l-full">-</button>
    <label class="border border-gray-400 border-x-0 border-y-1 grow h-[35px] flex justify-center items-center text-xl">
      <input :value="quantity" type="number" @input="(e) => $emit('update', Number(e.target.value))" min="1" class="h-[30px] w-[40px] border-0 p-0 text-center" />
    </label>
    <button @click="add()" type="button" class="count-btn rounded-r-full">+</button>
  </div>
</template>

<style scoped>
.count-btn {
  @apply w-[30px] h-[35px] border border-gray-400 text-xl cursor-pointer;
}
</style>
