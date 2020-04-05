<template>
    <nav class="blue-grey darken-4">
        <div class="container">
            <div class="nav-wrapper">
                <router-link class="brand-logo" to="/">
                    C<img src="@/assets/covid.png" alt="covid logo" height="30" />VID-19
                </router-link>

                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <router-link tag="li" to="/" exact>
                        <a>Dashboard</a>
                    </router-link>
                    <router-link tag="li" to="/what-to-do" exact>
                        <a>What to do?</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
   //
})
</script>

<style lang="scss" scoped>
.brand-logo {
    font-size: 1.6em;

    img {
        transform: translateY(7px);
    }
}
nav ul li.active {
    background-color: rgba(0,0,0,0.4);
}
</style>