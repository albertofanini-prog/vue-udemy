const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: '',
    };
  },
  // watch è un object
  // qui si può usare un parametro come data o computed
  // da definire come metodo nei watch
  // quando la proprietà cambia
  // watcher viene reseguito 
  watch:{
    name(){
      // non si ritorna nulla perchè watcher non si usa in html
      // si specificano cose da eseguire quando il data cambia (name in questo caso)
      this.fullName = this.name + ' ' + 'Pallino'
    }

  },
  // Computed ritornano un Object
  // qui si definiscono dei metodi come in methods
  // ma methods e computed sono eseguiti in modo diverso
  computed: {
    // fullName(){
    //   if (this.name === ''){
    //     return '';
    //   }
    //   return this.name + ' ' + 'Pallino'
    // }
  },
  methods: {
    // metodo per fare output di full name
    //deve ritornare qualcosa perché non si usa per binding
    // ma per richiamarlo nelle graffe
    outputFullName(){
      // fare controllo
      // se name è vuoto ritorna stringa vuota
      // così da ritornare il cognome solo se name è compilato
      if (this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Pallino'
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
