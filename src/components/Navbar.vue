<template>
    <nav class="indigo lighten-1">
        <div class="container">
            <div class="nav-wrapper">
                <router-link class="brand-logo" to="/">
                    C<img src="@/assets/covid.png" alt="covid logo" height="30" />VID-19
                </router-link>

                <!-- <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <router-link tag="li" to="/">
                        <a>Dashboard</a>
                    </router-link>
                </ul> -->
            </div>
        </div>
    </nav>
</template>

<script>
export default {
   //
}
</script>

<style lang="scss" scoped>
.brand-logo {
    font-size: 1.6em;

    img {
        transform: translateY(7px);
    }
}
</style>