<script setup lang="ts">
defineProps<{
    id: string
    title: string
    type?: string
    placeholder?: string
    modelValue?: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
    <label :for="id" class="label">
        <p>{{ title }}</p>
        <textarea
            :id="id"
            :type="type"
            class="label__textarea"
            :placeholder="placeholder"
            :value="modelValue"
            maxlength="400"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        ></textarea>
    </label>
</template>

<style lang="scss" scoped>
.label {
    width: 100%;
    max-width: 400px;

    .label__textarea {
        @include flex-center;
        resize: none;
        width: 100%;
        height: 200px;
        padding-left: 10px;
        transition: border-color 0.2s ease;

        &:focus {
            border-color: rgb(123, 255, 0);
            outline: none;
        }
    }
}
</style>
