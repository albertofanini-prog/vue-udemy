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
            currentRound: 0,
        }
    },
    computed: {
        monsterBarStyles (){
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles (){
            return {width: this.playerHealth + '%'};
        },
        mayUseSpecialAttack(){
            // se il numero è divisibile per tre significa che siamo ogni tre round
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster(){
            // implementare numero round quando mostro attacca
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer()
        },
        attackPlayer(){
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
        },
        //disponibile ogni 3 round
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        }
    }
});

app.mount('#game'); 