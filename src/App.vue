<template>
    <div id="app">
        <Navbar />

        <div class="container">
            <transition name="animate" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>

        <Footer />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"

export default Vue.extend({
    components: {
        Navbar,
        Footer,
    },
})
</script>

<style lang="scss">
@import "@/assets/scss/_common";
@import "@/assets/scss/_spinner";
</style>
