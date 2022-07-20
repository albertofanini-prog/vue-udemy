<template>
    <div>
        <h1>Manage goals</h1>
        <input type="text" ref="goal">
        <button @click="setGoal">Set goal</button>
        <teleport to="body">
            <error-alert v-if="inputIsInvalid">
                <h2>Input non è valido</h2>
                <button @click="confirmError">Okay</button>
            </error-alert>  
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'

export default {
    components: {
        ErrorAlert
    },
    data(){
        return{
            inputIsInvalid: false
        };
    },
    methods: {
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === ''){
                this.inputIsInvalid = true
            }
        },
        confirmError(){
            this.inputIsInvalid = false;
        }
    }
}
</script>