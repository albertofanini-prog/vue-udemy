//funzione esterna a vue per prendere un valore casuale
function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

//dopo aver creato l'app vue
// iniziare gestendo alucni data
    //salute del player
    //salute del monster
//gestire i methods per lavorare sulla barra della salute
    //attacco contro monster
        //valore casuale per l'attacco con Math.random
            // * Math.floor per avere un numero intero
            // * (12 - 5 )un nnumero tra 5 e 12 + numero minimo
const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
        }
    },
    computed: {
        monsterBarStyles (){
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles (){
            return {width: this.playerHealth + '%'};
        }
    },
    methods: {
        attackMonster(){
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer()
        },
        attackPlayer(){
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        }
    }
});

app.mount('#game'); 