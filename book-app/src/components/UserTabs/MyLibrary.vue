<template>
<base-theme>
<template #default>
  {{sectionName}}
</template>
<template #lists> 
  <book-container>
    <book-item
      v-for="book in bookDisplay"
      :bookItem="book"
      :bookTitle='book.title'
      :btnText="book.status"
      :key="book.id"
    ></book-item>
  </book-container>
</template>
</base-theme>
</template>

<script>
import BookContainer from "../BookContainer.vue";
export default {
  inject: ["bookDisplay"],
  components: { BookContainer },
  data(){
    return{sectionName: 'My Library'}
  },
  methods: {},
};
</script>

<style scoped></style>
