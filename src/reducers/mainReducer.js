import { FLIP_CARD } from "../constants/mainConstants";

export function mainReducer(state = {}, action) {
    switch (action.type) {
        case FLIP_CARD:
            console.log('yes!');
            let cardSide = state.cardSide === "" ? "card_flip" : "";
            return state = { ...state, cardSide };

        default:
            return state
    }
}