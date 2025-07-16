<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <div>
        <Navbar />

        <div class="container">
            <RouterView />
        </div>

        <Footer />
    </div>
</template>

<style lang="scss">
@use '@/assets/scss/_common';
@use '@/assets/scss/_spinner';
</style>
