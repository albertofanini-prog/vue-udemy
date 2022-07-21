<template>
    <li class="resource">
        <base-card>
            <header>
                <h3>{{title}}</h3>
                <delete-button>Delete</delete-button>
            </header>
            <p>{{description}}</p>
            <nav>
                <a target= "_blank" :href="link">View resource</a>
            </nav>
        </base-card>
    </li>
</template>

<script>
// import BaseButton from '../UI/BaseButton.vue';
export default {
    props: ["title", "description", "link"],
    // components: { BaseButton }
}
</script>

<style scoped>
    .resource{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 16px;
        /* border: 1px solid black; */
        padding: 1rem 0.6rem;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }

    header{
        padding: 0.4rem 0px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button{
        padding: 5px 12px;
        border-radius: 10px;
        border: none;
        background-color: #FF3737;
        color: white;
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: #640032;
        font-weight: 700;
    }

    a:hover{
        border-bottom: 1px solid #640032;
        padding-bottom: 1px;
    }
</style>