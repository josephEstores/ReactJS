const dashboard = (state = {
    open: true,
    freeBookmark: false,
    hiring: true,
    data: [],
    loading: false
}, action) => {
    switch (action.type) {
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
        default:
            return state
    }
}
export default dashboard