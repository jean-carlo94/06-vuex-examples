import getRandomInt from "@/helpers/getRandomInt";
import type { ActionContext } from "vuex";
import type { State } from ".";

export const incrementRandomInt = async ({ commit } : ActionContext<State, State>) => {
    commit('setLoading');
    const randomInt = await getRandomInt();
    commit('incrementBy', randomInt);
    commit('setLoading');
};