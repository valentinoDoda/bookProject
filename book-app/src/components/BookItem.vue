<template>
  <li>
    <book-item-layout>
      <template #image><img :src="bookItem.img" /></template>
      <template #title>{{ bookItem.title }}</template>
      <template #description>{{ bookItem.description }}</template>
      <template #button
        ><base-button
          :status="bookItem.status"
          :title="bookTitle"
          @click="makeChanges"
          >{{ btnText }}</base-button
        ></template
      >
    </book-item-layout>
  </li>
</template>
<script>
import BookItemLayout from "./BookItemLayout.vue";
export default {
  components: {
    BookItemLayout,
  },
  props: ["bookItem", "btnText", "bookTitle"],
  inject: ["changeStatus"],
  methods: {
    makeChanges(e) {
      this.changeStatus(this.bookItem, e);
    },
  },
};
</script>

<style scoped>
img {
  object-fit: cover;
  border-radius: 12px;
  width: 100%;
}
li {
  margin-top: 30px;
}
</style>
