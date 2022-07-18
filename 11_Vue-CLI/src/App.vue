<template>
  <section>
    <header>
      <h1>My friends</h1>
    </header>

    <h2>Add a friend</h2>
    <new-friend @add-contact="addContact"></new-friend>

    <ul>
      <friend-contact
      v-for="friend in friends"
      :key="friend.id"
      :name="friend.name"
      :phone-number="friend.phone"
      :email-address="friend.email"
      :is-favourite="false"
      ></friend-contact>

      <!-- <friend-contact
      name="Guglielmo"
      phone-number="1234 85679"
      email-address="gug@host.it"
      :is-favourite="true"
      ></friend-contact> -->
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend.vue'

export default {
  components: { FriendContact, NewFriend },
  data(){
    return{
        friends: [
            {
                id: '0',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com',
            },
            {
                id: '1',
                name: 'Lorenz Manuel',
                phone: '01234 5678 991',
                email: 'lorenz@localhost.com',
            },
        ]
    }
  },
  methods: {
    addContact(name, phone, email){
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavourite: false
      };
      this.friends.push(newFriendContact)
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

#app section{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  border-radius: 15px;
  margin: 0 10px;
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>