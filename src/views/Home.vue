<template>
    <div home-page class="section">
        <div v-if="stats === null">
            <div class="spinner"></div>
        </div>

        <div v-else>
            <TotalCards :data="total" />

            <div>
                <label search-label for="search-country">Search country</label>

                <input type="text"
                    placeholder="Country name"
                    class="browser-default"
                    @keyup="filterStats"
                    id="search-country"
                >
            </div>

            <div class="section">
                <CovidTable :stats="stats" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios, { AxiosResponse } from 'axios'
import StatsDataItem from '@/interfaces/StatsDataItem'
import StatsResponseItem from '@/interfaces/StatsResponseItem'
import config from '@/config'
import CovidTable from '@/components/CovidTable.vue'
import TotalCards from '@/components/TotalCards.vue'
import {StatsDataFieldNames} from '@/types'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

export default Vue.extend({
    data(): {
        stats: StatsDataItem[] | null
        initialStats: StatsDataItem[] | null
        total: StatsDataItem | null
        search: string
        timeAgo: any
        continents: string[]
    } {
        return {
            stats: null,
            initialStats: null,
            total: null,
            search: '',
            timeAgo: null,
            continents:  [
                'North-America',
                'South-America',
                'Europe',
                'Asia',
                'Africa',
                'Oceania',
                'Australia',
            ],
        }
    },

    created() {
        this.getStats()
        TimeAgo.addLocale(en)
        this.timeAgo = new TimeAgo('en-US')
    },

    methods: {
        filterStats(e: InputEvent): void {
            if (
                e.target === null ||
                this.initialStats === null ||
                (e.target as HTMLInputElement).value === ''
            ) {
                this.stats = this.initialStats
                return
            }

            const value = (e.target as HTMLInputElement).value

            this.stats = this.initialStats.filter((item) => {
                return RegExp(value.toLowerCase()).test(item.country.toLowerCase())
            })
        },

        getStats(): void {
            const headers: { [P: string]: string } = {
                "x-rapidapi-host": config.requestHost,
                "x-rapidapi-key": config.requestKey,
            }

            axios.get(config.requestURL, {headers})
                .then((res: AxiosResponse<{response: StatsResponseItem[]}>) => {
                    this.handleResponse(res.data.response)
                })
                .catch(err => console.error(err))
        },

        remapResponseToStatsItem(stats: StatsResponseItem[]): StatsDataItem[] {
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
                    time: this.timeAgo.format(Date.parse(item.time)),
                }
            })
        },

        handleResponse(resp: StatsResponseItem[]): any {
            let stats = this.remapResponseToStatsItem(resp)

            this.sortBy('cases', stats)

            this.total = stats.find(i => i.country === 'All') || null

            this.stats = stats.filter(i => {
                return i.country !== 'All' && !this.continents.includes(i.country)
            })

            this.initialStats = this.stats
        },

        sortBy(field: StatsDataFieldNames, stats: StatsDataItem[]): void {
            stats.sort((a: StatsDataItem, b: StatsDataItem) => {
                if (a[field] < b[field])
                    return 1
                return a[field] > b[field] ? -1 : 0
            })
        },
    },

    components: {
        CovidTable,
        TotalCards,
    },
})
</script>

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
