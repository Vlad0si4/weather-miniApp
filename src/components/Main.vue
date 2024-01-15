<template>
  <Weather />
</template>

<script>
import { defineComponent } from "vue";
import Weather from "./Weather.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { Weather },
});
</script>

<style></style>
