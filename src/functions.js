import {
    HOURS_IN_DAY,
    MIDNIGHT_HOUR,
    PAGE_TIMELINE,
    SECONDS_IN_HOUR,
} from './constants'
import { isPageValid } from './validators'

export function normalizePageHash() {
    const page = window.location.hash.slice(1)
    if (isPageValid(page)) {
        return page
    }
    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
}

export function generateActivities() {
    return ['Coding', 'Reading', 'Training'].map((name, hour) => ({
        id: generateId(),
        name,
        secondsToComplete: hour * SECONDS_IN_HOUR,
    }))
}

export function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function generateTimelineItems() {
    const timelineItems = []
    for (let hour = MIDNIGHT_HOUR; hour < HOURS_IN_DAY; hour++) {
        timelineItems.push({ hour })
    }
    return timelineItems
}

export function generateActivitySelectOptions(activities) {
    return activities.map((activivty) => ({ value: activivty.id, label: activivty.name }))
}
