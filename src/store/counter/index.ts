import state from "./state";
import * as mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

export interface State {
    count: number;
    lastMutation: string;
    lastRandomInt: number;
    isLoading: boolean;
};

const counterStore = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}

export default counterStore