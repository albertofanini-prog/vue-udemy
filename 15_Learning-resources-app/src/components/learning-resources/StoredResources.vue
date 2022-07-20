<template>
    <ul class="resources-container">
        <LearningResource
            v-for="res in resources"
            :key="res.id"
            :title="res.title"
            :description="res.description"
            :link="res.link"    
        />
    </ul>
</template>

<script>
import LearningResource from './LearningResource.vue'

export default {
    components: {
        LearningResource
    },
    props: ['resources']
}
</script>

<style>
    .resources-container{
        /* border: 3px solid green; */
        width: 94%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 1rem;
        list-style: none;
    }

    @media screen and (min-width: 700px){
        .resources-container{
            width: 85%;
        }
    }

    @media screen and (min-width: 1100px){
        .resources-container{
            width: 60%;
        }
    }
</style>