<script lang="ts" setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import StatsDataItem from '@/interfaces/StatsDataItem'
import StatsResponseItem from '@/interfaces/StatsResponseItem'
import config from '@/config'
import CovidTable from '@/components/CovidTable.vue'
import TotalCards from '@/components/TotalCards.vue'
import { StatsDataFieldNames } from '@/types'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

const stats = ref<StatsDataItem[] | null>(null)
const initialStats = ref<StatsDataItem[] | null>(null)
const total = ref<StatsDataItem | null>(null)
const search = ref<string>('')
const timeAgo = ref<any>(null)
const continents = ref<string[]>([
    'North-America',
    'South-America',
    'Europe',
    'Asia',
    'Africa',
    'Oceania',
    'Australia',
])

onMounted(() => {
    getStats()
    TimeAgo.addLocale(en)
    timeAgo.value = new TimeAgo('en-US')
})

function filterStats(e: Event): void {
    if (
        e.target === null ||
        initialStats.value === null ||
        (e.target as HTMLInputElement).value === ''
    ) {
        stats.value = initialStats.value
        return
    }

    const value = (e.target as HTMLInputElement).value

    stats.value = initialStats.value.filter(item => {
        return RegExp(value.toLowerCase()).test(item.country.toLowerCase())
    })
}

function getStats(): void {
    const headers: { [P: string]: string } = {
        'x-rapidapi-host': config.requestHost,
        'x-rapidapi-key': config.requestKey,
    }

    axios
        .get<{ response: StatsResponseItem[] }>(config.requestURL, { headers })
        .then(res => {
            handleResponse(res.data.response)
        })
        .catch(err => console.error(err))
}

function remapResponseToStatsItem(stats: StatsResponseItem[]): StatsDataItem[] {
    return stats.map((item): StatsDataItem => {
        let newCases = 0

        if (item.cases.new !== null) {
            let len = item.cases.new.length
            newCases = parseInt(item.cases.new.substring(1, len))
        }

        return {
            cases: item.cases.total,
            recovered: item.cases.recovered,
            newCases: newCases,
            country: item.country,
            deaths: item.deaths.total,
            time: timeAgo.value.format(Date.parse(item.time)),
        }
    })
}

function handleResponse(resp: StatsResponseItem[]): any {
    let statistics = remapResponseToStatsItem(resp)

    sortBy('cases', statistics)

    total.value = statistics.find(i => i.country === 'All') || null

    stats.value = statistics.filter(i => {
        return i.country !== 'All' && !continents.value.includes(i.country)
    })

    initialStats.value = stats.value
}

function sortBy(field: StatsDataFieldNames, stats: StatsDataItem[]): void {
    stats.sort((a: StatsDataItem, b: StatsDataItem) => {
        if (a[field] < b[field]) return 1
        return a[field] > b[field] ? -1 : 0
    })
}
</script>
<template>
    <div home-page class="section">
        <div v-if="stats === null">
            <div class="spinner"></div>
        </div>

        <div v-else>
            <TotalCards :data="total" />

            <div>
                <label search-label for="search-country">Search country</label>

                <input
                    type="text"
                    placeholder="Country name"
                    class="browser-default"
                    @keyup="filterStats"
                    id="search-country"
                />
            </div>

            <div class="section">
                <CovidTable :stats />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
[home-page] {
    min-height: 100vh;
    position: relative;
}

input.browser-default {
    width: 220px;
    border: 1px dashed #9e9e9e;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 17px;
    margin-left: 10px;
    transform: translateY(-2px);
}

[search-label] {
    font-size: 1.2em;
    color: #444;
}

@media (max-width: 992px) {
    input.browser-default {
        display: block;
        margin: 15px 0 0 0;
    }
}
</style>
