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
        stats: StatsDataItem|null
    } {
        return {
            stats: null,
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
                .then((res: AxiosResponse<{response: StatsDataItem}>) => {
                    this.stats = res.data.response
                })
                .catch(err => console.error(err))
        }
    },

    components: {
        CovidTable,
    },
})
</script>

<style lang="scss">
    [covid-page] {
        min-height: 1000px;
    }
</style>
