/**
 * This UI Reducer tracks if the profile dropdown is opened or closed. 
 * @param {boolean} state.open indicates if the profile dropdown is opened.
 */

import { TOGGLE_TARGETEDDD_OPEN } from '../actions/dropdownActions';

export default function reducer(state = { open: true }, action) {
    switch (action.type) {
        case TOGGLE_TARGETEDDD_OPEN: {
            return {
                ...state,
                open: !state.open
            }
        }
        default:
            return state
    }
}
