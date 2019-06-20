import { CONSTANTS } from '../actions';

export const addCard = (listID, title, description, cost, image, cardID) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: {cardID, title, description, cost, image, listID}
    }
}