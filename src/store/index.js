import { createStore } from "vuex";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import tab from './tab';
import { createApp } from 'vue'

const app = createApp({})

export const useAppStore = createStore({
  state: () => ({
    bootstrap,
  }),
});

// 创建vuex实例
export default createStore({
    modules: {
        tab
    }
})
app.use(tab)