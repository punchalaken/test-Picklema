<script setup lang="ts">
defineProps<{
    id: string
    title: string
    type?: string
    placeholder?: string
    modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
    <label :for="id" class="label">
        <p>{{ title }}</p>
        <input
            :id="id"
            :type="type"
            class="label__input"
            :placeholder="placeholder"
            :value="modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
    </label>
</template>

<style lang="scss" scoped>
.label {
    width: 100%;
    max-width: 400px;

    .label__input {
        @include flex-center;
        width: 100%;
        height: 40px;
        padding-left: 10px;
        transition: border-color 0.2s ease;

        &:focus {
            border-color: rgb(123, 255, 0);
            outline: none;
        }
    }
}
</style>
