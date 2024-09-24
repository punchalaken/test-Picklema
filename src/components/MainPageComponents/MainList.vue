<script setup lang="ts">
import { useToDoStore } from '@/stores/ToDoStore'
import MainItem from './MainItem.vue'
</script>

<template>
    <section class="main__list">
        <MainItem
            v-for="item of useToDoStore().toDo"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :content="item.content"
            :status="item.status"
        />
    </section>
</template>

<style lang="scss" scoped>
.main__list {
    margin-top: 20px;
    padding-inline: 30px;
    @include flex-center;
    flex-direction: column;
    width: 100%;
}
</style>
