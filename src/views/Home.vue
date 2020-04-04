<template>
    <div covid-page>
        <div v-if="stats === null">
            <div class="spinner"></div>
        </div>

        <div v-else>
            <h5>
                <span>Search country</span>

                <input type="text"
                    placeholder="Country name"
                    class="browser-default"
                    @keyup="filterStats"
                >
            </h5>

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
import config from '@/config'
import CovidTable from '@/components/CovidTable.vue'

export default Vue.extend({
    data(): {
        stats: StatsDataItem[] | null
        initialStats: StatsDataItem[] | null
        total: StatsDataItem | null
        search: string
    } {
        return {
            stats: null,
            initialStats: null,
            total: null,
            search: '',
        }
    },

    created() {
        this.getStats()
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

           axios
                .get(config.requestURL, {headers})
                .then((res: AxiosResponse<{response: StatsDataItem[]}>) => {
                    this.handleResponse(res.data.response)
                })
                .catch(err => console.error(err))
        },

        handleResponse(resp: StatsDataItem[]): any {
            resp.sort((a: StatsDataItem, b: StatsDataItem) => {
                if (a.cases.total < b.cases.total)
                    return 1
                return a.cases.total > b.cases.total ? -1 : 0
            })

            this.total = resp.splice(0, 1)[0]
            this.stats = resp
            this.initialStats = resp
        },
    },

    components: {
        CovidTable,
    },
})
</script>

<style lang="scss">
    [covid-page] {
        min-height: 400px;
        position: relative;
    }
    input.browser-default {
        width: 290px;
        border: 1px solid #9e9e9e;
        padding: 7px 10px;
        border-radius: 3px;
        font-size: 17px;
        margin-left: 15px;
        transform: translateY(-2px);
    }

    @media (max-width: 992px) {
        input.browser-default {
            display: block;
            margin: 15px 0 0 0;
        }
    }
</style>
