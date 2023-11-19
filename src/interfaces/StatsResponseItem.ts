export default interface StatsDataItem {
    cases: {
        active: number
        critical: number
        new: string
        recovered: number
        total: number
    }
    country: string
    day: string
    deaths: {
        new: string
        total: number
    }
    time: string
}