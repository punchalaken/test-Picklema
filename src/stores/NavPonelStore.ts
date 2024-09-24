import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { NavPonelItem } from '@/types/NavPonelItemType'

export const useNavPonelStore = defineStore('NavPonelStore', () => {
    const NavItems = ref<NavPonelItem[]>([
        { id: 1, content: 'Главная страница', linkTo: '/' },
        { id: 2, content: 'О нас', linkTo: '/about' },
        { id: 3, content: 'Контакты', linkTo: '/contacts' }
    ])

    return { NavItems }
})
