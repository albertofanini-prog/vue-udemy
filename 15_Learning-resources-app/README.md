<!-- 1 -->
Setup project:
    Create App.vue 
        Import it on main.js
            import App from './App.vue';
            createApp(App).mount('#app');
    Create components's folder in src
<!-- 2 -->
Populate App.vue's data()
    Every resoursce must have the ID
<!-- 3 -->
Create subfolder in components
    In subfolder
        Create components to contain data
            One tho show learning resource item
<!-- 4 -->
Import component in App.vue
Write component <component/> in App.vue
Populate component with template ecc
<!-- 5 -->
Give props to component to make it reusable
    Provide an array to props
        Every props will be a string
Provide dynamic props to html (app.vue)
    Give value to html tag component (es: :title="res.title")
<!-- 6 -->
Create new component for stored items
    Pass him props
    Register it on App.vue
<!-- 7 -->
Insert card wrapper in components/UI
    Use it as a slot
Change the div inside card with slot's name
Register the slot as a global to make it reusable