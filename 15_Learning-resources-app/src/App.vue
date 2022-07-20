<template>
    <div id="app">
        <TheHeader
            title="Learning resources app"
        />
        <StoredResources
            :resources="storedResources"
        />
    </div>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue'
import StoredResources from './components/learning-resources/StoredResources.vue';

export default {
    components: {
        TheHeader,
        StoredResources,
    },
    data(){
        return{
            storedResources: [
                {
                    id: 0,
                    title: 'Vue Official guide',
                    description: 'The official VueJS documentation',
                    link: 'https://vuejs.org'
                },
                {
                    id: 1,
                    title: 'Google',
                    description: 'The most important tool for web developers',
                    link: 'https://google.com'
                }
            ],
        };
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