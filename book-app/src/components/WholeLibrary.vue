<template>
  <base-nav id="nav">
    <template #library
      ><base-button @click="tab = 'MyLibrary'" ref="library"
        >My Library</base-button
      ></template
    >
    <template #reading
      ><base-button @click="tab = 'MyReading'">Reading</base-button></template
    >
    <template #complete
      ><base-button @click="tab = 'MyComplete'"
        >Completed</base-button
      ></template
    >
    <template #add
      ><base-button @click="tab = 'AddLibrary'"> Add</base-button></template
    >
  </base-nav>
  <keep-alive v-if="tab!='add-library'">
    <component :is="tab" />
  </keep-alive>
  <!-- <my-library :books="allBooks" style="margin-top: 30px"></my-library>
  <my-reading :books="readingBooks"></my-reading>
  <my-complete></my-complete> -->
  <!-- 1 of 4 -->
</template>
<script>
import AddLibrary from "./UserTabs/AddLibrary.vue";
import BaseNav from "./Base/BaseNav.vue";
import MyComplete from "./UserTabs/MyComplete.vue";
import MyLibrary from "./UserTabs/MyLibrary.vue";
import MyReading from "./UserTabs/MyReading.vue";
export default {
  components: {
    AddLibrary,
    MyComplete,
    MyReading,
    BaseNav,
    MyLibrary,
  },
  data() {
    return {
      tab: "MyLibrary",
      mode: ["active", ""],
      completedBooks: [],
      readingBooks: [],
      btnTarget: [],
      allBooks: [
        {
          status: "read",
          id: new Date().toISOString() + 1,
          title: "The Clockwork Garden",
          description:
            "In a quiet village on the edge of a forgotten valley, a young botanist named Elara discovers an ancient, hidden garden made entirely of metal and gears. As she investigates, she realizes the garden is alive—powered by lost technology and guarding a secret that could reshape the natural world. Elara must choose between preserving nature or unlocking its mechanical twin.",
          img: "https://picsum.photos/id/1011/300/200",
        },
        {
          status: "read",
          id: new Date().toISOString() + 1,
          title: "Echoes of the Deep",
          description:
            "Marine biologist Kael sets out on a deep-sea expedition to study rare bioluminescent creatures. What begins as a routine dive turns into a race against time when his crew stumbles upon a submerged structure older than any known civilization. Strange sounds echo through the deep, and Kael must uncover their source before the ocean takes him forever.",
          img: "https://picsum.photos/id/1025/300/200",
        },
        {
          status: "read",
          id: new Date().toISOString() + 1,
          title: "Forgotten Horizons",
          description:
            "Captain Nyra leads a crew of explorers on a journey to chart unexplored space beyond the known universe. When their ship is caught in a temporal storm, they awaken in a dimension that defies logic, with fractured realities and looping time. As the crew struggles to find a way home, they face a cosmic truth: not all timelines want to be escaped.",
          img: "https://picsum.photos/id/1035/300/200",
        },
        {
          status: "read",
          id: new Date().toISOString() + 1,
          title: "The Painted Silence",
          description:
            "Renowned but reclusive painter Aldric vanished after finishing his final masterpiece. Years later, a young art student named Mara uncovers that his paintings hold a strange power—scenes that whisper to her, change subtly, and sometimes...move. As she digs deeper into Aldric’s past, Mara realizes the silence in the paintings is speaking directly to her.",
          img: "https://picsum.photos/id/1042/300/200",
        },
        {
          status: "read",
          id: new Date().toISOString() + 1,
          title: "Lanterns at Dusk",
          description:
            "Set in a world fractured by endless war, a child named Lian finds solace in an old tradition: floating lanterns downriver at dusk. Each night, the lanterns carry messages of hope, remembrance, and resistance. As the lanterns drift, they ignite a movement across villages and cities. With innocence and courage, Lian becomes a symbol of peace in the darkest of times.",
          img: "https://picsum.photos/id/1059/300/200",
        },
      ],
    };
  },
  provide() {
    return {
      completedBooks: this.completedBooks,
      readingBooks: this.readingBooks,
      bookDisplay: this.allBooks,
      changeStatus: this.changeStatus,
      addBook:this.addBook
    };
  },
  methods: {
    addBook(newBook){
      this.allBooks.unshift(newBook)
    },
    changeStatus(book, e) {
      //let disabledBtn = false;
      if (book.status == "read") {
        const targetBtn = e.target;
        targetBtn.disabled = true;
        this.btnTarget.push(targetBtn);
        console.log(this.btnTarget);
        for (let i = 0; i < this.allBooks.length; i++) {
          if (this.allBooks[i].title == book.title) {
            this.allBooks[i].status = "is reading";
            this.readingBooks.unshift(this.allBooks[i]);

            break;
          }
        }
      } else if (book.status == "is reading") {
        for (let i = 0; i < this.readingBooks.length; i++) {
          if (this.readingBooks[i].title == book.title) {
            this.readingBooks.splice(i, 1);
            break;
          }
        }
        for (let i = 0; i < this.allBooks.length; i++) {
          if (this.allBooks[i].title == book.title) {
            this.allBooks[i].status = "is completed";
            this.completedBooks.unshift(this.allBooks[i]);
            break;
          }
        }
      } else if (book.status == "is completed") {
        const btnTitle = book.title;
        for (let i = 0; i < this.btnTarget.length; i++) {
          if (this.btnTarget[i].title == btnTitle) {
            this.btnTarget[i].disabled = false;
            this.btnTarget.splice(i, 1);
          }
        }
        for (let i = 0; i < this.completedBooks.length; i++) {
          if (this.completedBooks[i].title == book.title) {
            this.completedBooks.splice(i, 1);
            break;
          }
        }
        for (let i = 0; i < this.allBooks.length; i++) {
          if (this.allBooks[i].title == book.title) {
            this.allBooks[i].status = "read";
            //btnTarget = !btnTarget;
            break;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.navStyle {
  border: none;
  width: 50px;
}
</style>
