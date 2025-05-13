<template>
  <button class="default">
    <slot> </slot>
  </button>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.default {
  width: 100%;
  padding: 10px 20px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: rgb(24, 67, 222);
  border-radius: 10px;
}
.default:hover {
  background-color: rgb(33, 56, 137);
}
</style>
