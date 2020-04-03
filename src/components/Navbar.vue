<template>
    <nav class="red darken-3">
        <div class="container">
            <div class="nav-wrapper">
                <router-link class="brand-logo" to="/">
                    C<img src="@/assets/covid.png" alt="covid logo" height="23">VID-19
                </router-link>

                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <router-link tag="li" to="/"><a>Home</a></router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
   //
}
</script>