const app = Vue.createApp({
  data() {
    return{ 
      goals: [],
      //3 - resettare valore di ingresso input 
      enteredGoalValue: ''
    };
  },
  // 2 - creare method per aggiungere goal a ul
  methods: {
    addGoal(){
      // 4 - inserire(push) qualsiasi cosa user scriva, nell'array
      this.goals.push(this.enteredGoalValue);
    }
  }
});

app.mount('#user-goals');

console.log('hello')