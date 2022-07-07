console.log('Udemy Vue');

//creare app Vue(object)
Vue.createApp({

    //definire data
        //data ritorna un objects
    data(){
        return{
            //goals array settato come vuoto
            goals: [],
            //valore di ingresso input(vuoto)
            enteredValue: '',
        };
    },
    //methods è un object
        //qui si definiscono funzioni chiamabili da html
    methods:{
        //funzione per aggiungere goal a lista in html
        addGoal(){
            //pusha array ricevuto da input in array goals
            this.goals.push(this.enteredValue);
        }

    }
//in mount si specifica quale parte deve essere controllata da Vue
//in questo caso div #app che contiene tutto il markup
}).mount('#app');