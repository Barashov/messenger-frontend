import { createStore } from "vuex";
import auth from './modules/auth'

const store = createStore({
    modules: {
        auth
    },
    state() {
        return {
            count: 3
        }
    }
})

export default store