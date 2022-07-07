//aggiungere e rimuovere al contatore tramite i button

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  //scrivere la funzione in methods invece che in v-on
    //passarla a v-on
  methods: {
    addCounter(){
      //incrementare counter
      this.counter = this.counter + 1;
    },
    reduceCounter(){
      this.counter = this.counter - 1;
    }
  },
});

app.mount('#events');
