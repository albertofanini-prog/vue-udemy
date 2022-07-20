<template>
    <button
        :type="type"
        :class="mode"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['type', 'mode']
}
</script>

<style scoped>
    button {
        padding: 5px 12px;
        border-radius: 10px;
        border: none;
        background-color: #FF3737;
        color: white;
        cursor: pointer;
    }

    button:hover,
    button:active {
        background-color: #FF3737;
    }

    .flat {
        background-color: transparent;
        color: #3a0061;
        border: none;
    }

    .flat:hover,
    .flat:active {
        background-color: #edd2ff;
    }
</style>