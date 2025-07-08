<script lang="ts" setup>
import NavLinks from '@/components/NavLinks.vue'
import { ref, onMounted } from 'vue'

const showSidebar = ref<boolean>(false)

onMounted(() => {
    // todo: not working
    // Event.$on('new-view', () => (this.showSidebar = false))
})

function toggleSidenav(): void {
    showSidebar.value = !showSidebar.value
}
</script>

<template>
    <div>
        <nav class="blue-grey darken-4">
            <div class="container">
                <div class="hide-on-large-only">
                    <a
                        href="javascript:"
                        class="sidenav-trigger"
                        @click="toggleSidenav"
                    >
                        <img src="@/assets/bars.png" alt="menu" width="20" />
                    </a>
                </div>

                <div class="nav-wrapper">
                    <router-link class="brand-logo" to="/">
                        C<img
                            src="@/assets/covid.png"
                            alt="covid logo"
                            height="30"
                        />VID-19
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
                            <img src="@/assets/img/covid19.jpg" />
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

<style lang="scss" scoped>
$nav-height: 43px;

nav,
.sidenav-trigger {
    height: $nav-height;
}

.brand-logo {
    font-size: 1.3em;
    line-height: $nav-height;

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
