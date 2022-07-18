<template>
    <li>
        <h2>
          {{ name }}
          {{ friendIsFavourite ? '(Favourite)' : ''}}  
        </h2>

        <div class="buttons_wrapper">
          <button @click="toggleDetails"> 
            {{detailsAreVisible ? 'Hide' : 'Show' }} Details
          </button>

          <button @click="toggleFavourite"> 
            {{friendIsFavourite ? 'Remove' : 'Add' }} Favourite
          </button>
        </div>
        
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
    isFavourite: {
      type: Boolean,
      required: false,
      default: true,
      // validator: function(value){
      //   return value === '1' || value === '0';
      // }
    }
  },
  data(){
    return{
      detailsAreVisible: false,
      // friend: {
      //   id: '0',
      //   name: 'Manuel Lorenz',
      //   phone: '01234 5678 991',
      //   email: 'manuel@localhost.com'
      // },
      friendIsFavourite: this.isFavourite,
    }
  },
  methods: {
    toggleDetails(){
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavourite(){
      // if (this.friendIsFavourite === '1'){
      //   this.friendIsFavourite = '0';
      // } else{
      //   this.friendIsFavourite = '1';
      // }
      this.friendIsFavourite = !this.friendIsFavourite;
    }
  }
}
</script>
 
<style>
li{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

.buttons_wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
}
</style>