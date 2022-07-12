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
            // settare win su null
            winner: null
        }
    },
    computed: {
        monsterBarStyles (){
            if (this.monsterHealth < 0){
                return{
                    width: '0%'
                };
            }
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles (){
            if (this.playerHealth < 0){
                return{
                    width: '0%'
                };
            }
            return {width: this.playerHealth + '%'};
        },
        mayUseSpecialAttack(){
            // se il numero è divisibile per tre significa che siamo ogni tre round
            return this.currentRound % 3 !== 0;
        }
    },
    watch: {
        // il nome deve essee come la proprietà che vue deve guardare
        playerHealth(value){
            if (value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw';
            } else if(value <= 0){
                this.winner = 'monster';
            }
        },
        monsterHealth(value){
            if (value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw';
            } else if(value <= 0){
                this.winner = 'player';
            }
        }
    },
    methods: {
        attackMonster(){
            // implementare numero round quando mostro attacca
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            if(this.playerHealth < 0){
                // player lost
            }
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
        },
        healPlayer(){
            this.currentRound++;
            //calcolare un heal value casuale
            const healValue = getRandomValue(8, 20);
            // non superare i 100pt di vita
            if (this.playerHealth + healValue > 100){
                this.playerHealth = 100;
            } else{
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        },
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;

        },
        surrender(){
            this.winner = 'monster';
            this.playerHealth = 0;
        }
    }
});

app.mount('#game'); 