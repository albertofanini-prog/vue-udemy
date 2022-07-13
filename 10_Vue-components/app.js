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
    }
});

app.mount('#app');