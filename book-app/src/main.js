import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
import BaseTheme from "./components/Base/BaseTheme";
import BookItem from "./components/BookItem.vue";
import BaseButton from "./components/Base/BaseButton.vue";
import BaseCard from "./components/Base/BaseCard.vue";
import BookContainer from "./components/Base/BookContainer.vue";
app.component("book-item", BookItem);
app.component("base-button", BaseButton);
app.component("base-card", BaseCard);
app.component("base-theme", BaseTheme);
app.component("book-container", BookContainer);

app.mount("#app");
