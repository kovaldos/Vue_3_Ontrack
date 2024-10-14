<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline/index'
import BaseButton from './BaseButton.vue'
import { isActivityValid } from '../validators'
import { nextTick, ref } from 'vue'

const emit = defineEmits({
    submit: isActivityValid,
})

let activity = ref('')

async function submit() {
    emit('submit', activity.value)
    activity.value = ''

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
            v-model="activity"
            type="text"
            placeholder="Activity name"
            class="w-full rounded border px-4 text-xl"
        >
        <BaseButton :disabled="activity.trim() === ''">
            <PlusIcon class="h-8" />
        </BaseButton>
    </form>
</template>
