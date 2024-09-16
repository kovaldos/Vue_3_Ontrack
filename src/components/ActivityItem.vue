<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline/index'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import { ref } from 'vue'
import { BUTTON_TYPE_DANGER, PERIOD_SELECT_OPTIONS } from '../constants.js'
import { isActivityValid } from '../validators.js'

defineProps({
    activity: {
        type: String,
        required: true,
        validator: isActivityValid,
    },
})

const secondsToComplete = ref(15)
</script>

<template>
    <li class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
            <BaseButton :type="BUTTON_TYPE_DANGER">
                <TrashIcon class="h-8" />
            </BaseButton>
            <span class="truncate text-xl capitalize">
                {{ activity }}
            </span>
        </div>
        <div>
            <BaseSelect
                placeholder="h:mm"
                :options="PERIOD_SELECT_OPTIONS"
                :selected="secondsToComplete"
                class="font-mono"
                @select="secondsToComplete = $event"
            />
        </div>
    </li>
</template>

<style scoped></style>
