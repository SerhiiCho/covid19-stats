<template>
    <ul>
        <RouterLink :to="{ name: 'home' }" v-slot="{ isActive, navigate }" custom>
            <li
                :class="{ active: isActive }"
                @click="navigate"
                style="cursor: pointer"
            >
                <a>Dashboard</a>
            </li>
        </RouterLink>
        <RouterLink
            :to="{ name: 'what-to-do' }"
            v-slot="{ isActive, navigate }"
            custom
        >
            <li
                :class="{ active: isActive }"
                @click="navigate"
                style="cursor: pointer"
            >
                <a>What to do?</a>
            </li>
        </RouterLink>
    </ul>
</template>

<style lang="scss" scoped>
.nav-wrapper {
    ul {
        li {
            line-height: 43px;

            &.active {
                background-color: rgba(0, 0, 0, 0.4);
            }
        }
    }
}
</style>
