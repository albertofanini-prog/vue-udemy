<!-- 1 -->
Installare le dipendenze: npm install.
Lanciare il server di lavoro: npm run serve

<!-- 2 -->
Modificare main.js

<!-- 3 -->
Creare cartella components in src e creare i componenti in PascalCase.vue
I componenti devono essere multi world così da non essere interpetrati come tag html

<!-- 4 -->
Popolare i data.
Passare i data al template.
Creare metodo necessario, passarlo a @click corrispondente

<!-- 5 -->
PROPS
funzione Vue per fare store dei data in html
cosa definiamo in props sarà disponibile come nei data, dentro al componente
possiamo riferirici a esse nel method
props deve avere stesso nome di data properties così da poterlo passare senza speicficare il nome dell oggetto. {{name}} invece di {{friend.name}}
I props vanno dichiarati nel tag del componente come attributi html e in kebab case

<!-- 6 -->
Le props possono essere impostate come object per fare le validazioni e assicurarsi che quel dato sia di un certo tipo.
Ogni proprità può esere un oggetto con varie validazioni ad es required, default,  ecc.
String | Number | Boolean | Array | Object | Date |Function | Symbol

<!-- 7 -->
per passare booleano a tag componente è necessario fare il v-bind altrimenti vue legge come stringa

<!-- 8 -->
Si può fare v-for su tag componente ma è NECESSARIA la :key=""

<!-- 9 -->
Creare il form
Resettare le proprietà in data()
Passarle a v-model
Assegnare @submit.prevent al tag form
Passare a @submit.prevent il metodo
Il metodo deve avere $emit passando l'emit dichiarato prima dei data e i vmodel dell'input.
Passare ad App.vue lemit

<!-- 10 -->
Scrivere $amit nei methods di app.vue
Passare al metodo i parametri emit

<!-- 11 -->
DELETE
Aggiungere bottone
passare @click
nel click passare $emit
@click="$emit('delete')
aggiungere emit a lista emit in script
pasare òdelete a html
scrivere method in app vue e passare id
passare id in component.vue