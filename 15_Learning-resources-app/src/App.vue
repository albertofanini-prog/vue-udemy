<template>
    <div id="app">
        <h1>Learning resources app</h1>
        <ul class="resources-container">
            <LearningResource
                v-for="res in storedResources"
                :key="res.id"
                :title="res.title"
                :description="res.description"
                :link="res.link"    
            />
        </ul>
    </div>
</template>

<script>
import LearningResource from './components/learning-resources/LearningResource.vue';

export default {
    components: {
        LearningResource
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
    padding: 1rem 0px;
}

.resources-container{
    /* border: 3px solid green; */
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 1rem;
    list-style: none;
}
</style>