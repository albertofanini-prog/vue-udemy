//1 - aggiungere active al div corrente

const app = Vue.createApp({
    data(){
        return{
            //2 - resettare gli active
            boxAselected: false,
            boxBselected: false,
            boxCselected: false,
        }
    },
    // 4 - Aggiungere method da usare quando il div è cliccato
    methods: {
        // 5 - dichiarare un identifier
        boxSelected(box){
            if (box === 'A'){
                this.boxAselected = !this.boxASelected;
            } else if (box === 'B'){
                this.boxBselected = !this.boxBSelected;
            } else if (box === 'C'){
                this.boxCselected = !this.boxCSelected;
            };
        },
    },
});

app.mount('#styling');