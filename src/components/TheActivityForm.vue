<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline/index'
import BaseButton from './BaseButton.vue'
import { isActivityValid } from '../validators'
import { nextTick, ref } from 'vue'
import {generateId} from "../functions";

const emit = defineEmits({
    submit: isActivityValid,
})

let name = ref('')

async function submit() {
    emit('submit', {
        id: generateId(),
        name: name.value,
        secondsToComplete: 0
    })

    name.value = ''
    await nextTick()

    window.scrollTo(0, document.body.scrollHeight)
}
</script>

<template>
    <form
        class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
        @submit.prevent="submit"
    >
        <input
            v-model="name"
            type="text"
            placeholder="Activity name"
            class="w-full rounded border px-4 text-xl"
        >
        <BaseButton :disabled="name.trim() === ''">
            <PlusIcon class="h-8" />
        </BaseButton>
    </form>
</template>
