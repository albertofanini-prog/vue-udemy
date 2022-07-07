console.log('Udemy Vue');
// Partendo da html di base
// Scrivere nell'input
// Tramite button
//     Generare un li e aggiungerlo alla lista già presente

//selezionare il tag button
const buttonEl = document.querySelector('button');
// selezionare l'input
const inputEl = document.querySelector('input');
//selezionare ul
const listEl = document.querySelector('ul');

// creare funzione per aggiungere obbiettivo
function addGoal(){
    //selezionare il valore ricevuto da input
    const enteredValue = inputEl.value;
    //creare un li per inserire il valore ricevuto prima
    const listItemEl = document.createElement('li');
    //impostare il textContent come valore di entrata
    listItemEl.textContent = enteredValue;
    //aggiungere li a ul
    listEl.appendChild(listItemEl);
    //reset input
    inputEl.value = '';
}

// aggiungere listener al click
    //passare funzione da attivare al click
buttonEl.addEventListener('click', addGoal);
