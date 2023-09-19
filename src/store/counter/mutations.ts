import type { State } from ".";


export const increment = ( state: State ) => {
    state.count++;
    state.lastMutation = 'increment';
};

export const incrementBy = ( state: State, val:number ) => {
    state.count += val;
    state.lastMutation = 'incrementBy' + val;
    state.lastRandomInt = val;
};

export const setLoading = ( state: State ) => {
    state.isLoading = !state.isLoading;
    state.lastMutation = 'setLoading' + state.isLoading;
};