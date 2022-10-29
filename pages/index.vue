<template>
  <TheHeader />
  <div class="container">
    <TheBody />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/TheHeader.vue';
import TheBody from '@/components/TheBody.vue';
import TheFooter from '@/components/TheFooter.vue';

export default defineComponent({
  setup() {
    return {
      TheHeader,
      TheBody,
      TheFooter,
    };
  },
})
</script>