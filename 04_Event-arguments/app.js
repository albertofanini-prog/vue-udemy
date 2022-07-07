//aggiungere e rimuovere al contatore tramite i button

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
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
    },
    submitForm(event){
      //ja indipendente da vue
      //blocca il refresh del browser al click su submit
      // event.preventDefault();
      
      alert('Submitted!');
    },
    // funzione per passare il nome al presso su invio
    confirmInput(){
      // confermato è uguale a name
      this.confirmedName = this.name;
    }
  },
});

app.mount('#events');
