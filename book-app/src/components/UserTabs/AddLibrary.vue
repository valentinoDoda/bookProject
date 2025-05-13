<template>
  <base-card style="margin-top: 30px">
    <form @submit="handle" action="">
      <form id="itemForm">
        <label for="image">Insert Image:</label>
        <input ref="imgSrc" type="text" id="image" required />

        <label for="title">Title:</label>
        <input
          ref="title"
          type="text"
          id="title"
          placeholder="Enter title"
          required
        />

        <label for="description">Description:</label>
        <textarea
          ref="description"
          id="description"
          placeholder="Enter description"
          rows="4"
          required
        ></textarea>

        <base-button @click="handle">Add</base-button>
      </form>
    </form>
  </base-card>
  <error-message v-if="checkError">
    <template #messageTitle>{{ titleError }}</template>
    <template #actions><base-button @click="errrBtn">OK</base-button></template>
    <template #default>{{ msgError }}</template>
  </error-message>
</template>

<script>
import ErrorMessage from "./ErrorMessage.vue";

export default {
  components: { ErrorMessage },
  inject: ["addBook", "bookDisplay"],
  data() {
    return {
      titleError: "Something Went Wrong",
      msgError: "Image don't exist",
      checkError: false,
    };
  },
  methods: {
    errrBtn() {
      this.checkError = false;
    },
    handle(e) {
      e.preventDefault();
      const imgSrc = this.$refs.imgSrc.value;
      const titleBook = this.$refs.title.value;
      const descriptionBook = this.$refs.description.value;
      const image = new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = imgSrc;
      });
      image.then((isValid) => {
        if (isValid) {
          let isBookExist = false;
          if (titleBook) {
            for (let i = 0; i < this.bookDisplay.length; i++) {
              if (this.bookDisplay[i].title == titleBook) {
                console.log(this.bookDisplay[i].title, titleBook);
                isBookExist = true;
                this.msgError = "This book exist";
                this.checkError = true;

                break;
              }
            }
          } else {
            this.msgError = "Book Title is reqirued";
            this.checkError = true;
          }
          if (!isBookExist && titleBook) {
            const book = {
              status: "read",
              id: new Date().toISOString(),
              title: titleBook,
              description: descriptionBook,
              img: imgSrc,
            };
            this.$refs.title.value = "";
            this.$refs.description.value = "";
            this.addBook(book);
          }
        } else {
          this.checkError = true;
        }
      });
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  padding: 15px;
  flex-direction: column;
  gap: 15px;
}
input,
textarea,
button {
  padding: 10px;
  font-size: 1em;
}
</style>
