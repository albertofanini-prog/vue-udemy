<template>
    <section>
        <h1>My friends</h1>
        <friend-contact></friend-contact>
    </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
export default {
  components: { FriendContact },
    data() {
        return {
            friends: [
                {
                    id: '0',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: '1',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ]
        }
    },
}
</script>

<style lang="scss">
</style>