import { handleActions } from 'redux-actions'
import { FETCH_ASSETS } from './../constants/fetchAssets';

export const assetsListReducer = handleActions({
    [FETCH_ASSETS]: (state, action) => [...action.payload],
}, []);