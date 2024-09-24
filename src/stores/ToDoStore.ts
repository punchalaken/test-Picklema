import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

import type { toDoObject } from '@/types/ToDoItemType'

export const useToDoStore = defineStore('ToDoStore', () => {
    const toDo = ref<toDoObject[]>(JSON.parse(localStorage.getItem('toDoList') || '[]'))

    const saveToLocalStorage = () => {
        localStorage.setItem('toDoList', JSON.stringify(toDo.value))
    }

    watch(toDo, saveToLocalStorage)

    const addToDoList = function (listItem: toDoObject): void {
        toDo.value.push(listItem)
        saveToLocalStorage()
    }

    const changeStatus = function (id: number): void {
        toDo.value.map((item) => {
            if (item.id === id) {
                item.status = true
            }
        })
        saveToLocalStorage()
    }

    const deleteToDo = function (id: number): void {
        toDo.value = toDo.value.filter((item) => item.id !== id)
        saveToLocalStorage()
    }

    return { toDo, addToDoList, changeStatus, deleteToDo }
})
