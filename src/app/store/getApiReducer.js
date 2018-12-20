const dashboard = (state = {

    open: true,
    freeBookmark: false,
    hiring: true,
    data: [],
    loading: false
}, action) => {
    switch (action.type) {
        case 'CHANGE_VIEW_OPTIONS': {
            return {
                ...state,
                name: action.payload
            }
        }
        case 'GET_GRAPH_VALUES_SUCCESS': {
            return {
                ...state,
                data: action.payload,
                loaded: true,
                loading: false
            }
        }
        case 'GET_GRAPH_VALUES_FAILED': {
            return {
                ...state,
                error: action.payload,
                loaded: false,
                loading: false
            }
        }
        case 'GET_GRAPH_VALUES_PENDING': {
            return {
                loaded: false,
                loading: true
            }
        }
        case 'GET_GRAPH_VALUES_ACTUAL_SUCCESS': {
            return {
                ...state,
                actual: action.payload,
                loaded: true,
                loading: false
            }
        }
        case 'GET_GRAPH_VALUES_ACTUAL_FAILED': {
            return {
                ...state,
                error: action.payload,
                loaded: false,
                loading: false
            }
        }
        case 'GET_GRAPH_VALUES_ACTUAL_PENDING': {
            return {
                loaded: false,
                loading: true
            }
        }
        default:
            return state
    }
}
export default dashboard