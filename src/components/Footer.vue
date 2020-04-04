<template>
    <footer class="indigo lighten-5">
        <a href="https://serhii.tk" footer-link target="_blank">
            <img src="@/assets/logo.png" alt="serhii cho logo" height="35">
        </a>
    </footer>
</template>

<style lang="scss" scoped>
    footer {
        position: sticky;
        bottom: 0;
        left: 2px;
        width: 90px;
        border-radius: 0 10px 0 0;
        padding: 4px 0;

        [footer-link] {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>