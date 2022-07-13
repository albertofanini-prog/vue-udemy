const app =  Vue.createApp({
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
});

app.component('friend-contact', {
    template: 
        `
            <li>
            <h2>{{friend.name}}</h2>
            <button @click="toggleDetails(friend.id)">
                {{detailsAreVisibile ? 'Hide' : 'Show'}} Details
            </button>
            <ul v-if="detailsAreVisibile">
                <li><strong>Phone:</strong> {{friend.phone}}</li>
                <li><strong>Email:</strong> {{friend.email}}</li>
            </ul>
            </li>
        `
    ,
    data(){
        return{
            detailsAreVisibile: false,
            friend: {
                id: '0',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            }
        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisibile = !this.detailsAreVisibile;
        }
    },
});

app.mount('#app');