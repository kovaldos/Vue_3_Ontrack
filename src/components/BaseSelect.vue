<script setup>
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline/index'
import { validateSelectOptions } from '../validators'

defineProps({
    selected: {
        default: 0,
        type: Number,
    },
    options: {
        required: true,
        type: Array,
        validator: validateSelectOptions,
    },
    placeholder: {
        required: true,
        type: String,
    },
})

const emit = defineEmits({
    select(value) {
        return typeof value === 'number'
    },
})
</script>

<template>
    <div class="flex gap-2">
        <BaseButton @click="emit('select', null)">
            <XMarkIcon class="h-8" />
        </BaseButton>
        <select
            class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
            @change="emit('select', +$event.target.value)"
        >
            <option
                selected
                disabled
                value=""
            >
                Rest
            </option>
            <option
                v-for="{ value, label } in options"
                :key="value"
                :value="value"
                :selected="value === selected"
            >
                {{ label }}
            </option>
        </select>
    </div>
</template>
