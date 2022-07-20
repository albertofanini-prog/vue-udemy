<template>
    <ul>
        <LearningResource
            v-for="res in storedResources"
            :key="res.id"
            :title="res.title"
            :description="res.description"
            :link="res.link"    
        />
    </ul>
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
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    border: 5px solid red;
    width: 100%;
    height: 100vh;
}

ul{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
</style>