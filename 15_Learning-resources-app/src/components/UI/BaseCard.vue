<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
    div{
        /* border: 3px solid green; */
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 12px;
    }
</style>