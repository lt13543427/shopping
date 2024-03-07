import { defineStore } from 'pinia';


export const usershopCart = defineStore('shopping-cart', {
    // 共用變數
    state: () => {
        return {
            shopCartData: [],
            checkedData: [],
            totalPrice: 0,
            totalQuantity:'',
            guestData: {
                name: '',
                phone: '',
                email: '',
                address: '',
                payment: '',
                pickup: '',
            },
        };
    },
    // 共用函式
    actions: {
        // 新增購物車
        // 
        // @param {object} product 產品資料
        addCart(product) {
            const existProduct = this.shopCartData.find(item => item.id === product.id);
            if (existProduct) {
                existProduct.quantity = product.quantity;
            } else {
                this.shopCartData.push(product);
            }
            console.log(this.shopCartData);
        },

        addCheckData(product) {
            if (product.checked) {
              this.checkedData.push(product);
            } else {
              this.checkedData = this.checkedData.filter(item => item.id !== product.id);
            }
          },

        getTotalPrice() {
            this.totalPrice = this.checkedData.reduce((total, item) => total + item.price * item.quantity, 0);
          },

        getTotalQuantity() {
            this.totalQuantity = this.checkedData.reduce((total, item) => total + item.quantity, 0);
          },

          resetCartData() {
            this.checkedData = [];
            this.shopCartData = [];
            this.totalPrice = 0;
            this.totalQuantity = '';
          },

    },
});