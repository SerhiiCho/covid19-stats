<template>
    <div>
        <nav class="blue-grey darken-4">
            <div class="container">
                <div class="hide-on-large-only">
                    <a href="javascript:" class="sidenav-trigger" @click="toggleSidenav">
                        <img src="@/assets/bars.png" alt="menu" width="25">
                    </a>
                </div>

                <div class="nav-wrapper">
                    <router-link class="brand-logo" to="/">
                        C<img src="@/assets/covid.png" alt="covid logo" height="30" />VID-19
                    </router-link>

                    <div class="hide-on-med-and-down right"><NavLinks /></div>
                </div>
            </div>
        </nav>
        
        <div v-if="showSidebar">
            <div class="sidenav-overlay" @click="toggleSidenav"></div>
        </div>

        <div v-if="showSidebar">
            <ul class="sidenav">
                <li>
                    <div class="user-view">
                        <div class="background">
                            <img src="@/assets/img/covid19.jpg">
                        </div>

                        <a><span class="white-text name">COVID-19</span></a>
                        <a><span class="white-text email">Coronavirus</span></a>
                    </div>
                </li>
                <NavLinks />
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavLinks from '@/components/NavLinks.vue'

export default Vue.extend({
    data(): {
        showSidebar: boolean
    } {
        return {
            showSidebar: false,
        }
    },

    methods: {
        toggleSidenav(): void {
            this.showSidebar = !this.showSidebar
        }
    },

    components: {
        NavLinks,
    },
})
</script>

<style lang="scss" scoped>
    .brand-logo {
        font-size: 1.6em;

        img {
            transform: translateY(7px);
        }
    }

    .sidenav .background img {
        width: 100%;
    }

    .sidenav-trigger {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>