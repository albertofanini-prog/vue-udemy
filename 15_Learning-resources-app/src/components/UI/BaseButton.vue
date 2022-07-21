<template>
    <button
        :class="mode"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style scoped>
    button {
        padding: 5px 12px;
        border-radius: 10px;
        border: none;
        background-color: #3a0061;
        color: white;
        cursor: pointer;
    }

    button:hover{
        background-color: #edd2ff;
        color: #3a0061;
        font-weight: 700;
    }

    .flat {
        background-color: transparent;
        color: #3a0061;
        border: 1px solid #3a0061;
    }

    .flat:hover,
    .flat:active {
        background-color: #edd2ff;
    }
</style>