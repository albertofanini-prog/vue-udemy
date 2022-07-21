<template>
    <base-card>
        <div class="buttons_wrapper">
            <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">
                Stored
            </base-button>

            <base-button @click="setSelectedTab('add-resources')" :mode="addResButtonMode">
                Add
            </base-button>
        </div>
    </base-card>
    <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';

export default {
    components: {
        StoredResources,
        AddResources
    },
    data(){
        return{
            selectedTab: 'stored-resources',
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
        }
    },
    provide(){
        return{
            resources: this.storedResources
        }
    },
    computed:{
        storedResButtonMode(){
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResButtonMode(){
            return this.selectedTab === 'add-resources' ? null : 'flat' 
        }
    },
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab;
        }
    }
}
</script>

<style>
    .buttons_wrapper{
        /* border: 3px solid green; */
        height: 100%;
        width: 100%;
        align-self: center;
        display: flex;
        gap: 40px;
        padding: 1rem 1.6rem;
    }

    @media screen and (min-width: 680px) {
        .buttons_wrapper{
            width: 96%;
        }
    }
    
    @media screen and (min-width: 710px) {
        .buttons_wrapper{
            width: 88%;
        }
    }
    
    @media screen and (min-width: 1100px) {
        .buttons_wrapper{
            width: 62%;
        }
    }

    .buttons_wrapper button{
        height: 40px;
        width: 125px;
    }
</style>