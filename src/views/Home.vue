<template>
    <div covid-page>
        <h5>World COVID-19 statistics</h5>

        <CovidTable :stats="stats" />
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
        total: StatsDataItem | null
    } {
        return {
            stats: null,
            total: null,
        }
    },

    created() {
        this.getStats()
    },

    methods: {
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
</style>
