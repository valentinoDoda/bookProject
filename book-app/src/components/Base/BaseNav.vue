<template>
  <base-card>
    <nav>
      <div class="my-library"><slot name="library"></slot></div>
      <div class="my-reading"><slot name="reading"></slot></div>
      <div class="my-complete"><slot name="complete"></slot></div>
      <div class="my-add"><slot name="add"></slot></div>
    </nav>
  </base-card>
</template>

<style scoped>

nav {
  border-radius: 10px;
  background-color:rgb(24, 67, 222) ;
  display: flex;
  justify-content: space-evenly;
}
nav > div {
  height: 100%;
  flex-grow: 1;
}
div ::v-deep button {
  flex-grow: 1;
  height: 100%;
}


@media (max-width: 463px) {
  nav{
    flex-wrap: wrap;
  }
}
</style>
