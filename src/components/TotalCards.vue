<script lang="ts" setup>
import StatsDataItem from '@/interfaces/StatsDataItem'
import formatNumber from '@/modules/formatNumber'

type Props = {
    data: StatsDataItem | null
}

defineProps<Props>()
</script>

<template>
    <div>
        <div v-if="data === null"></div>
        <div v-else class="row">
            <div class="col m6 s12 l3">
                <div class="card" style="border-top-color: #a1bdf3">
                    <div class="card-content">
                        <span class="card-title">Confirmed</span>
                        <p>{{ formatNumber(data.cases) }}</p>
                    </div>
                </div>
            </div>
            <div class="col m6 s12 l3">
                <div class="card" style="border-top-color: rgb(235, 94, 94)">
                    <div class="card-content">
                        <span class="card-title">Deaths</span>
                        <p>{{ formatNumber(data.deaths) }}</p>
                    </div>
                </div>
            </div>
            <div class="col m6 s12 l3">
                <div class="card" style="border-top-color: rgb(235, 94, 94)">
                    <div class="card-content">
                        <span class="card-title">New cases</span>
                        <p>
                            {{
                                data.newCases === 0
                                    ? 0
                                    : `+${formatNumber(data.newCases)}`
                            }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="col m6 s12 l3">
                <div class="card" style="border-top-color: #00be89">
                    <div class="card-content">
                        <span class="card-title">Recovered</span>
                        <p>{{ formatNumber(data.recovered) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 1px dashed #b3b3b3;
    box-shadow: none;
    border-top-width: 4px;
    border-top-style: solid;

    &-title {
        font-size: 1.2em !important;
        margin-bottom: 0 !important;
        line-height: 1.5 !important;
    }

    &-content {
        padding: 15px 20px !important;
        text-align: center;

        p {
            font-weight: bold;
            font-size: 1.6em;
            color: #444;
            line-height: 1;
        }
    }
}
</style>
