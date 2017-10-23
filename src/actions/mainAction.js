import { FLIP_CARD } from '../constants/mainConstants'

export function flipCard(cardSide) {
    return {
        type: FLIP_CARD,
        payload: cardSide
    }
}