// 3.0使用createStore接收vuex
import { createStore } from "vuex";

const options = {
    state: {},
    mutations: {},
    actions: {},
    modules: {},
}
// 通过createStore导出options options为一个对象 里面包含之前的一样state mutations actions 和 modules
export default createStore(options);
