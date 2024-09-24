<script setup lang="ts">
import NavPonel from './NavPonel.vue'
</script>

<template>
    <header class="header">
        <NavPonel />
    </header>
</template>

<style lang="scss" scoped>
.header {
    @include flex-center;
    width: 100%;
    background-color: rgb(209, 255, 207);
    height: 100px;
}
</style>
