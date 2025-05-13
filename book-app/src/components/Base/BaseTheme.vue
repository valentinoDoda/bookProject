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
    margin-top: 20px;
    text-align: center;
 }
 </style>