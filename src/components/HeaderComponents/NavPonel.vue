<script setup lang="ts">
import NavItem from './NavItem.vue'

import { useNavPonelStore } from '@/stores/NavPonelStore'
</script>
<template>
    <nav class="nav">
        <ul class="nav__list">
            <NavItem
                v-for="item in useNavPonelStore().NavItems"
                :key="item.id"
                :content="item.content"
                :linkTo="item.linkTo"
            />
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.nav {
    @include flex-center;
    max-width: 1440px;
    width: 100%;

    .nav__list {
        display: flex;
        justify-content: space-between;
        max-width: 700px;
        width: 100%;
        gap: 1em;
        padding-inline: 20px;
    }
}
</style>
