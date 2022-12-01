/*
 * @Author: mfxhb
 * @Date: 2022-12-01 10:36:21
 * @LastEditTime: 2022-12-01 15:55:40
 * @Description:
 */
import Vuex, { StoreOptions } from "vuex";
import Vue from "vue";
import { login } from "@/views/other/login/login.vuex";
import { RootState } from "./vuex.typer";

Vue.use(Vuex);

const store: StoreOptions<RootState> = new Vuex.Store({
  state: {
    verssion: "3.0",
  },
  actions: {
    getVerssion({ state }) {
      console.log(state.verssion);
      return state.verssion;
    },
  },
  modules: {
    login,
  },
});

const useVuex = {
  install(app: any) {
    app.prototype.$vuex = store;
  },
};

export { useVuex };
