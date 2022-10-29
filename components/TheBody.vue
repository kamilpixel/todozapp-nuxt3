<template>
  <div class="row mt-5">
    <!-- form -->
    <div class="col-md-6">
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="txtArea" class="form-label">What do you want todo today?</label>
            <textarea 
              class="form-control" 
              id="txtArea" 
              rows="3"
              v-model="todoItem"
            >
            </textarea>
          </div>
          <button 
            @click="onClickAdd"
            type="button" 
            class="btn btn-outline-primary"
          >
            Add
          </button>
        </div>
      </div>
    </div>

    <!-- listing -->
    <div class="col-md-6">
      <!-- list exists -->
      <div v-if="items.length"> 
        <ul class="list-group">
          <li 
            v-for="(item, index) in items" :key="index"
            class="list-group-item d-flex justify-content-between align-items-center animate__animated animate__faster animate__fadeIn"
            :class="{ animate__fadeOut: indexRemove === index }"
          >
            {{ item }}
            <button 
              @click="onClickRemove(index)"
              type="button" 
              class="btn btn-outline-danger"
            >
              Remove
            </button>
          </li>
        </ul>

      </div>

      <!-- list empty -->
      <div v-else>
        List is empty...
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useTodoStore } from '@/stores/TodoStore';

export default defineComponent({
  setup() {
    const todoStore = useTodoStore();

    // display items
    const { items } = storeToRefs(todoStore);

    // on add item
    const todoItem = ref('');
    const onClickAdd = () => {
      if(!todoItem.value) return;
      todoStore.ADD_ITEM(todoItem.value);
      todoItem.value = '';
    };
    
    // on remove item
    const indexRemove = ref(null);
    const onClickRemove = (index: Number) => {
      indexRemove.value = index;
      setTimeout(() => {
        todoStore.DELETE_ITEM(index);
        indexRemove.value = null;
      }, 700);
    };

    return {
      items,
      todoItem,
      onClickAdd,
      onClickRemove,
      indexRemove,
    };
  },
})
</script>
