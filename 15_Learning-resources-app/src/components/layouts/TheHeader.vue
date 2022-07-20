<template>
    <header>
        <h1>
            {{title}}
        </h1>
    </header>
</template>

<script>
export default {
    props: ['title'],
}
</script>

<style scoped>
    header{
        /* border: 2px solid red; */
        width: 100%;
        height: 8vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #640032;
        color: white;
        letter-spacing: 0.1rem;
    }
</style>