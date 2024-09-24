<script setup lang="ts">
import MainInputs from '@/components/MainPageComponents/MainInputs.vue'
import MainList from '@/components/MainPageComponents/MainList.vue'
</script>

<template>
    <main class="main">
        <h1>ToDo List</h1>
        <MainInputs />
        <MainList />
    </main>
</template>

<style lang="scss" scoped>
.main {
    @include flex-center;
    flex-direction: column;
    max-width: 1024px;
    width: 100%;
    margin-block: 30px;
}
</style>
