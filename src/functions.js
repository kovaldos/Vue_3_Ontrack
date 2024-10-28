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
    return [
        {
            id: generateId(),
            name: 'Coding',
            secondsToComplete: 0 * SECONDS_IN_HOUR,
        },
        {
            id: generateId(),
            name: 'Training',
            secondsToComplete: 1 * SECONDS_IN_HOUR,
        },
        {
            id: generateId(),
            name: 'Reading',
            secondsToComplete: 2 * SECONDS_IN_HOUR,
        },
    ]
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
