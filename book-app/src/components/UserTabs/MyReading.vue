<template>
  <base-theme>
    <template #default>{{ sectionName }}</template>
    <template #lists>
      <book-container>
        <book-item
          v-for="book in readingBooks"
          :bookItem="book"
          :btnText="'i read it'"
          :key="book.id"
        ></book-item>
      </book-container>
    </template>
  </base-theme>
</template>
<script>
export default {
  inject: ["readingBooks"],
  data() {
    return { sectionName: "I'm Reading" };
  },
};
</script>
