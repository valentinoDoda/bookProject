<template>
    <h1>
        <slot></slot>
    </h1>
    <div>
        <slot name="lists"></slot>
    </div>
</template>
 <style scoped>
 h1{
    text-align: center;
 }
 </style>