<template>
    <div>
        <div v-if="stats === null">
            <h2>nice</h2>
        </div>

        <table v-else class="striped highlight">
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
                <tr v-for="stat in stats" :key="stat.country">
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

export default Vue.extend({
    props: {
        stats: {
            default: null,
        }
    },
})
</script>