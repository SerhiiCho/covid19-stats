<template>
    <ul>
        <router-link tag="li" to="/" exact>
            <a>Dashboard</a>
        </router-link>
        <router-link tag="li" to="/what-to-do" exact>
            <a>What to do?</a>
        </router-link>
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
