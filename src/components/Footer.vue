<template>
    <footer class="indigo lighten-5">
        <a href="https://serhii.io" footer-link target="_blank">
            <img src="@/assets/logo.png" alt="serhii cho logo" height="35" />
        </a>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    position: sticky;
    bottom: 0;
    left: 2px;
    width: 100px;
    border-radius: 0 4px 0 0;
    padding: 4px 0;

    [footer-link] {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media (max-width: 601px) {
    footer {
        width: 100%;
        position: static;
    }
}
</style>
