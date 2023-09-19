import type { State } from ".";


export const squareCount = ( state: State ) => {
    return state.count * state.count;
}