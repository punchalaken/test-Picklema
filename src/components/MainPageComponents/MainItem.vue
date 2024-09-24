<script setup lang="ts">
import { useToDoStore } from '@/stores/ToDoStore'

defineProps<{
    id: number
    title: string
    content: string
    status: boolean | null
}>()
</script>

<template>
    <div class="main__item" :class="{ 'main__item--done': status }">
        <div class="item__check">
            <img
                src="/icons/check.png"
                alt="Задача выполнена"
                class="item__img"
                @click="useToDoStore().changeStatus(id)"
            />
            <img
                src="/icons/сross.png"
                alt="Задача провалена"
                class="item__img"
                @click="useToDoStore().deleteToDo(id)"
            />
        </div>
        <h2 class="item__header">{{ title }}</h2>
        <p class="item__text">{{ content }}</p>
        <button type="button" class="item__edit">Редактировать задачу</button>
    </div>
</template>

<style lang="scss" scoped>
.main__item {
    @include flex-center;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
    margin-block: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;

    .item__check {
        display: flex;
        justify-content: end;
        gap: 2em;
        width: 100%;

        .item__img {
            width: 40px;
            height: 40px;

            @media screen and (width<450px) {
                width: 25px;
                height: 25px;
            }
        }
    }
}

.main__item--done {
    background-color: #e5ffcf;
    border: 1px solid #35ff42;
}
</style>
