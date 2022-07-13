<!-- Creare una lista di amici dinamica
Mostrare i dettagli inseriti in dei componenti -->

<!-- 1 -->
Creare l'app vue in JS e dichiarare dove montarla

<!-- 2 -->
Nei data ritornare le proprietà dei friends sotto forma di array.
Ogni friend rappresenta un object che contiene: id, nome, phone e email.

<!-- 3 -->
Ciclare nel DOM con v-for l'array di friends
Assegnare :key="id" per fare il binding dinamico

<!-- 4 -->
Dichiarare nei data: detailsAreVisbile: false così che di base siano nascosti

<!-- 5 -->
Creare un metodo che che switcha il dataAreVisbile da false a true quando viene invocato
Passare il metodo al button con @click
Aggiungere controllo a ul con v-if. Se detailsAreVisbile è false come di default: non mostrare.
Aggiungere ternario a button. Se data sono visibili mostra hide, altrimenti show.

<!-- 6 -->
Il button essendo in v-for esegue l'azione per tutti gli item ogni item cliccato.
Il problema può esseer risolto con i components,

<!-- 7 -->
Fare la richiesta a Vue di creazione componente(app.component();)
Component ha bisogno di due parametri: un id da memorizzare per vue che contenga un trattino(-) fatto di due parole. Il secondo è un oggetto come passato ad app perché il componente è come se fosse una nuova app connessa alla main.
Può avere data, methods, ecc

<!-- 8 -->
Passare data e method da app a componente.
O si collega template o si crea nel componente.
Spostare template da HTML a componente.
Una volta passato rimuovere v-for e per essere sicuri che funiziona bene aggiungere le proprietà nel componente.

<!-- 9 -->
Scrivere in html il nome del componente sotto forma di tag (friend-contact)