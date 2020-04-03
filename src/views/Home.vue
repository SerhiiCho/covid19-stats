<template>
    <div>
        <h5>World COVID-19 statistics</h5>

        <table class="striped highlight">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>New cases</th>
                    <th>Deceased</th>
                    <th>Recovered</th>
                </tr>
            </thead>

            <tbody>
                <div v-if="stats === null">
                    <h2>nice</h2>
                </div>
                <tr v-else v-for="stat in stats" :key="stat.country">
                    <td>{{ stat.country }}</td>
                    <td>{{ stat.cases.total }}</td>
                    <td>{{ stat.cases.new }}</td>
                    <td>{{ stat.deaths.total }}</td>
                    <td>{{ stat.cases.recovered }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios, { AxiosResponse } from 'axios'
import StatsDataItem from '@/interfaces/StatsDataItem'
import config from '@/config'

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
    }
})
</script>
