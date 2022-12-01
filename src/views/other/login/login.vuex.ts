/*
 * @Author: mfxhb
 * @Date: 2022-12-01 14:24:16
 * @LastEditTime: 2022-12-01 15:05:35
 * @Description:
 */

import { Module } from "vuex";

export interface LoginState {
  username: string;
  password: string;
}
type LoginStoreType = Module<LoginState, {}>;

export const login: LoginStoreType = {
  namespaced: true,
  state: {
    username: "admin",
    password: "123456",
  },
  actions: {},
};
