import { createApp } from 'vue';
import App from './App.vue'; 
import components from './components/UI'
import router from "@/router/router";
import derectives from './derectives';
import  store from "@/store"

//создаем экземляр приложения
const app = createApp(App);

//пробегаемся по всем компонентам и глобально регистрируем ui
components.forEach(component => {
    app.component(component.name, component)
})

//дерективы 
derectives.forEach(derective => {
    app.directive(derective.name, derective)
})


app .use(store) //vuex
    .use(router) //маршрутизация
    .mount("#app");
