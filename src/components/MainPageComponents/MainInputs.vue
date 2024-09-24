<script setup lang="ts">
import { useToDoStore } from '@/stores/ToDoStore'
import type { toDoObject } from '@/types/ToDoItemType'

import InputCustom from '@/UI/InputCustom.vue'
import TextareaCustomCopy from '@/UI/TextareaCustom.vue'
import { reactive, ref } from 'vue'

const toDoStore = useToDoStore()

const listItem = reactive<toDoObject>({
    id: 0,
    title: '',
    content: '',
    status: false
})

const error = ref(false)

const addToDo = () => {
    if (listItem.title === '' || listItem.content === '') {
        error.value = true
        return
    }
    error.value = false
    listItem.id = Date.now()
    toDoStore.addToDoList({ ...listItem })
    listItem.title = ''
    listItem.content = ''
}
</script>

<template>
    <section class="main__container">
        <div class="main__inputs">
            <InputCustom
                :id="'title'"
                :title="'Задача'"
                :text="listItem.title"
                :placeholder="'Введите название'"
                v-model="listItem.title"
            />
            <TextareaCustomCopy
                :id="'content'"
                :title="'Описание'"
                :placeholder="'Введите текст'"
                v-model="listItem.content"
            />
        </div>
        <div class="hiden" :class="{ error }">Заполните поля.</div>
        <button type="button" class="main__button" @click="addToDo">Завести задачу</button>
    </section>
</template>

<style lang="scss" scoped>
.main__container {
    @include flex-center;

    flex-direction: column;
    width: 100%;
    gap: 20px;

    .main__inputs {
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;
        gap: 2em;
        width: 100%;
        padding-inline: 20px;

        @media screen and (width<800px) {
            align-items: center;
            flex-direction: column;
        }
    }

    .hiden {
        display: none;
    }
    .error {
        display: block;
        color: red;
    }

    .main__button {
        @include flex-center;
        width: 300px;
        height: 50px;
        border-radius: 10px;
        background-color: rgb(197, 197, 197);
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.1s ease;

        &:hover {
            background-color: rgb(160, 160, 160);
        }

        &:active {
            transform: scale(0.95);
        }
    }
}
</style>
