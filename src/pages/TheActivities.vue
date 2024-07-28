<script setup>
import { TrashIcon } from '@heroicons/vue/24/outline/index'
import BaseButton from '../components/BaseButton.vue'
import BaseSelect from '../components/BaseSelect.vue'

const activities = ['coding', 'reading', 'training']

const periodSelectOptions = [
    {
        value: 15,
        label: '0:15',
    },
    {
        value: 30,
        label: '0:30',
    },
    {
        value: 45,
        label: '0:45',
    },
]
</script>

<template>
    <div>
        <ul class="divide-y">
            <li
                v-for="activity in activities"
                :key="activity"
                class="flex flex-col gap-2 p-4"
            >
                <div class="flex items-center gap-2">
                    <BaseButton>
                        <TrashIcon class="h-8" />
                    </BaseButton>
                    <span class="truncate text-xl first-letter:uppercase">{{
                        activity
                    }}</span>
                </div>
                <div>
                    <BaseSelect
                        placeholder="h:mm"
                        :options="periodSelectOptions"
                        class="font-mono"
                    />
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
