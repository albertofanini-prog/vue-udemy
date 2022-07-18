<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="name">Name</label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <label for="phone">Phone</label>
            <input type="tel" v-model="enteredPhone">
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" v-model="enteredEmail">
        </div>
        <div>
            <button>
                Add contact
            </button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data(){
        return{
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        };
    },
    methods: {
        submitData(){
            this.$emit(
                'add-contact', 
                this.enteredName, 
                this.enteredPhone, 
                this.enteredEmail
            );
        }
    } 
}
</script>

<style>
#app input {
  font: inherit;
  padding: 7px;
  border-radius: 8px;
  border: 1px solid silver;
  outline: none;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
    gap: 20px;
}
</style>