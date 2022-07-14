<template>
    <li>
        <h2>
          {{ name }}
          {{ friendIsFavourite === '1' ? '(Favourite)' : ''}}  
        </h2>

        <button @click="toggleDetails"> 
          {{detailsAreVisible ? 'Hide' : 'Show' }} Details
        </button>

        <button @click="toggleFavourite"> 
          Add Favourite
          {{friendIsFavourite ? 'Add' : 'Remove' }}
        </button>
        
        <ul v-if="detailsAreVisible">
          <li><strong>Phone:</strong> {{ phoneNumber }}</li>
          <li><strong>Email:</strong> {{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavourite'
  // ],
  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: String,
    emailAddress: String,
    isFavourite: String,
  },
  data(){
    return{
      detailsAreVisible: false,
      friend: {
        id: '0',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com'
      },
      friendIsFavourite: this.isFavourite,
    }
  },
  methods: {
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavourite(){
      if (this.friendIsFavourite === '1'){
        this.friendIsFavourite = '0';
      } else{
        this.friendIsFavourite = '1';
      }
    }
  }
}
</script>
 
<style>

</style>