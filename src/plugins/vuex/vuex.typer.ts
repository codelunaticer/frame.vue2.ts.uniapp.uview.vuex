import { LoginState } from "@/views/other/login/login.vuex";

export interface RootState {
  verssion: string;
}

export interface VuexStoreStates extends RootState {
  login: LoginState;
}
