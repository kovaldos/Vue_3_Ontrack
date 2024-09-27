<script setup>
import { PlusIcon } from '@heroicons/vue/24/outline/index.js'
import BaseButton from './BaseButton.vue'
import { isActivityValid } from '../validators'

const emit = defineEmits({
    submit: isActivityValid,
})

let activity = ''

function submit() {
    emit('submit', activity)
}
</script>

<template>
    <form
        class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4"
        @submit.prevent="submit"
    >
        <input
            type="text"
            placeholder="Activity name"
            :value="activity"
            class="w-full rounded border px-4 text-xl"
            @input="activity = $event.target.value"
        >
        <BaseButton>
            <PlusIcon class="h-8" />
        </BaseButton>
    </form>
</template>

<style scoped></style>
