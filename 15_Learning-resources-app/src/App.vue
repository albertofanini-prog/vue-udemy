<template>
    <div id="app">
        <TheHeader
            title="Learning resources app"
        />
        <!-- <StoredResources
            :resources="storedResources"
        /> -->
        <TheResources/>
    </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
    components: {
        TheHeader,
        TheResources
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Arvo&family=Josefin+Sans:wght@300&family=Mingzat&family=Roboto:wght@300&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    /* border: 5px solid red; */
    width: 100%;
    /* height: 100vh; */
}

#app{
    /* border: 4px solid blue; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
</style>