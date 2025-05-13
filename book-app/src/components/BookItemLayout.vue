<template>
  <base-card>
    <div class="box">
      <div class="imgSide">
        <slot name="image"></slot>
      </div>
      <div class="mainContent">
        <h3><slot name="title"></slot></h3>
        <p><slot name="description"></slot></p>
        <div class="buttonItem">
          <slot name="button"></slot>
        </div>
      </div>
    </div>
  </base-card>
</template>

<style scoped>
h3 {
   display: -webkit-box;
  -webkit-line-clamp: 2; /* αριθμός γραμμών */
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-top: 8px;
  font-size: 1.8rem;
}
.box {
  padding: 10px;
  display: flex;
  gap: 30px;
  width: 100%;
}
.imgSide {
  max-height: 200px;
  min-width: 300px;
}
.imgSide ::v-deep img{
  max-height: 100%;
  min-width: 100%;
  border: 1px solid black;
}
.buttonItem {
  width: 140px;
  display: flex;
  flex-grow: 1;
  align-self: flex-end;
}
.buttonItem ::v-deep button {
  width: 100%;
  
  font-size: 1.1rem;
  align-self: flex-end;
}
.mainContent {
  display: flex;
  flex-direction: column;
  width: 100%;
}

p {
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* αριθμός γραμμών */
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-top: 8px;
}

@media (max-width: 715px) {
  .box {
    flex-wrap: wrap;
  }
  .imgSide {
    min-width: 100%;
  }
  .buttonItem {
    width: 100%;
  }
  .buttonItem ::v-deep button {
    margin-top: 20px;
  }
  .imgSide ::v-deep img{
    width: 100%;
  }
}
</style>
