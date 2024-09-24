<script setup lang="ts">
defineProps<{
    content: string
    linkTo: string
}>()
</script>
<template>
    <li>
        <router-link :to="linkTo">
            {{ content }}
        </router-link>
    </li>
</template>

<style lang="scss" scoped>
.router-link-active {
    color: rgb(55, 157, 157);
}
</style>
