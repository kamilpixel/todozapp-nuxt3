import { defineStore } from 'pinia';

export const useTodoStore = defineStore('TodoStore', {
  state: () => {
    return {
      items: [],
    };
  },

  getters: {
    itemList: (state) => state.items,
  },

  actions: {
    ADD_ITEM(item: String) {
      this.items.push(item);
    },
    DELETE_ITEM(itemIndex: Number) {
      this.items.splice(itemIndex, 1);
    },
  },
});