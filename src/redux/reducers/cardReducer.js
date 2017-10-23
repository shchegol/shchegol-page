import { FLIP_CARD } from "../constants/mainConstants";

const initialState = { cardSide: '' };

export default function(state = initialState, action) {
    switch (action.type) {
        case FLIP_CARD:
            return { cardSide: state.cardSide === "" ? "card_flip" : ""};
        default:
            return state
    }
}