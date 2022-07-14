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