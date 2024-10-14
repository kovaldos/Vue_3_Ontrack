<script setup>
import ActivityItem from '../components/ActivityItem.vue'
import { isActivityValid, validateActivities } from '../validators'

import TheActivityForm from '../components/TheActivityForm.vue'

defineProps({
    activities: {
        type: Array,
        required: true,
        validator: validateActivities,
    },
})

const emit = defineEmits({
    createActivity: isActivityValid,
    deleteActivity: isActivityValid,
})
</script>

<template>
    <div class="flex flex-grow flex-col">
        <ul class="flex-grow divide-y">
            <ActivityItem
                v-for="activity in activities"
                :key="activity"
                :activity="activity"
                @delete="emit('deleteActivity', activity)"
            />
        </ul>
        <TheActivityForm @submit="emit('createActivity', $event)" />
    </div>
</template>

<style scoped></style>
