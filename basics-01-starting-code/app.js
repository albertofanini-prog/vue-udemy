//creare vue app e dirgli quale elemento controllare
    //libero di dichiarare in una variabile
const app = Vue.createApp({
    //significa il valore stored in data è una funzione
    //himself di data è una funzione
    data(){
        //ritorna sempre object
        return{
            courseGoalA: 'Doing the master for Vue!',
            courseGoalB: 'Building amazing apps with Vue!',
            vueLink: 'https://vuejs.org'
        };
    },
    // definire funzioni in methods
    //himself di methods oggetto che racchiude le funzioni
    methods:{
        outputGoal(){
            // calcolare un numero random
                //così ritorna 0 o 1
            const randomNumber = Math.random();

            if(randomNumber < 0.5){
                // return 'Learning Vue!';

                // oltre alle stringhe ecc si può passare el in data()
                    // vue recupera i data e li mergia in un istanza globale
                    //methods data ecc sono sempre disponibili all'uso dentro #app
                    return this.courseGoalA;
            } else{
                // return 'Review Vue!';

                return this.courseGoalB;
            }
        }
    }
});

//mount vuole una stringa
//la stringa è css selector che identifica elemtno da usare con vue
//conviene id perché è unico
app.mount('#user-goal');