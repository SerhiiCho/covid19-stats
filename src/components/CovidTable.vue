<script lang="ts" setup>
import StatsDataItem from '@/interfaces/StatsDataItem'
import formatNumber from '@/modules/formatNumber'

type Props = {
    stats: StatsDataItem[]
}

defineProps<Props>()
</script>

<template>
    <div>
        <table class="striped responsive-table">
            <thead>
                <tr class="blue-grey darken-4">
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>New cases</th>
                    <th>Deceased</th>
                    <th>Recovered</th>
                    <th>Last update</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="stat in stats" :key="stat.country">
                    <td>{{ stat.country }}</td>
                    <td>{{ formatNumber(stat.cases) }}</td>
                    <td>
                        {{
                            stat.newCases === 0
                                ? 0
                                : `+${formatNumber(stat.newCases)}`
                        }}
                    </td>
                    <td class="red-text text-darken-3">
                        {{ formatNumber(stat.deaths) }}
                    </td>
                    <td class="green-text text-darken-4">
                        {{ formatNumber(stat.recovered) }}
                    </td>
                    <td>
                        {{ stat.time }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
table {
    position: relative;

    td,
    th {
        padding: 8px 10px;
    }

    thead {
        th {
            color: white;
        }
    }

    tbody {
        td {
            font-weight: bold;
            border-bottom: 1px dashed #bdc4c7;
        }

        tr.user-country {
            background: #fff1a7;
        }
    }
}
</style>
