import {
    BUTTON_TYPES,
    HOURS_IN_DAY,
    MIDNIGHT_HOUR,
    NAV_ITEMS,
} from './constants'

export function isPageValid(page) {
    return Object.keys(NAV_ITEMS).includes(page)
}

export function isButtonTypeValid(type) {
    return BUTTON_TYPES.includes(type)
}

export function validateTimelineItems(timelineItems) {
    return timelineItems.every(isTimelineItemValid)
}

export function isTimelineItemValid({ hour }) {
    return isHourValid(hour)
}

export function validateActivities(activities) {
    return activities.every(isActivityValid)
}

export function isActivityValid(activity) {
    return isNotEmptyString(activity)
}

export function validateSelectOptions(options) {
    return options.every(isSelectOptionValid)
}

export function isUndefined(value) {
    return value === undefined
}

export function isUndefinedOrNull(value) {
    return isUndefined(value) || isNull(value)
}

export function isNumberOrNull(value) {
    return isNumber(value) || isNull(value)
}

export function isHourValid(hour) {
    return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

function isNotEmptyString(value) {
    return isString(value) && value.length > 0
}

function isSelectOptionValid({ value, label }) {
    return isNumber(value) && isNotEmptyString(label)
}

function isBetween(value, start, end) {
    return value >= start && value <= end
}

function isNull(value) {
    return value === null
}

function isNumber(value) {
    return typeof value === 'number'
}
function isString(value) {
    return typeof value === 'string'
}
