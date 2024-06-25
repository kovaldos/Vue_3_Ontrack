<script setup>
import TimelineItem from '../components/TimelineItem.vue'
import { isTimelineITemValid } from '../validators'

defineProps({
    timelineItems: {
        required: true,
        type: Array,
        validator: (timelineItems) => {
            return timelineItems.every(isTimelineITemValid)
        },
    },
})
</script>

<template>
    <div class="mt-7">
        <ul>
            <TimelineItem
                v-for="timelineItem in timelineItems"
                :key="timelineItem.hour"
                :timeline-item="timelineItem"
            />
        </ul>
    </div>
</template>
