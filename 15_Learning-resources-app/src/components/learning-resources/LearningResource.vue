<template>
    <li class="resource">
        <div>
            <header>
                <h3>{{title}}</h3>
                <button>Delete</button>
            </header>
        </div>
        <p>{{description}}</p>
        <nav>
            <a :href="link">View resource</a>
        </nav>
    </li>
</template>

<script>
export default {
    props: ['title', 'description', 'link'],
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

    div{
        /* border: 3px solid green; */
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    header{
        padding: 0.4rem 0px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button{
        padding: 4px 10px;
        border-radius: 10px;
        border: none;
        background-color: #FF3737;
        color: white;
        cursor: pointer;
    }
</style>