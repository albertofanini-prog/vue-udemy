<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :scoped="goal"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            goals: ['Finish the course', 'Learn vue']
        }
    }
}
</script>

<style lang="scss" scoped>
    ul{
        width: 30rem;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 8px;
        padding-left: 32px;
        li{
            border-bottom: 1px solid black;
            padding: 1px;
        }
    }
</style>