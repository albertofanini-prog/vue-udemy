//aggiungere e rimuovere al contatore tramite i button

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  //scrivere la funzione in methods invece che in v-on
    //passarla a v-on
  methods: {
    //passare parametro dinamico
    addCounter(num){
      //incrementare counter
      this.counter = this.counter + num;
    },
    reduceCounter(num){
      this.counter = this.counter - num;
    },
    setName(event, lastName){
      // name nei data
      this.name = event.target.value + ' ' + lastName;
    }
  },
});

app.mount('#events');
