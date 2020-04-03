<template>
    <div id="app">
        <Navbar />

        <div class="container section">
            <transition name="fade-in-left">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import Navbar from "@/components/Navbar.vue"

export default Vue.extend({
    components: {
        Navbar,
    }
})
</script>

<style lang="scss">
body {
    font-family: Arial, Helvetica, sans-serif;
}
</style>
