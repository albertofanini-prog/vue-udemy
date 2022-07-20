<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    div{
        width: 100%;
        // margin: 2rem auto;
        // max-width: 30rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
    }
</style>