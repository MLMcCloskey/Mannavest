import { CONSTANTS } from '../actions';

export const addList = category => {
    return {
        type: CONSTANTS.ADD_LIST,
        payload: category
    }
}