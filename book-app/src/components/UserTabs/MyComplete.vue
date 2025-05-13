<template>
  <base-theme>
    <template #default>{{ sectionName }}</template>
    <template #lists>
      <book-container>
        <book-item
          v-for="book in completedBooks"
          :bookItem="book"
          :btnText="'read it again'"
          
          :key="book.id"
        ></book-item>
      </book-container>
    </template>
  </base-theme>
</template>
<script>
export default {
  inject: ["completedBooks"],
  data() {
    return {sectionName: "My Completed" };
  },
  
};
</script>
