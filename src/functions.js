import {PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE} from "./constans.js";

export function normalizeHash() {
    const hash = window.location.hash.slice(1)
    if (Object.keys([PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE]).includes(hash)) {
        return hash
    }
    window.location.hash = PAGE_TIMELINE
    return PAGE_TIMELINE
}
