/*
 * @Author: mfxhb
 * @Date: 2022-12-01 15:13:19
 * @LastEditTime: 2022-12-01 15:29:01
 * @Description:
 */
import Vue from "vue";
import { Store } from "vuex";
import { VuexStoreStates } from "@/plugins/vuex/vuex.typer";

declare module "vue/types/vue" {
  interface Vue {
    $vuex: Store<VuexStoreStates>;
  }
}
