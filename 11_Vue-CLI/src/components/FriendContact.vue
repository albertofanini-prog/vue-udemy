<template>
    <div>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">Vedi dettagli</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            detailsAreVisible: false,
            friend: {
                id: '0',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            },
        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }
}
</script>
 
<style lang="scss">

</style>