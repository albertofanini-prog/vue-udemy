const app = Vue.createApp({
  data() {
    return{ 
      goals: [
        'Master in Vue!',
        'A ToDoList',
        'Here you can add items',
        'Or removing it clicking on'
      ],
      //3 - resettare valore di ingresso input 
      enteredGoalValue: ''
    };
  },
  // 2 - creare method per aggiungere goal a ul
  methods: {
    addGoal(){
      // 4 - inserire(push) qualsiasi cosa user scriva, nell'array
      this.goals.push(this.enteredGoalValue);
    },
    // 11 - Creare funzione per rimuovere un goal
    removeGoal(index){
      // 12 - Usare splice per irmuovere da array
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');

console.log('hello')