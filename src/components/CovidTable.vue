<template>
    <div>
        <div v-if="stats === null">
            <div class="spinner"></div>
        </div>

        <table v-else class="striped">
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
                    <td>{{ formatNumber(stat.cases.total) }}</td>
                    <td>
                        {{ stat.cases.new }}
                    </td>
                    <td class="red-text text-darken-3">
                        {{ formatNumber(stat.deaths.total) }}
                    </td>
                    <td class="green-text text-darken-4">
                        {{ formatNumber(stat.cases.recovered) }}
                    </td>
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

<style lang="scss" scoped>
    table {
        td, th {
            padding: 8px 10px;
        }

        thead {
            tr {
                background-color: #5c6bc030;
            }

            th {
                font-size: 17px;
            }
        }

        tbody td {
            font-weight: bold;
        }
    }
</style>