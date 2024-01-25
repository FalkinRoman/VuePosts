import { createStore } from "vuex";
import {postModule} from "@/store/postModule";

//создаем vuex
export default createStore({
    //модули 
    modules: {
        post: postModule
    }
})






