<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline/index'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '../constants'
import { isActivityValid, isNumber, isUndefined } from '../validators'

defineProps({
    activity: {
        type: Object,
        required: true,
        validator: isActivityValid,
    },
})

const emit = defineEmits({
    setSecondsToComplete: isNumber,
    delete: isUndefined,
})
</script>

<template>
    <li class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
            <BaseButton
                :type="BUTTON_TYPE_DANGER"
                @click="emit('delete')"
            >
                <TrashIcon class="h-8" />
            </BaseButton>
            <span class="truncate text-xl capitalize">
                {{ activity.name }}
            </span>
        </div>
        <div>
            <BaseSelect
                placeholder="h:mm"
                :options="PERIOD_SELECT_OPTIONS"
                :selected="activity.secondsToComplete || null"
                class="font-mono"
                @select="emit('setSecondsToComplete', $event || 0)"
            />
        </div>
    </li>
</template>
