import axios from "axios";

export function getGraphValues() {
    return function (dispatch) {
      dispatch({ type: 'GET_GRAPH_VALUES_PENDING' })
      axios.get('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(response => {
          dispatch({
            type: 'GET_GRAPH_VALUES_SUCCESS',
            payload: response.data
          })
        }).catch(function err() {
          dispatch({
            type: 'GET_GRAPH_VALUES_FAILED',
            payload: err
          })
        })
    }
  }